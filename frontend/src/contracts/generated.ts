import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Forum
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const forumAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'commentIdIncrement',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'comments',
    outputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'title', internalType: 'string', type: 'string' },
      { name: 'description', internalType: 'string', type: 'string' },
      { name: 'spoil', internalType: 'bool', type: 'bool' },
      { name: 'likes', internalType: 'uint256', type: 'uint256' },
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 's1', internalType: 'string', type: 'string' },
      { name: 's2', internalType: 'string', type: 'string' },
    ],
    name: 'compareStringsbyBytes',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: '_postId', internalType: 'uint256', type: 'uint256' },
      { name: '_title', internalType: 'string', type: 'string' },
      { name: '_description', internalType: 'string', type: 'string' },
      { name: '_spoil', internalType: 'bool', type: 'bool' },
    ],
    name: 'createComment',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_postId', internalType: 'uint256', type: 'uint256' },
      { name: '_question', internalType: 'string', type: 'string' },
      { name: '_option1', internalType: 'string', type: 'string' },
      { name: '_option2', internalType: 'string', type: 'string' },
    ],
    name: 'createPoll',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_title', internalType: 'string', type: 'string' },
      { name: '_description', internalType: 'string', type: 'string' },
      { name: '_spoil', internalType: 'bool', type: 'bool' },
    ],
    name: 'createPost',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_commentId', internalType: 'uint256', type: 'uint256' }],
    name: 'downVoteComment',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_postId', internalType: 'uint256', type: 'uint256' }],
    name: 'downVotePost',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_commentId', internalType: 'uint256', type: 'uint256' }],
    name: 'getComment',
    outputs: [
      {
        name: '',
        internalType: 'struct Forum.Comment',
        type: 'tuple',
        components: [
          { name: 'owner', internalType: 'address', type: 'address' },
          { name: 'id', internalType: 'uint256', type: 'uint256' },
          { name: 'title', internalType: 'string', type: 'string' },
          { name: 'description', internalType: 'string', type: 'string' },
          { name: 'spoil', internalType: 'bool', type: 'bool' },
          { name: 'likes', internalType: 'uint256', type: 'uint256' },
          { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_postId', internalType: 'uint256', type: 'uint256' }],
    name: 'getCommentsFromPost',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_pollId', internalType: 'uint256', type: 'uint256' }],
    name: 'getPoll',
    outputs: [
      {
        name: '',
        internalType: 'struct Forum.Poll',
        type: 'tuple',
        components: [
          { name: 'id', internalType: 'uint256', type: 'uint256' },
          { name: 'question', internalType: 'string', type: 'string' },
          { name: 'option1', internalType: 'string', type: 'string' },
          { name: 'option2', internalType: 'string', type: 'string' },
          { name: 'option1Counter', internalType: 'uint256', type: 'uint256' },
          { name: 'option2Counter', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_postId', internalType: 'uint256', type: 'uint256' }],
    name: 'getPollFromPost',
    outputs: [
      {
        name: '',
        internalType: 'struct Forum.Poll',
        type: 'tuple',
        components: [
          { name: 'id', internalType: 'uint256', type: 'uint256' },
          { name: 'question', internalType: 'string', type: 'string' },
          { name: 'option1', internalType: 'string', type: 'string' },
          { name: 'option2', internalType: 'string', type: 'string' },
          { name: 'option1Counter', internalType: 'uint256', type: 'uint256' },
          { name: 'option2Counter', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_postId', internalType: 'uint256', type: 'uint256' }],
    name: 'getPost',
    outputs: [
      {
        name: '',
        internalType: 'struct Forum.Post',
        type: 'tuple',
        components: [
          { name: 'owner', internalType: 'address', type: 'address' },
          { name: 'id', internalType: 'uint256', type: 'uint256' },
          { name: 'title', internalType: 'string', type: 'string' },
          { name: 'description', internalType: 'string', type: 'string' },
          { name: 'spoil', internalType: 'bool', type: 'bool' },
          { name: 'likes', internalType: 'uint256', type: 'uint256' },
          { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_user', internalType: 'address', type: 'address' }],
    name: 'getPostsFromAddress',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'pollIdIncrement',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'polls',
    outputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'question', internalType: 'string', type: 'string' },
      { name: 'option1', internalType: 'string', type: 'string' },
      { name: 'option2', internalType: 'string', type: 'string' },
      { name: 'option1Counter', internalType: 'uint256', type: 'uint256' },
      { name: 'option2Counter', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'postIdIncrement',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'postToPoll',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'posts',
    outputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'title', internalType: 'string', type: 'string' },
      { name: 'description', internalType: 'string', type: 'string' },
      { name: 'spoil', internalType: 'bool', type: 'bool' },
      { name: 'likes', internalType: 'uint256', type: 'uint256' },
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_commentId', internalType: 'uint256', type: 'uint256' }],
    name: 'upVoteComment',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_postId', internalType: 'uint256', type: 'uint256' },
      { name: 'option', internalType: 'string', type: 'string' },
    ],
    name: 'upVotePollOption',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_postId', internalType: 'uint256', type: 'uint256' }],
    name: 'upVotePost',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'userAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'post',
        internalType: 'struct Forum.Post',
        type: 'tuple',
        components: [
          { name: 'owner', internalType: 'address', type: 'address' },
          { name: 'id', internalType: 'uint256', type: 'uint256' },
          { name: 'title', internalType: 'string', type: 'string' },
          { name: 'description', internalType: 'string', type: 'string' },
          { name: 'spoil', internalType: 'bool', type: 'bool' },
          { name: 'likes', internalType: 'uint256', type: 'uint256' },
          { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
        ],
        indexed: false,
      },
    ],
    name: 'PostSubmitted',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IMulticall3
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iMulticall3Abi = [
  {
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'aggregate',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
      { name: 'returnData', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call3[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'allowFailure', internalType: 'bool', type: 'bool' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'aggregate3',
    outputs: [
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call3Value[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'allowFailure', internalType: 'bool', type: 'bool' },
          { name: 'value', internalType: 'uint256', type: 'uint256' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'aggregate3Value',
    outputs: [
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'blockAndAggregate',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
      { name: 'blockHash', internalType: 'bytes32', type: 'bytes32' },
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getBasefee',
    outputs: [{ name: 'basefee', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'blockNumber', internalType: 'uint256', type: 'uint256' }],
    name: 'getBlockHash',
    outputs: [{ name: 'blockHash', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getBlockNumber',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getChainId',
    outputs: [{ name: 'chainid', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockCoinbase',
    outputs: [{ name: 'coinbase', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockDifficulty',
    outputs: [{ name: 'difficulty', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockGasLimit',
    outputs: [{ name: 'gaslimit', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockTimestamp',
    outputs: [{ name: 'timestamp', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'addr', internalType: 'address', type: 'address' }],
    name: 'getEthBalance',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getLastBlockHash',
    outputs: [{ name: 'blockHash', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'requireSuccess', internalType: 'bool', type: 'bool' },
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'tryAggregate',
    outputs: [
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'requireSuccess', internalType: 'bool', type: 'bool' },
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'tryBlockAndAggregate',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
      { name: 'blockHash', internalType: 'bytes32', type: 'bytes32' },
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link forumAbi}__
 */
export const useReadForumundefined = /*#__PURE__*/ createUseReadContract({
  abi: forumAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link forumAbi}__ and `functionName` set to `"commentIdIncrement"`
 */
export const useReadForumCommentIdIncrement =
  /*#__PURE__*/ createUseReadContract({
    abi: forumAbi,
    functionName: 'commentIdIncrement',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link forumAbi}__ and `functionName` set to `"comments"`
 */
export const useReadForumComments = /*#__PURE__*/ createUseReadContract({
  abi: forumAbi,
  functionName: 'comments',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link forumAbi}__ and `functionName` set to `"compareStringsbyBytes"`
 */
export const useReadForumCompareStringsbyBytes =
  /*#__PURE__*/ createUseReadContract({
    abi: forumAbi,
    functionName: 'compareStringsbyBytes',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link forumAbi}__ and `functionName` set to `"getComment"`
 */
export const useReadForumGetComment = /*#__PURE__*/ createUseReadContract({
  abi: forumAbi,
  functionName: 'getComment',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link forumAbi}__ and `functionName` set to `"getCommentsFromPost"`
 */
export const useReadForumGetCommentsFromPost =
  /*#__PURE__*/ createUseReadContract({
    abi: forumAbi,
    functionName: 'getCommentsFromPost',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link forumAbi}__ and `functionName` set to `"getPoll"`
 */
export const useReadForumGetPoll = /*#__PURE__*/ createUseReadContract({
  abi: forumAbi,
  functionName: 'getPoll',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link forumAbi}__ and `functionName` set to `"getPollFromPost"`
 */
export const useReadForumGetPollFromPost = /*#__PURE__*/ createUseReadContract({
  abi: forumAbi,
  functionName: 'getPollFromPost',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link forumAbi}__ and `functionName` set to `"getPost"`
 */
export const useReadForumGetPost = /*#__PURE__*/ createUseReadContract({
  abi: forumAbi,
  functionName: 'getPost',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link forumAbi}__ and `functionName` set to `"getPostsFromAddress"`
 */
export const useReadForumGetPostsFromAddress =
  /*#__PURE__*/ createUseReadContract({
    abi: forumAbi,
    functionName: 'getPostsFromAddress',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link forumAbi}__ and `functionName` set to `"pollIdIncrement"`
 */
export const useReadForumPollIdIncrement = /*#__PURE__*/ createUseReadContract({
  abi: forumAbi,
  functionName: 'pollIdIncrement',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link forumAbi}__ and `functionName` set to `"polls"`
 */
export const useReadForumPolls = /*#__PURE__*/ createUseReadContract({
  abi: forumAbi,
  functionName: 'polls',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link forumAbi}__ and `functionName` set to `"postIdIncrement"`
 */
export const useReadForumPostIdIncrement = /*#__PURE__*/ createUseReadContract({
  abi: forumAbi,
  functionName: 'postIdIncrement',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link forumAbi}__ and `functionName` set to `"postToPoll"`
 */
export const useReadForumPostToPoll = /*#__PURE__*/ createUseReadContract({
  abi: forumAbi,
  functionName: 'postToPoll',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link forumAbi}__ and `functionName` set to `"posts"`
 */
export const useReadForumPosts = /*#__PURE__*/ createUseReadContract({
  abi: forumAbi,
  functionName: 'posts',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link forumAbi}__
 */
export const useWriteForumundefined = /*#__PURE__*/ createUseWriteContract({
  abi: forumAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link forumAbi}__ and `functionName` set to `"createComment"`
 */
export const useWriteForumCreateComment = /*#__PURE__*/ createUseWriteContract({
  abi: forumAbi,
  functionName: 'createComment',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link forumAbi}__ and `functionName` set to `"createPoll"`
 */
export const useWriteForumCreatePoll = /*#__PURE__*/ createUseWriteContract({
  abi: forumAbi,
  functionName: 'createPoll',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link forumAbi}__ and `functionName` set to `"createPost"`
 */
export const useWriteForumCreatePost = /*#__PURE__*/ createUseWriteContract({
  abi: forumAbi,
  functionName: 'createPost',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link forumAbi}__ and `functionName` set to `"downVoteComment"`
 */
export const useWriteForumDownVoteComment =
  /*#__PURE__*/ createUseWriteContract({
    abi: forumAbi,
    functionName: 'downVoteComment',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link forumAbi}__ and `functionName` set to `"downVotePost"`
 */
export const useWriteForumDownVotePost = /*#__PURE__*/ createUseWriteContract({
  abi: forumAbi,
  functionName: 'downVotePost',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link forumAbi}__ and `functionName` set to `"upVoteComment"`
 */
export const useWriteForumUpVoteComment = /*#__PURE__*/ createUseWriteContract({
  abi: forumAbi,
  functionName: 'upVoteComment',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link forumAbi}__ and `functionName` set to `"upVotePollOption"`
 */
export const useWriteForumUpVotePollOption =
  /*#__PURE__*/ createUseWriteContract({
    abi: forumAbi,
    functionName: 'upVotePollOption',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link forumAbi}__ and `functionName` set to `"upVotePost"`
 */
export const useWriteForumUpVotePost = /*#__PURE__*/ createUseWriteContract({
  abi: forumAbi,
  functionName: 'upVotePost',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link forumAbi}__
 */
export const useSimulateForumundefined =
  /*#__PURE__*/ createUseSimulateContract({ abi: forumAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link forumAbi}__ and `functionName` set to `"createComment"`
 */
export const useSimulateForumCreateComment =
  /*#__PURE__*/ createUseSimulateContract({
    abi: forumAbi,
    functionName: 'createComment',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link forumAbi}__ and `functionName` set to `"createPoll"`
 */
export const useSimulateForumCreatePoll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: forumAbi,
    functionName: 'createPoll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link forumAbi}__ and `functionName` set to `"createPost"`
 */
export const useSimulateForumCreatePost =
  /*#__PURE__*/ createUseSimulateContract({
    abi: forumAbi,
    functionName: 'createPost',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link forumAbi}__ and `functionName` set to `"downVoteComment"`
 */
export const useSimulateForumDownVoteComment =
  /*#__PURE__*/ createUseSimulateContract({
    abi: forumAbi,
    functionName: 'downVoteComment',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link forumAbi}__ and `functionName` set to `"downVotePost"`
 */
export const useSimulateForumDownVotePost =
  /*#__PURE__*/ createUseSimulateContract({
    abi: forumAbi,
    functionName: 'downVotePost',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link forumAbi}__ and `functionName` set to `"upVoteComment"`
 */
export const useSimulateForumUpVoteComment =
  /*#__PURE__*/ createUseSimulateContract({
    abi: forumAbi,
    functionName: 'upVoteComment',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link forumAbi}__ and `functionName` set to `"upVotePollOption"`
 */
export const useSimulateForumUpVotePollOption =
  /*#__PURE__*/ createUseSimulateContract({
    abi: forumAbi,
    functionName: 'upVotePollOption',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link forumAbi}__ and `functionName` set to `"upVotePost"`
 */
export const useSimulateForumUpVotePost =
  /*#__PURE__*/ createUseSimulateContract({
    abi: forumAbi,
    functionName: 'upVotePost',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link forumAbi}__
 */
export const useWatchForumundefined = /*#__PURE__*/ createUseWatchContractEvent(
  { abi: forumAbi },
)

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link forumAbi}__ and `eventName` set to `"PostSubmitted"`
 */
export const useWatchForumPostSubmitted =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: forumAbi,
    eventName: 'PostSubmitted',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__
 */
export const useReadIMulticall3undefined = /*#__PURE__*/ createUseReadContract({
  abi: iMulticall3Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getBasefee"`
 */
export const useReadIMulticall3GetBasefee = /*#__PURE__*/ createUseReadContract(
  { abi: iMulticall3Abi, functionName: 'getBasefee' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getBlockHash"`
 */
export const useReadIMulticall3GetBlockHash =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getBlockHash',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getBlockNumber"`
 */
export const useReadIMulticall3GetBlockNumber =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getBlockNumber',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getChainId"`
 */
export const useReadIMulticall3GetChainId = /*#__PURE__*/ createUseReadContract(
  { abi: iMulticall3Abi, functionName: 'getChainId' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getCurrentBlockCoinbase"`
 */
export const useReadIMulticall3GetCurrentBlockCoinbase =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getCurrentBlockCoinbase',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getCurrentBlockDifficulty"`
 */
export const useReadIMulticall3GetCurrentBlockDifficulty =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getCurrentBlockDifficulty',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getCurrentBlockGasLimit"`
 */
export const useReadIMulticall3GetCurrentBlockGasLimit =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getCurrentBlockGasLimit',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getCurrentBlockTimestamp"`
 */
export const useReadIMulticall3GetCurrentBlockTimestamp =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getCurrentBlockTimestamp',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getEthBalance"`
 */
export const useReadIMulticall3GetEthBalance =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getEthBalance',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getLastBlockHash"`
 */
export const useReadIMulticall3GetLastBlockHash =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getLastBlockHash',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__
 */
export const useWriteIMulticall3undefined =
  /*#__PURE__*/ createUseWriteContract({ abi: iMulticall3Abi })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate"`
 */
export const useWriteIMulticall3Aggregate =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate3"`
 */
export const useWriteIMulticall3Aggregate3 =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate3',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate3Value"`
 */
export const useWriteIMulticall3Aggregate3Value =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate3Value',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"blockAndAggregate"`
 */
export const useWriteIMulticall3BlockAndAggregate =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: 'blockAndAggregate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"tryAggregate"`
 */
export const useWriteIMulticall3TryAggregate =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: 'tryAggregate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"tryBlockAndAggregate"`
 */
export const useWriteIMulticall3TryBlockAndAggregate =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: 'tryBlockAndAggregate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__
 */
export const useSimulateIMulticall3undefined =
  /*#__PURE__*/ createUseSimulateContract({ abi: iMulticall3Abi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate"`
 */
export const useSimulateIMulticall3Aggregate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate3"`
 */
export const useSimulateIMulticall3Aggregate3 =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate3',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate3Value"`
 */
export const useSimulateIMulticall3Aggregate3Value =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate3Value',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"blockAndAggregate"`
 */
export const useSimulateIMulticall3BlockAndAggregate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'blockAndAggregate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"tryAggregate"`
 */
export const useSimulateIMulticall3TryAggregate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'tryAggregate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"tryBlockAndAggregate"`
 */
export const useSimulateIMulticall3TryBlockAndAggregate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'tryBlockAndAggregate',
  })
