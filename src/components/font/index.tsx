'use client'

import { AnimatePresence, motion } from "framer-motion";
import {Image} from "@nextui-org/react";

function ImageCom () {
  return (
    <Image
      isBlurred
      width={200}
      src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
      alt="NextUI Album Cover"
      className="mb-5"
    />
  );
}


const content = {
  "title": "将进酒",
  "author": "李白",
  "poem": [
    "君不见黄河之水天上来，奔流到海不复回。",
    "君不见高堂明镜悲白发，朝如青丝暮成雪。",
    "人生得意须尽欢，莫使金樽空对月。",
    "天生我材必有用，千金散尽还复来。",
    "烹羊宰牛且为乐，会须一饮三百杯。",
    "岑夫子，丹丘生，将进酒，君莫停。",
    "与君歌一曲，请君为我倾耳听。",
    "钟鼓馔玉不足贵，但愿长醉不愿醒。",
    "古来圣贤皆寂寞，惟有饮者留其名。",
    "陈王昔时宴平乐，斗酒十千恣欢谑。",
    "主人何为言少钱，径须沽取对君酌。",
    "五花马，千金裘，呼儿将出换美酒，与尔同销万古愁。"
  ]
}

const container = {
  to: { opacity: 0 },
  from: {
    opacity: 1,
    transition: {
      duration: 0.5,
      // 所有子元素启动变化会比元素元慢0.5秒
      delayChildren: 0.5,
      staggerChildren: 0.2
    }
  }
}

const item = {
  to: { opacity: 0, filter: 'blur(20px)', x: 0 },
  from: { opacity: 1, filter: 'blur(0px)', x: 0 }
}
  
export default function FontHome () {
  return (
    <AnimatePresence>
      <motion.main 
        className="flex flex-col items-center justify-between p-10 text-4xl font-PangMenFont"
        variants={container}
        initial="to"
        animate="from"
      >
        <ImageCom></ImageCom>
        <motion.section drag variants={item} className="text-6xl">{content.title}</motion.section>
        <motion.section drag variants={item} className="m-0.5">{content.author}</motion.section>
        {
          content.poem.map((value, index) => (
            <motion.section 
              key={index} 
              className="m-0.5"
              variants={item}
              drag
              // dragElastic={{
              //   left:0,
              //   top:0.5,
              //   bottom:1,
              //   right:0.2
              // }}
              // dragConstraints={{
              //   left:-500,
              //   right: 500,
              //   top: -200,
              //   bottom: 500
              // }}
            >
              {value}
            </motion.section>
          ))
        }
      </motion.main>
    </AnimatePresence>
  )
}
  