/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50723
Source Host           : localhost:3306
Source Database       : monitor

Target Server Type    : MYSQL
Target Server Version : 50723
File Encoding         : 65001

Date: 2019-05-27 16:05:01
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `file_version`
-- ----------------------------
DROP TABLE IF EXISTS `file_version`;
CREATE TABLE `file_version` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `channel` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `platform` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `version` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `is_force` int(1) DEFAULT NULL,
  `download_url` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `info` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of file_version
-- ----------------------------
INSERT INTO `file_version` VALUES ('1', '1001', 'IOS', 'a001', '1', 'http://baidu.com', '注册22', '2019-05-27 15:56:38');
INSERT INTO `file_version` VALUES ('2', '1002', 'Android', 'a001', '0', 'http://www.bbb1111.ccc.com', 'abcdefg...00.........', '2019-05-27 15:36:04');
