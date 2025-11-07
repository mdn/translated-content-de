---
title: VirtualKeyboard API
slug: Web/API/VirtualKeyboard_API
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

{{SeeCompatTable}}{{DefaultAPISidebar("VirtualKeyboard API")}}{{securecontext_header}}

Die VirtualKeyboard-API bietet Entwicklern die Möglichkeit, das Layout ihrer Anwendungen zu steuern, wenn die virtuelle Tastatur auf Geräten wie Tablets, Mobiltelefonen oder anderen Geräten, bei denen möglicherweise keine Hardware-Tastatur verfügbar ist, ein- und ausgeblendet wird.

Webbrowser behandeln virtuelle Tastaturen in der Regel eigenständig, indem sie die Höhe des Ansichtsfensters anpassen und beim Fokussieren zu Eingabefeldern scrollen.

Die Abbildung unten veranschaulicht den Unterschied in der Ansichtsfensterhöhe und der Scrollposition auf einer Webseite, wenn die virtuelle Tastatur des Geräts verborgen ist und wenn sie angezeigt wird.

![Zwei Geräte, eines ohne virtuelle Tastatur, zeigt, dass die Webseite den größten Teil des vertikalen Platzes des Geräts nutzen kann, und eines mit virtueller Tastatur, zeigt, dass die Webseite nur in dem verbleibenden Raum angezeigt werden kann](viewport-height.png)

Komplexere Anwendungen oder spezielle Geräte wie Mehrbildschirm-Mobiltelefone erfordern möglicherweise mehr Kontrolle über das Layout, wenn die virtuelle Tastatur angezeigt wird.

Die Abbildung unten zeigt, was auf einem Dual-Screen-Gerät passiert, wenn die virtuelle Tastatur nur auf einem der beiden Bildschirme erscheint. Das Ansichtsfenster wird auf beiden Bildschirmen kleiner, um der virtuellen Tastatur Platz zu machen, sodass auf dem Bildschirm, auf dem die virtuelle Tastatur nicht angezeigt wird, ungenutzter Platz bleibt.

![Ein Dual-Screen-Gerät, mit seiner virtuellen Tastatur auf einem Bildschirm angezeigt, zeigt, dass die Webseite nur den vertikalen Raum nutzen kann, der nach dem Anzeigen der Tastatur verbleibt, selbst wenn dadurch auf dem anderen Bildschirm leerer Raum bleibt](dual-screen.png)

Die VirtualKeyboard-API kann verwendet werden, um die automatische Handhabung der virtuellen Tastatur durch den Browser abzulehnen und stattdessen die vollständige Kontrolle darüber zu übernehmen. Mit der VirtualKeyboard-API erscheint und verschwindet die Tastatur weiterhin bei Bedarf, wenn Formularelemente fokussiert werden, aber das Ansichtsfenster ändert sich nicht, und Sie können JavaScript und CSS verwenden, um Ihr Layout anzupassen.

## Konzept

Die VirtualKeyboard-API besteht aus drei Teilen:

- Die [`VirtualKeyboard`](/de/docs/Web/API/VirtualKeyboard) Schnittstelle, auf die über [`navigator.virtualKeyboard`](/de/docs/Web/API/Navigator/virtualKeyboard) zugegriffen wird, wird verwendet, um die automatische virtuelle Tastaturhandhabung zu deaktivieren, die virtuelle Tastatur programmgesteuert anzuzeigen oder zu verbergen sowie um die aktuelle Position und Größe der virtuellen Tastatur zu erhalten.
- Die `keyboard-inset-*` CSS-Umgebungsvariablen liefern Informationen über die Position und Größe der virtuellen Tastatur.
- Das [`virtualkeyboardpolicy`](/de/docs/Web/HTML/Reference/Global_attributes/virtualkeyboardpolicy) Attribut gibt an, ob die virtuelle Tastatur bei `contenteditable` Elementen erscheinen soll.

### Ablehnen des automatischen Verhaltens der virtuellen Tastatur

Um das automatische Verhalten der virtuellen Tastatur des Browsers zu deaktivieren, verwenden Sie `navigator.virtualKeyboard.overlaysContent = true`. Der Browser verändert dann nicht mehr automatisch die Größe des Ansichtsfensters, um Platz für die virtuelle Tastatur zu machen, die stattdessen Ihre Inhalte überlagern wird.

### Erkennen der Geometrie der virtuellen Tastatur mit JavaScript

Sobald Sie das Standardverhalten des Browsers deaktiviert haben, können Sie die aktuelle Geometrie der virtuellen Tastatur mit `navigator.virtualKeyboard.boundingRect` abrufen und das Layout entsprechend mit CSS und JavaScript anpassen. Zusätzlich können Sie auf Geometrieänderungen hören, z.B. wenn die Tastatur ein- oder ausgeblendet wird, indem Sie das `geometrychange` Ereignis verwenden.

Dies ist nützlich, um wichtige UI-Elemente in dem Bereich zu positionieren, der nicht von der virtuellen Tastatur überdeckt wird.

Der folgende Codeausschnitt verwendet das `geometrychange` Ereignis, um zu erkennen, wann sich die Geometrie der virtuellen Tastatur ändert; anschließend wird die `boundingRect` Eigenschaft abgefragt, um die Größe und Position der virtuellen Tastatur zu ermitteln:

```js
if ("virtualKeyboard" in navigator) {
  navigator.virtualKeyboard.overlaysContent = true;

  navigator.virtualKeyboard.addEventListener("geometrychange", (event) => {
    const { x, y, width, height } = event.target.boundingRect;
  });
}
```

### Erkennen der Geometrie der virtuellen Tastatur mit CSS-Umgebungsvariablen

Die VirtualKeyboard-API stellt auch die folgenden [CSS-Umgebungsvariablen](/de/docs/Web/CSS/Reference/Values/env) zur Verfügung: `keyboard-inset-top`, `keyboard-inset-right`, `keyboard-inset-bottom`, `keyboard-inset-left`, `keyboard-inset-width` und `keyboard-inset-height`.

Die `keyboard-inset-*` CSS-Umgebungsvariablen sind nützlich, um Ihr Layout an das Erscheinen der virtuellen Tastatur mit CSS anzupassen. Sie definieren ein Rechteck durch seine oberen, rechten, unteren und linken Einrückungen vom Rand des Ansichtsfensters. Die `width`- und `height`-Variablen sind ebenfalls verfügbar, wenn erforderlich.

Der folgende Codeausschnitt verwendet die `keyboard-inset-height` CSS-Variable, um Platz für die virtuelle Tastatur unter der Liste von Nachrichten und dem Eingabefeld in einer chatähnlichen Anwendung zu reservieren. Wenn die virtuelle Tastatur verborgen ist, gibt die `env()` Funktion `0px` zurück und der `keyboard` Rasterbereich ist verborgen. Die Nachrichten- und Eingabeelemente können die volle Höhe des Ansichtsfensters einnehmen. Wenn die virtuelle Tastatur erscheint, erhält der `keyboard` Rasterbereich die Höhe der virtuellen Tastatur.

```html
<ul id="messages"></ul>
<input type="text" />
```

```css
body {
  display: grid;
  margin: 0;
  height: 100vh;
  grid-template:
    "messages" 1fr
    "input" auto
    "keyboard" env(keyboard-inset-height, 0px);
}
```

```js
if ("virtualKeyboard" in navigator) {
  navigator.virtualKeyboard.overlaysContent = true;
}
```

### Steuerung der virtuellen Tastatur bei `contenteditable` Elementen

Standardmäßig lösen Elemente, die das [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Attribut verwenden, auch die virtuelle Tastatur aus, wenn sie angetippt oder angeklickt werden. In bestimmten Situationen kann es wünschenswert sein, dieses Verhalten zu verhindern und die virtuelle Tastatur stattdessen nach einem anderen Ereignis anzuzeigen.

Setzen Sie das [`virtualkeyboardpolicy`](/de/docs/Web/HTML/Reference/Global_attributes/virtualkeyboardpolicy) Attribut auf `manual`, um die Standardbehandlung der virtuellen Tastatur im Browser zu verhindern und stattdessen mit den `show()` und `hide()` Methoden der [`VirtualKeyboard`](/de/docs/Web/API/VirtualKeyboard) Schnittstelle selbst zu steuern.

Der folgende Codeausschnitt zeigt, wie das `virtualkeyboardpolicy` Attribut und die `navigator.virtualKeyboard.show()` Methode verwendet werden, um die virtuelle Tastatur stattdessen bei einem Doppelklick anzuzeigen:

```html
<div contenteditable virtualkeyboardpolicy="manual" id="editor"></div>
```

```js
if ("virtualKeyboard" in navigator) {
  navigator.virtualKeyboard.overlaysContent = true;

  const editor = document.getElementById("editor");
  editor.addEventListener("dblclick", () => {
    navigator.virtualKeyboard.show();
  });
}
```

## Schnittstellen

- [`VirtualKeyboard`](/de/docs/Web/API/VirtualKeyboard) {{experimental_inline}}
  - : Bietet Funktionen zum Abrufen von Tastatur-Layoutkarten und zum Umschalten der Erfassung von Tastenanschlägen der physischen Tastatur.

## Erweiterungen für andere Schnittstellen

- [`Navigator.virtualKeyboard`](/de/docs/Web/API/Navigator/virtualKeyboard) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt eine Referenz auf die [`VirtualKeyboard`](/de/docs/Web/API/VirtualKeyboard) API zurück, um die Kontrolle über die virtuelle Bildschirmtastatur zu übernehmen.
- [`HTMLElement.virtualkeyboardpolicy`](/de/docs/Web/API/HTMLElement/virtualKeyboardPolicy) {{experimental_inline}}
  - : Ein String, der angibt, ob die Standardrichtlinie des Browsers verwendet werden soll, um die virtuelle Tastatur anzuzeigen, wenn das Element fokussiert ist, oder ob das Anzeigen der virtuellen Tastatur manuell gesteuert werden soll.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Volle Kontrolle mit der VirtualKeyboard-API](https://developer.chrome.com/docs/web-platform/virtual-keyboard/)
