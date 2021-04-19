// rule to category
export default
[
    {
      "operation":"exact",
      "expression":"late fee for payment due",
      "category":"fees"
    },
    {
      "operation":"exact",
      "expression":"interest charged on purchases",
      "category":"fees"
    },
    {
      "operation":"regex",
      "expression":"payment.*?thank.*?you.*?",
      "category":"pay_card"
    },
    {
      "operation":"regex",
      "expression":".*?pharmacy.*?",
      "category":"pharmacy"
    },
    {
      "operation":"regex",
      "expression":".*? cafe .*?",
      "category":"coffee_shop"
    },
    {
      "operation":"regex",
      "expression":".*?mediterranean.*?",
      "category":"restaurants"
    },
    {
      "operation":"regex",
      "expression":".*?haircut.*?",
      "category":"hair"
    },
    {
      "operation":"regex",
      "expression":".*?grocery.*?",
      "category":"groceries"
    },
    {
      "operation":"keyword",
      "expression":"toys",
      "category":"toys"
    },
    {
      "operation":"regex",
      "expression":".*?boulanger.*?",
      "category":"coffee_shop"
    },
    {
      "operation":"exact",
      "expression":"foreign transaction fee",
      "category":"foreign_transaction_fee"
    },
    {
        "operation":"regex",
        "expression":".*?carwash.*?",
        "category":"carwash"
    },
    {
        "operation":"regex",
        "expression":".*?farmers mar.*?",
        "category":"groceries"
    },
    {
        "operation":"regex",
        "expression": "aramark zephyr cove resta.*?",
        "category": "restaurants"
    },
    {
        "operation":"regex",
        "expression": "zephyr cove.*?",
        "category": "hotel"
    },
    {
        "operation":"exact",
        "expression": "spoonful of comfort",
        "category": "gifts"
    },
    {
        "operation":"regex",
        "expression": ".*?fish and chip.*?",
        "category": "restaurants"
    },
    {
        "operation":"regex",
        "expression": ".*?parking",
        "category": "parking"
    },
    {
        "operation":"regex",
        "expression": ".*? coffee .*?",
        "category": "coffee_shop"
    },
    {
        "operation":"regex",
        "expression": ".*? cafe",
        "category": "coffee_shop"
    },
    {
      "operation": "regex",
      "expression": "wf home mtg.*?",
      "category": "mortgage"
    },
    {
      "operation": "regex",
      "expression": "online scheduled transfer.*?",
      "category": "transfer"
    },
    {
      "operation": "regex",
      "expression": "online banking transfer.*?",
      "category": "transfer"
    },
    {
      "operation": "regex",
      "expression": "shorebird hoa.*?",
      "category": "hoa"
    },
    {
      "operation": "regex",
      "expression": ".*?direct dep.*?",
      "category": "transfer"
    } 
  ];