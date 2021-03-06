window.skins={};
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml"};generateEUI.paths['resource/eui_skins/ButtonCoSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.fillMode = "scale";
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_co_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.source = "button_co_png";
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.autoVisibility = false;
		t.bottom = 0;
		t.visible = false;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.autoVisibility = false;
		t.percentHeight = 100;
		t.right = 0;
		t.visible = false;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);generateEUI.paths['resource/skins/gamestage.exml'] = window.gamestage = (function (_super) {
	__extends(gamestage, _super);
	function gamestage() {
		_super.call(this);
		this.skinParts = ["btn_rol","btn_fillup","btn_choose","ll_level","btn_tip","btn_back","im1","tx1"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.btn_rol_i(),this.btn_fillup_i(),this.btn_choose_i(),this.ll_level_i(),this.btn_tip_i(),this._Image2_i(),this._Image3_i(),this.btn_back_i(),this._Image4_i(),this.im1_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this._Label4_i(),this.tx1_i()];
	}
	var _proto = gamestage.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 19.85;
		t.anchorOffsetY = -14.6;
		t.height = 1136;
		t.source = "123_png";
		t.width = 640;
		t.x = 19.85;
		t.y = -14.6;
		return t;
	};
	_proto.btn_rol_i = function () {
		var t = new eui.Button();
		this.btn_rol = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.label = "";
		t.width = 140;
		t.x = 25;
		t.y = 900;
		return t;
	};
	_proto.btn_fillup_i = function () {
		var t = new eui.Button();
		this.btn_fillup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.label = "";
		t.width = 140;
		t.x = 180;
		t.y = 900;
		return t;
	};
	_proto.btn_choose_i = function () {
		var t = new eui.Button();
		this.btn_choose = t;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.label = "";
		t.width = 140;
		t.x = 335;
		t.y = 900;
		return t;
	};
	_proto.ll_level_i = function () {
		var t = new eui.Label();
		this.ll_level = t;
		t.horizontalCenter = 0;
		t.text = "Label";
		t.verticalAlign = "middle";
		t.y = 60;
		return t;
	};
	_proto.btn_tip_i = function () {
		var t = new eui.Button();
		this.btn_tip = t;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.label = "";
		t.width = 140;
		t.x = 490;
		t.y = 900;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.source = "xuanz4_png";
		t.touchEnabled = false;
		t.width = 50;
		t.x = 32;
		t.y = 910;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.source = "xuanz3_png";
		t.touchEnabled = false;
		t.width = 50;
		t.x = 185;
		t.y = 910;
		return t;
	};
	_proto.btn_back_i = function () {
		var t = new eui.Image();
		this.btn_back = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.source = "back_png";
		t.width = 80;
		t.x = 42;
		t.y = 45.3;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 40;
		t.source = "guanka1_png";
		t.touchEnabled = false;
		t.width = 40;
		t.x = 357;
		t.y = 915;
		return t;
	};
	_proto.im1_i = function () {
		var t = new eui.Image();
		this.im1 = t;
		t.height = 40;
		t.source = "tishi1_png";
		t.touchEnabled = false;
		t.width = 40;
		t.x = 505;
		t.y = 915;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "Rotate";
		t.textColor = 0xffffff;
		t.touchEnabled = false;
		t.x = 85;
		t.y = 925;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.height = 20;
		t.size = 20;
		t.text = "Overturn";
		t.touchEnabled = false;
		t.width = 80;
		t.x = 235;
		t.y = 925;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "Level";
		t.touchEnabled = false;
		t.x = 405;
		t.y = 925;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 3.33;
		t.height = 60;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "Tip:You would change the direction of the square by clicking the relevant button.";
		t.textAlign = "center";
		t.textColor = 0xd8cbcb;
		t.verticalAlign = "middle";
		t.width = 406;
		t.y = 5;
		return t;
	};
	_proto.tx1_i = function () {
		var t = new eui.Label();
		this.tx1 = t;
		t.size = 20;
		t.text = "Tip";
		t.touchEnabled = false;
		t.x = 555;
		t.y = 925;
		return t;
	};
	return gamestage;
})(eui.Skin);generateEUI.paths['resource/skins/leaderitem.exml'] = window.ListItemSkin = (function (_super) {
	__extends(ListItemSkin, _super);
	function ListItemSkin() {
		_super.call(this);
		this.skinParts = ["lb_top","im_head","lb_toplevel","lb_toptext"];
		
		this.height = 70;
		this.width = 490;
		this.elementsContent = [this._Rect1_i(),this.lb_top_i(),this.im_head_i(),this.lb_toplevel_i(),this.lb_toptext_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.index"],[0],this.lb_top,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.score"],[0],this.lb_toplevel,"text");
	}
	var _proto = ListItemSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseWidth = 20;
		t.fillColor = 0x119364;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.lb_top_i = function () {
		var t = new eui.Label();
		this.lb_top = t;
		t.fontFamily = "SimHei";
		t.size = 25;
		t.textColor = 0xfffcfc;
		t.verticalCenter = 0.5;
		t.x = 40;
		return t;
	};
	_proto.im_head_i = function () {
		var t = new eui.Image();
		this.im_head = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.width = 60;
		t.x = 153;
		t.y = 5;
		return t;
	};
	_proto.lb_toplevel_i = function () {
		var t = new eui.Label();
		this.lb_toplevel = t;
		t.size = 20;
		t.textColor = 0xf9f4f4;
		t.x = 361;
		t.y = 25;
		return t;
	};
	_proto.lb_toptext_i = function () {
		var t = new eui.Label();
		this.lb_toptext = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.size = 20;
		t.text = "Level";
		t.textAlign = "center";
		t.textColor = 0xf9f2f2;
		t.verticalAlign = "middle";
		t.width = 96;
		t.x = 265;
		t.y = 15;
		return t;
	};
	return ListItemSkin;
})(eui.Skin);generateEUI.paths['resource/skins/levelItem.exml'] = window.levelItem = (function (_super) {
	__extends(levelItem, _super);
	function levelItem() {
		_super.call(this);
		this.skinParts = ["image","btn_num_level","btn_tt","btn_lock"];
		
		this.height = 70;
		this.width = 70;
		this.elementsContent = [this.image_i(),this.btn_num_level_i(),this.btn_tt_i(),this.btn_lock_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("image","source","bgit2_png")
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = levelItem.prototype;

	_proto.image_i = function () {
		var t = new eui.Image();
		this.image = t;
		t.anchorOffsetX = -1;
		t.anchorOffsetY = 2;
		t.height = 70;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "bgit_png";
		t.width = 70;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btn_num_level_i = function () {
		var t = new eui.Label();
		this.btn_num_level = t;
		t.horizontalCenter = 1;
		t.size = 20;
		t.text = "1";
		t.textColor = 0x07f4b2;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.btn_tt_i = function () {
		var t = new eui.Image();
		this.btn_tt = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 28.8;
		t.source = "choose2_png";
		t.visible = false;
		t.width = 27.2;
		t.x = 36;
		t.y = 4.2;
		return t;
	};
	_proto.btn_lock_i = function () {
		var t = new eui.Image();
		this.btn_lock = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.horizontalCenter = 0;
		t.source = "lock1_png";
		t.visible = false;
		t.width = 30;
		t.y = 20;
		return t;
	};
	return levelItem;
})(eui.Skin);generateEUI.paths['resource/skins/levelgroup.exml'] = window.chooselevel = (function (_super) {
	__extends(chooselevel, _super);
	function chooselevel() {
		_super.call(this);
		this.skinParts = ["lv_group","btn_close"];
		
		this.height = 400;
		this.width = 510;
		this.elementsContent = [this._Rect1_i(),this._Label1_i(),this.lv_group_i(),this.btn_close_i()];
	}
	var _proto = chooselevel.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x346560;
		t.height = 400;
		t.strokeColor = 0xfcf4f4;
		t.strokeWeight = 10;
		t.width = 510;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "Level";
		t.textAlign = "center";
		t.textColor = 0xe8edec;
		t.top = 28;
		t.verticalAlign = "bottom";
		return t;
	};
	_proto.lv_group_i = function () {
		var t = new eui.Group();
		this.lv_group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 306.06;
		t.horizontalCenter = 0;
		t.width = 460;
		t.y = 80;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		return t;
	};
	_proto.btn_close_i = function () {
		var t = new eui.Image();
		this.btn_close = t;
		t.height = 50;
		t.source = "close1_png";
		t.width = 50;
		t.x = 440;
		t.y = 14;
		return t;
	};
	return chooselevel;
})(eui.Skin);generateEUI.paths['resource/skins/levelleader.exml'] = window.chooselevel = (function (_super) {
	__extends(chooselevel, _super);
	function chooselevel() {
		_super.call(this);
		this.skinParts = ["datalist","sl_lead","btn_close"];
		
		this.height = 600;
		this.width = 510;
		this.elementsContent = [this._Rect1_i(),this._Label1_i(),this.sl_lead_i(),this.btn_close_i()];
	}
	var _proto = chooselevel.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xf9f7f7;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0.5;
		t.size = 25;
		t.text = "Leaderboard";
		t.textAlign = "center";
		t.textColor = 0x070707;
		t.verticalAlign = "bottom";
		t.y = 20;
		return t;
	};
	_proto.sl_lead_i = function () {
		var t = new eui.Scroller();
		this.sl_lead = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 518;
		t.horizontalCenter = 0;
		t.scrollPolicyH = "off";
		t.percentWidth = 100;
		t.y = 72;
		t.viewport = this.datalist_i();
		return t;
	};
	_proto.datalist_i = function () {
		var t = new eui.List();
		this.datalist = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 522;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 8;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 10;
		t.paddingLeft = 10;
		t.paddingRight = 10;
		return t;
	};
	_proto.btn_close_i = function () {
		var t = new eui.Image();
		this.btn_close = t;
		t.height = 50;
		t.source = "close1_png";
		t.width = 50;
		t.x = 441;
		t.y = 10;
		return t;
	};
	return chooselevel;
})(eui.Skin);generateEUI.paths['resource/skins/popup.exml'] = window.Tou = (function (_super) {
	__extends(Tou, _super);
	function Tou() {
		_super.call(this);
		this.skinParts = ["btn_comple","lb_text"];
		
		this.height = 262;
		this.width = 398;
		this.elementsContent = [this._Rect1_i(),this.btn_comple_i(),this.lb_text_i(),this._Image1_i(),this._Label1_i()];
	}
	var _proto = Tou.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0x346560;
		t.percentHeight = 100;
		t.strokeColor = 0xfffcfc;
		t.strokeWeight = 10;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btn_comple_i = function () {
		var t = new eui.Button();
		this.btn_comple = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0.76;
		t.height = 50;
		t.label = "";
		t.width = 131;
		t.x = 133.5;
		t.y = 183.26;
		return t;
	};
	_proto.lb_text_i = function () {
		var t = new eui.Label();
		this.lb_text = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.horizontalCenter = 0;
		t.text = "111";
		t.textAlign = "center";
		t.textColor = 0xfcf7f7;
		t.verticalAlign = "middle";
		t.width = 284;
		t.y = 75;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.source = "next1_png";
		t.touchEnabled = false;
		t.width = 35;
		t.x = 139;
		t.y = 190;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "Next";
		t.touchEnabled = false;
		t.x = 186.5;
		t.y = 197.5;
		return t;
	};
	return Tou;
})(eui.Skin);generateEUI.paths['resource/skins/startgame.exml'] = window.startgame = (function (_super) {
	__extends(startgame, _super);
	function startgame() {
		_super.call(this);
		this.skinParts = ["btn_easy","btn_diff","btn_leader","btn_share"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.btn_easy_i(),this.btn_diff_i(),this.btn_leader_i(),this._Image2_i(),this._Label1_i(),this._Image3_i(),this._Label2_i(),this._Label3_i(),this.btn_share_i()];
	}
	var _proto = startgame.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1136;
		t.source = "123_png";
		t.touchEnabled = false;
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btn_easy_i = function () {
		var t = new eui.Button();
		this.btn_easy = t;
		t.anchorOffsetX = 182;
		t.anchorOffsetY = 52;
		t.height = 100;
		t.horizontalCenter = -7;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 360;
		t.y = 724;
		return t;
	};
	_proto.btn_diff_i = function () {
		var t = new eui.Button();
		this.btn_diff = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.horizontalCenter = -7;
		t.label = "";
		t.width = 360;
		t.y = 828;
		return t;
	};
	_proto.btn_leader_i = function () {
		var t = new eui.Image();
		this.btn_leader = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 124;
		t.source = "paixingban_png";
		t.width = 128;
		t.x = 17;
		t.y = 50;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 404;
		t.source = "bg2_png";
		t.width = 426;
		t.x = 100;
		t.y = 204;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.text = "智力榜";
		t.textColor = 0x07b78a;
		t.visible = false;
		t.x = 40;
		t.y = 159;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 137.34;
		t.horizontalCenter = 22.5;
		t.source = "title3_png";
		t.width = 384.67;
		t.y = 50;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Times";
		t.size = 40;
		t.text = "Simple";
		t.touchEnabled = false;
		t.x = 256;
		t.y = 702;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Times";
		t.size = 40;
		t.text = "Hard";
		t.touchEnabled = false;
		t.x = 273;
		t.y = 858;
		return t;
	};
	_proto.btn_share_i = function () {
		var t = new eui.Image();
		this.btn_share = t;
		t.height = 100;
		t.source = "share1_png";
		t.width = 100;
		t.x = 526;
		t.y = 12;
		return t;
	};
	return startgame;
})(eui.Skin);