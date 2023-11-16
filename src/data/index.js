const data = [
    {
        'name': 'Bob',
        'gender': 'Male',
        'age': 26,
        'activities': [
            { "date": "2018-10-2", "count": 56 },
            { "date": "2018-10-3", "count": 55 },
            { "date": "2018-10-4", "count": 70 },
            { "date": "2018-10-5", "count": 35 },
            { "date": "2018-10-6", "count": 61 },
            { "date": "2018-10-7", "count": 71 },
            { "date": "2018-10-8", "count": 57 },
            { "date": "2018-10-9", "count": 14 },
            { "date": "2018-10-10", "count": 72 },
            { "date": "2018-10-11", "count": 75 },
            { "date": "2018-10-12", "count": 35 },
            { "date": "2018-10-13", "count": 27 },
            { "date": "2018-10-14", "count": 57 },
            { "date": "2018-10-15", "count": 77 }
        ]
    },
    {   'name': 'Sarah',
        'gender': 'Female',
        'age': 56,
        'activities': [
            {'date': '2018-10-02', 'count': 26},
            {'date': '2018-10-03', 'count': 72},
            {'date': '2018-10-04', 'count': 76},
            {'date': '2018-10-05', 'count': 34},
            {'date': '2018-10-06', 'count': 71},
            {'date': '2018-10-07', 'count': 29},
            {'date': '2018-10-08', 'count': 26},
            {'date': '2018-10-09', 'count': 22},
            {'date': '2018-10-10', 'count': 30},
            {'date': '2018-10-11', 'count': 30},
            {'date': '2018-10-12', 'count': 78},
            {'date': '2018-10-13', 'count': 55},
            {'date': '2018-10-14', 'count': 77},
            {'date': '2018-10-15', 'count': 20}
        ]
    },
    {   'name': 'Michael',
        'gender': 'Male',
        'age': 45,
        'activities': [
            {'date': '2018-10-02', 'count': 49},
            {'date': '2018-10-03', 'count': 63},
            {'date': '2018-10-04', 'count': 10},
            {'date': '2018-10-05', 'count': 25},
            {'date': '2018-10-06', 'count': 15},
            {'date': '2018-10-07', 'count': 31},
            {'date': '2018-10-08', 'count': 63},
            {'date': '2018-10-09', 'count': 12},
            {'date': '2018-10-10', 'count': 34},
            {'date': '2018-10-11', 'count': 60},
            {'date': '2018-10-12', 'count': 60},
            {'date': '2018-10-13', 'count': 72},
            {'date': '2018-10-14', 'count': 17},
            {'date': '2018-10-15', 'count': 70}]
    },
    {   'name': 'Alice',
        'gender': 'Other',
        'age': 37,
        'activities': [
            {'date': '2018-10-02', 'count': 71},
            {'date': '2018-10-03', 'count': 21},
            {'date': '2018-10-04', 'count': 10},
            {'date': '2018-10-05', 'count': 39},
            {'date': '2018-10-06', 'count': 20},
            {'date': '2018-10-07', 'count': 63},
            {'date': '2018-10-08', 'count': 27},
            {'date': '2018-10-09', 'count': 58},
            {'date': '2018-10-10', 'count': 29},
            {'date': '2018-10-11', 'count': 77},
            {'date': '2018-10-12', 'count': 68},
            {'date': '2018-10-13', 'count': 26},
            {'date': '2018-10-14', 'count': 59},
            {'date': '2018-10-15', 'count': 53}]
    },
    {   'name': 'John',
        'gender': 'Male',
        'age': 23,
    'activities': [
            {'date': '2018-10-02', 'count': 14},
            {'date': '2018-10-03', 'count': 76},
            {'date': '2018-10-04', 'count': 70},
            {'date': '2018-10-05', 'count': 56},
            {'date': '2018-10-06', 'count': 57},
            {'date': '2018-10-07', 'count': 66},
            {'date': '2018-10-08', 'count': 40},
            {'date': '2018-10-09', 'count': 30},
            {'date': '2018-10-10', 'count': 70},
            {'date': '2018-10-11', 'count': 11},
            {'date': '2018-10-12', 'count': 60},
            {'date': '2018-10-13', 'count': 67},
            {'date': '2018-10-14', 'count': 63},
            {'date': '2018-10-15', 'count': 70}]
    },
    {   'name': 'Tonya',
        'gender': 'Female',
        'age': 45,
        'activities': [
            {'date': '2018-10-02', 'count': 47},
            {'date': '2018-10-03', 'count': 48},
            {'date': '2018-10-04', 'count': 70},
            {'date': '2018-10-05', 'count': 13},
            {'date': '2018-10-06', 'count': 79},
            {'date': '2018-10-07', 'count': 18},
            {'date': '2018-10-08', 'count': 69},
            {'date': '2018-10-09', 'count': 27},
            {'date': '2018-10-10', 'count': 47},
            {'date': '2018-10-11', 'count': 47},
            {'date': '2018-10-12', 'count': 62},
            {'date': '2018-10-13', 'count': 60},
            {'date': '2018-10-14', 'count': 19},
            {'date': '2018-10-15', 'count': 25}]
    },
    {   'name': 'Sean',
        'gender': 'Other',
        'age': 45,
        'activities': [
            {'date': '2018-10-02', 'count': 32},
            {'date': '2018-10-03', 'count': 68},
            {'date': '2018-10-04', 'count': 48},
            {'date': '2018-10-05', 'count': 53},
            {'date': '2018-10-06', 'count': 34},
            {'date': '2018-10-07', 'count': 55},
            {'date': '2018-10-08', 'count': 79},
            {'date': '2018-10-09', 'count': 48},
            {'date': '2018-10-10', 'count': 48},
            {'date': '2018-10-11', 'count': 21},
            {'date': '2018-10-12', 'count': 12},
            {'date': '2018-10-13', 'count': 13},
            {'date': '2018-10-14', 'count': 12},
            {'date': '2018-10-15', 'count': 10}]
    },
    {   'name': 'Kart',
        'gender': 'Other',
        'age': 38,
        'activities': [
            {'date': '2018-10-02', 'count': 58},
            {'date': '2018-10-03', 'count': 70},
            {'date': '2018-10-04', 'count': 23},
            {'date': '2018-10-05', 'count': 42},
            {'date': '2018-10-06', 'count': 17},
            {'date': '2018-10-07', 'count': 80},
            {'date': '2018-10-08', 'count': 79},
            {'date': '2018-10-09', 'count': 25},
            {'date': '2018-10-10', 'count': 58},
            {'date': '2018-10-11', 'count': 36},
            {'date': '2018-10-12', 'count': 33},
            {'date': '2018-10-13', 'count': 70},
            {'date': '2018-10-14', 'count': 59},
            {'date': '2018-10-15', 'count': 13}]
    },
    {   'name': 'Amy',
        'gender': 'Female',
        'age': 26,
        'activities': [{'date': '2018-10-02', 'count': 70},
            {'date': '2018-10-03', 'count': 35},
            {'date': '2018-10-04', 'count': 30},
            {'date': '2018-10-05', 'count': 64},
            {'date': '2018-10-06', 'count': 32},
            {'date': '2018-10-07', 'count': 12},
            {'date': '2018-10-08', 'count': 53},
            {'date': '2018-10-09', 'count': 75},
            {'date': '2018-10-10', 'count': 39},
            {'date': '2018-10-11', 'count': 50},
            {'date': '2018-10-12', 'count': 63},
            {'date': '2018-10-13', 'count': 17},
            {'date': '2018-10-14', 'count': 47},
            {'date': '2018-10-15', 'count': 22}]
    },
    {   'name': 'Chris',
        'gender': 'Other',
        'age': 26,
        'activities': [{'date': '2018-10-02', 'count': 75},
            {'date': '2018-10-03', 'count': 48},
            {'date': '2018-10-04', 'count': 46},
            {'date': '2018-10-05', 'count': 36},
            {'date': '2018-10-06', 'count': 54},
            {'date': '2018-10-07', 'count': 41},
            {'date': '2018-10-08', 'count': 44},
            {'date': '2018-10-09', 'count': 25},
            {'date': '2018-10-10', 'count': 24},
            {'date': '2018-10-11', 'count': 61},
            {'date': '2018-10-12', 'count': 32},
            {'date': '2018-10-13', 'count': 40},
            {'date': '2018-10-14', 'count': 14},
            {'date': '2018-10-15', 'count': 59}]
    },
    {
        'name': 'Tim',
        'gender': 'Male',
        'age': 30,
        'activities': [
            { "date": "2018-10-2", "count": 56 },
            { "date": "2018-10-3", "count": 41 },
            { "date": "2018-10-4", "count": 70 },
            { "date": "2018-10-5", "count": 12 },
            { "date": "2018-10-6", "count": 61 },
            { "date": "2018-10-7", "count": 55 },
            { "date": "2018-10-8", "count": 57 },
            { "date": "2018-10-9", "count": 14 },
            { "date": "2018-10-10", "count": 61 },
            { "date": "2018-10-11", "count": 70 },
            { "date": "2018-10-12", "count": 35 },
            { "date": "2018-10-13", "count": 27 },
            { "date": "2018-10-14", "count": 10 },
            { "date": "2018-10-15", "count": 77 }
        ]
    },
    {
        'name': 'Robin',
        'gender': 'Male',
        'age': 12,
        'activities': [
            { "date": "2018-10-2", "count": 31 },
            { "date": "2018-10-3", "count": 76 },
            { "date": "2018-10-4", "count": 48 },
            { "date": "2018-10-5", "count": 63 },
            { "date": "2018-10-6", "count": 42 },
            { "date": "2018-10-7", "count": 76 },
            { "date": "2018-10-8", "count": 30 },
            { "date": "2018-10-9", "count": 51 },
            { "date": "2018-10-10", "count": 42 },
            { "date": "2018-10-11", "count": 37 },
            { "date": "2018-10-12", "count": 26 },
            { "date": "2018-10-13", "count": 48 },
            { "date": "2018-10-14", "count": 95 },
            { "date": "2018-10-15", "count": 11 }
        ]
    },
    {
        'name': 'Anne',
        'gender': 'Female',
        'age': 41,
        'activities': [
            { "date": "2018-10-2", "count": 31 },
            { "date": "2018-10-3", "count": 76 },
            { "date": "2018-10-4", "count": 48 },
            { "date": "2018-10-5", "count": 36 },
            { "date": "2018-10-6", "count": 42 },
            { "date": "2018-10-7", "count": 72 },
            { "date": "2018-10-8", "count": 33 },
            { "date": "2018-10-9", "count": 55 },
            { "date": "2018-10-10", "count": 42 },
            { "date": "2018-10-11", "count": 27 },
            { "date": "2018-10-12", "count": 46 },
            { "date": "2018-10-13", "count": 58 },
            { "date": "2018-10-14", "count": 45 },
            { "date": "2018-10-15", "count": 12 }
        ]
    },
    {
        'name': 'Mark',
        'gender': 'Male',
        'age': 16,
        'activities': [
            { "date": "2018-10-2", "count": 66 },
            { "date": "2018-10-3", "count": 10 },
            { "date": "2018-10-4", "count": 54 },
            { "date": "2018-10-5", "count": 75 },
            { "date": "2018-10-6", "count": 55 },
            { "date": "2018-10-7", "count": 84 },
            { "date": "2018-10-8", "count": 24 },
            { "date": "2018-10-9", "count": 92 },
            { "date": "2018-10-10", "count": 84 },
            { "date": "2018-10-11", "count": 3 },
            { "date": "2018-10-12", "count": 78 },
            { "date": "2018-10-13", "count": 14 },
            { "date": "2018-10-14", "count": 30 },
            { "date": "2018-10-15", "count": 81 }
        ]
    },
    {
        'name': 'Joe',
        'gender': 'Male',
        'age': 59,
        'activities': [
            { "date": "2018-10-2", "count": 17 },
            { "date": "2018-10-3", "count": 22 },
            { "date": "2018-10-4", "count": 23 },
            { "date": "2018-10-5", "count": 1 },
            { "date": "2018-10-6", "count": 54 },
            { "date": "2018-10-7", "count": 58 },
            { "date": "2018-10-8", "count": 84 },
            { "date": "2018-10-9", "count": 24 },
            { "date": "2018-10-10", "count": 32 },
            { "date": "2018-10-11", "count": 16 },
            { "date": "2018-10-12", "count": 5 },
            { "date": "2018-10-13", "count": 22 },
            { "date": "2018-10-14", "count": 33 },
            { "date": "2018-10-15", "count": 29 }
        ]
    },
    {
        'name': 'Eve',
        'gender': 'Female',
        'age': 38,
        'activities': [
            { "date": "2018-10-2", "count": 3 },
            { "date": "2018-10-3", "count": 16 },
            { "date": "2018-10-4", "count": 12 },
            { "date": "2018-10-5", "count": 6 },
            { "date": "2018-10-6", "count": 97 },
            { "date": "2018-10-7", "count": 81 },
            { "date": "2018-10-8", "count": 22 },
            { "date": "2018-10-9", "count": 55 },
            { "date": "2018-10-10", "count": 99 },
            { "date": "2018-10-11", "count": 13 },
            { "date": "2018-10-12", "count": 76 },
            { "date": "2018-10-13", "count": 24 },
            { "date": "2018-10-14", "count": 39 },
            { "date": "2018-10-15", "count": 87 }
        ]
    },
    {
        'name': 'Karen',
        'gender': 'Female',
        'age': 21,
        'activities': [
            { "date": "2018-10-2", "count": 74 },
            { "date": "2018-10-3", "count": 99 },
            { "date": "2018-10-4", "count": 60 },
            { "date": "2018-10-5", "count": 2 },
            { "date": "2018-10-6", "count": 90 },
            { "date": "2018-10-7", "count": 63 },
            { "date": "2018-10-8", "count": 36 },
            { "date": "2018-10-9", "count": 88 },
            { "date": "2018-10-10", "count": 23 },
            { "date": "2018-10-11", "count": 34 },
            { "date": "2018-10-12", "count": 56 },
            { "date": "2018-10-13", "count": 87 },
            { "date": "2018-10-14", "count": 18 },
            { "date": "2018-10-15", "count": 38 }
        ]
    },
    {
        'name': 'Kirsty',
        'gender': 'Unknown',
        'age': 25,
        'activities': [
            { "date": "2018-10-2", "count": 5 },
            { "date": "2018-10-3", "count": 99 },
            { "date": "2018-10-4", "count": 9 },
            { "date": "2018-10-5", "count": 65 },
            { "date": "2018-10-6", "count": 41 },
            { "date": "2018-10-7", "count": 99 },
            { "date": "2018-10-8", "count": 42 },
            { "date": "2018-10-9", "count": 21 },
            { "date": "2018-10-10", "count": 89 },
            { "date": "2018-10-11", "count": 76 },
            { "date": "2018-10-12", "count": 83 },
            { "date": "2018-10-13", "count": 19 },
            { "date": "2018-10-14", "count": 63 },
            { "date": "2018-10-15", "count": 80 }
        ]
    },
    {
        'name': 'Chris',
        'gender': 'Female',
        'age': 30,
        'activities': [
            { "date": "2018-10-2", "count": 77 },
            { "date": "2018-10-3", "count": 28 },
            { "date": "2018-10-4", "count": 97 },
            { "date": "2018-10-5", "count": 40 },
            { "date": "2018-10-6", "count": 45 },
            { "date": "2018-10-7", "count": 21 },
            { "date": "2018-10-8", "count": 49 },
            { "date": "2018-10-9", "count": 24 },
            { "date": "2018-10-10", "count": 54 },
            { "date": "2018-10-11", "count": 99 },
            { "date": "2018-10-12", "count": 69 },
            { "date": "2018-10-13", "count": 9 },
            { "date": "2018-10-14", "count": 69 },
            { "date": "2018-10-15", "count": 70 }
        ]
    },
    {
        'name': 'Lisa',
        'gender': 'Female',
        'age': 47,
        'activities': [
            { "date": "2018-10-2", "count": 95 },
            { "date": "2018-10-3", "count": 66 },
            { "date": "2018-10-4", "count": 83 },
            { "date": "2018-10-5", "count": 36 },
            { "date": "2018-10-6", "count": 82 },
            { "date": "2018-10-7", "count": 51 },
            { "date": "2018-10-8", "count": 75 },
            { "date": "2018-10-9", "count": 76 },
            { "date": "2018-10-10", "count": 8 },
            { "date": "2018-10-11", "count": 58 },
            { "date": "2018-10-12", "count": 4 },
            { "date": "2018-10-13", "count": 94 },
            { "date": "2018-10-14", "count": 49 },
            { "date": "2018-10-15", "count": 61 }
        ]
    },
    {
        'name': 'Tom',
        'gender': 'Male',
        'age': 15,
        'activities': [
            { "date": "2018-10-2", "count": 21 },
            { "date": "2018-10-3", "count": 88 },
            { "date": "2018-10-4", "count": 61 },
            { "date": "2018-10-5", "count": 9 },
            { "date": "2018-10-6", "count": 80 },
            { "date": "2018-10-7", "count": 37 },
            { "date": "2018-10-8", "count": 82 },
            { "date": "2018-10-9", "count": 67 },
            { "date": "2018-10-10", "count": 93 },
            { "date": "2018-10-11", "count": 19 },
            { "date": "2018-10-12", "count": 90 },
            { "date": "2018-10-13", "count": 10 },
            { "date": "2018-10-14", "count": 23 },
            { "date": "2018-10-15", "count": 13 }
        ]
    },
    {
        'name': 'Stacy',
        'gender': 'Unknown',
        'age': 20,
        'activities': [
            { "date": "2018-10-2", "count": 56 },
            { "date": "2018-10-3", "count": 98 },
            { "date": "2018-10-4", "count": 95 },
            { "date": "2018-10-5", "count": 62 },
            { "date": "2018-10-6", "count": 84 },
            { "date": "2018-10-7", "count": 51 },
            { "date": "2018-10-8", "count": 71 },
            { "date": "2018-10-9", "count": 73 },
            { "date": "2018-10-10", "count": 33 },
            { "date": "2018-10-11", "count": 5 },
            { "date": "2018-10-12", "count": 50 },
            { "date": "2018-10-13", "count": 12 },
            { "date": "2018-10-14", "count": 77 },
            { "date": "2018-10-15", "count": 68 }
        ]
    },
    {
        'name': 'Charles',
        'gender': 'Male',
        'age': 13,
        'activities': [
            { "date": "2018-10-2", "count": 98 },
            { "date": "2018-10-3", "count": 10 },
            { "date": "2018-10-4", "count": 93 },
            { "date": "2018-10-5", "count": 19 },
            { "date": "2018-10-6", "count": 70 },
            { "date": "2018-10-7", "count": 26 },
            { "date": "2018-10-8", "count": 6 },
            { "date": "2018-10-9", "count": 82 },
            { "date": "2018-10-10", "count": 98 },
            { "date": "2018-10-11", "count": 43 },
            { "date": "2018-10-12", "count": 95 },
            { "date": "2018-10-13", "count": 50 },
            { "date": "2018-10-14", "count": 60 },
            { "date": "2018-10-15", "count": 93 }
        ]
    },
    {
        'name': 'Mary',
        'gender': 'Female',
        'age': 29,
        'activities': [
            { "date": "2018-10-2", "count": 53 },
            { "date": "2018-10-3", "count": 20 },
            { "date": "2018-10-4", "count": 82 },
            { "date": "2018-10-5", "count": 76 },
            { "date": "2018-10-6", "count": 9 },
            { "date": "2018-10-7", "count": 3 },
            { "date": "2018-10-8", "count": 76 },
            { "date": "2018-10-9", "count": 23 },
            { "date": "2018-10-10", "count": 80 },
            { "date": "2018-10-11", "count": 84 },
            { "date": "2018-10-12", "count": 88 },
            { "date": "2018-10-13", "count": 53 },
            { "date": "2018-10-14", "count": 58 },
            { "date": "2018-10-15", "count": 66 }
        ]
    },
]

export default data;