import express from 'express'
import { protectRoute } from '../middleware/auth.middleware.js'
import { acceptFriendRequest, getFriendRequests, getMyFriends, getOutgoingFriendReqs, getRecommendedUsers, sendFriendRequest } from '../controllers/user.controllers.js'


const router=express.Router()

router.use(protectRoute)

router.get('/',getRecommendedUsers)
router.get("/friends",getMyFriends)

router.post("/friend-request/:id", sendFriendRequest);  //id of the friend
router.put("/friend-request/:id/accept", acceptFriendRequest);//id of the friendrequest

router.get("/friend-requests", getFriendRequests);
router.get("/outgoing-friend-requests",getOutgoingFriendReqs);


export default router