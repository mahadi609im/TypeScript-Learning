const addCustomerInfo = <T extends { id: number }>(customerInfo: T) => {
  return {
    ...customerInfo,
  };
};

type InfoType = { id: number; name: string; hasCoupon: boolean };

const result = addCustomerInfo<InfoType>({
  id: 30,
  name: 'Mahadi',
  hasCoupon: true,
});

/**
 * <T extends { id: number; name: string }>
 * এখানে extends এর অর্থ inheritance না।
 * 
 * এখানে এর অর্থ:
   "T যেকোনো type হতে পারে, কিন্তু তার মধ্যে অবশ্যই id এবং name থাকতে হবে।"

   অর্থাৎ T-এর জন্য একটা minimum requirement দিয়ে দিলে।
 */
