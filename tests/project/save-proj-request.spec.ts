import * as supertest from 'supertest';
import { app, mongoose, mongooseConnectionPromise } from '../../src/app';

let token = '';
let newUserId: string;

afterAll(() => mongooseConnectionPromise.then(() => mongoose.disconnect()));

beforeAll(done => {
  supertest(app)
    .post('/v1/auth/login')
    .set('X-Requested-With', 'XMLHttpRequest')
    .send({
      username: 'stark@marvel.com',
      password: 'password',
    })
    .expect(200)
    .end((err, res) => {
      if (err) {
        throw err;
      }
      newUserId = res.body.data._id;
      token = res.body.accessToken;
      return done();
    });
});

describe('Test for saving project request data  ===> ', () => {
  it('Saving project request details api', done => {
    supertest(app)
      .post(`/v1/project/save-project-request`)
      .set('X-Requested-With', 'XMLHttpRequest')
      .set({ Authorization: `Bearer ${token}` })
      .send({
        currentStatus: 'sadsad',
        currentSituation: 'sdfdsf',
        challengeType: 'cvdsjhgv',
        challenge: 'cbbxgcge',
        degreeOfChallenge: 'nxcdshgsa',
        goalValueAdd: 'ssdcvmnjas',
        desiredFutureSituation: 'sdjhysgdew',
        targetStart: 'sdhfvgnxcb',
        expectedEnd: 'bcvhdsgftwesa',
        mainLocation: 'tehsdkvn',
        additionalLocations: 'nvsteddxsv',
        location2: 'AHDGBUYHASCV',
        location3: 'BCSYDGFYEWTC',
        location4: 'ZXBCHSAYHBSACC',
        communication: 'BCHSAFCAS',

        stakeHolders: [
          {
            stakeHolder: 'ascdkdvjhbiufwe',
            businessFunction: 'ascdkdvjhbiufwe',
            businessFunctionRole: 'ascdkdvjhbiufwe',
            sponsorsPosition: 'ascdkdvjhbiufwe',
            managersPosition: 'ascdkdvjhbiufwe',
          },
          {
            stakeHolder: 'vhbfdhsmchd',
            businessFunction: 'vhbfdhsmchd',
            businessFunctionRole: 'vhbfdhsmchd',
            sponsorsPosition: 'vhbfdhsmchd',
            managersPosition: 'vhbfdhsmchd',
          },
        ],

        roleAndResponsibility: [
          {
            consultant: 'dsvsdvxz',
            requiredHeadCount: 7,
            mainResponsibility: 'vhbvjhsd',
            requiredRole: 'xcjhnb vuh',
            engagementEnd: new Date(),
            engagementStart: new Date(),
            reqCapacityInFTE: 'sdxvnsdjbv',
            reqCapacityWorkDays: ' sxzdhvchsdgv',
            confirmAvgCapacity: 'zxjh hcgsxvc',
            avgCapacityPerWeek: 'sdbjdskbvvds',
            travellingRequired: 'ncsbvgdc',
            onsiteAvailability: 'xjczhvshdv',
            travellingFrequency: 'dsnvjbhsdv',
            travellingToLocations: ['sxhbcs', 'scvghsa', 'xsdvjbs'],
          },
          {
            consultant: 'dfjgbfdj',
            requiredHeadCount: 4,
            mainResponsibility: 'asjfcvklsd',
            requiredRole: 'xcjhnb s',
            engagementEnd: new Date(),
            engagementStart: new Date(),
            reqCapacityInFTE: 'sdvbmklds',
            reqCapacityWorkDays: 'dsknvjkbds',
            confirmAvgCapacity: 'zxjhdvfbsdj',
            avgCapacityPerWeek: 'sdbjdskbvvds',
            travellingRequired: 'ncsbvgdc',
            onsiteAvailability: 'xjczhvshdv',
            travellingFrequency: 'dsnvjbhsdv',
            travellingToLocations: ['sxhbcs', 'scvghsa', 'xsdvjbs'],
          },
        ],
        skillsAndExperience: [
          {
            role: 'project manager',
            yearsOfProfessionalExp: '12',
            clientsIndustryExp: 'asfascv',
            clientsCompanyExp: 'xgvcssad',
            businessFunction: 'revstcjas',
            functional: ['sdacmnk', 'skcn', 'scdgh'],
            personal: ['chgsa', 'sgchy', 'sdckjhj'],
            leadership: ['ashcbvh', 'dvjhj', 'sdihsd'],
            entrepreneurship: ['hjsdgch', 'sadgsa', 'dshcgb'],
            desiredDailyRate: 2500,
            travellingExpensePercentage: '17%',
            proposalSelectionMode: 'sdhcgfsdygsdvd',
          },
          {
            role: 'developer',
            yearsOfProfessionalExp: '12',
            clientsIndustryExp: 'asfascv',
            clientsCompanyExp: 'xgvcssad',
            businessFunction: 'revstcjas',
            functional: ['sdacmnk', 'skcn', 'scdgh'],
            personal: ['chgsa', 'sgchy', 'sdckjhj'],
            leadership: ['ashcbvh', 'dvjhj', 'sdihsd'],
            entrepreneurship: ['hjsdgch', 'sadgsa', 'dshcgb'],
            desiredDailyRate: 1500,
            travellingExpensePercentage: '17%',
            proposalSelectionMode: 'sdhcgfsdygsdvd',
          },
          {
            role: 'designer',
            yearsOfProfessionalExp: '12',
            clientsIndustryExp: 'asfascv',
            clientsCompanyExp: 'xgvcssad',
            businessFunction: 'revstcjas',
            functional: ['sdacmnk', 'skcn', 'scdgh'],
            personal: ['chgsa', 'sgchy', 'sdckjhj'],
            leadership: ['ashcbvh', 'dvjhj', 'sdihsd'],
            entrepreneurship: ['hjsdgch', 'sadgsa', 'dshcgb'],
            desiredDailyRate: 500,
            travellingExpensePercentage: '17%',
            proposalSelectionMode: 'sdhcgfsdygsdvd',
          },
        ],
        clientsMessage: 'dsjbvhvz',
      })
      .expect(200)
      .end((err, res) => {
        if (err) {
          throw err;
        }
        return done();
      });
  });
});
