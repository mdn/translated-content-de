---
title: VirtualKeyboard API
slug: Web/API/VirtualKeyboard_API
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{SeeCompatTable}}{{DefaultAPISidebar("VirtualKeyboard API")}}{{securecontext_header}}

Die VirtualKeyboard API bietet Entwicklern Kontrolle über das Layout ihrer Anwendungen, wenn die virtuelle Bildschirmtastatur auf Geräten wie Tablets, Mobiltelefonen oder anderen Geräten, bei denen eine Hardwaretastatur möglicherweise nicht verfügbar ist, ein- und ausgeblendet wird.

Webbrowser kümmern sich normalerweise selbst um virtuelle Tastaturen, indem sie die Ansichtshöhe anpassen und beim Fokussieren auf Eingabefelder scrollen.

Die folgende Abbildung zeigt den Unterschied in der Ansichtshöhe und der Scrollposition auf einer Webseite, wenn die virtuelle Bildschirmtastatur des Geräts ausgeblendet und wenn sie eingeblendet ist.

![Zwei Geräte, eines ohne virtuelle Tastatur, zeigt, dass die Webseite den größten Teil des vertikalen Platzes des Geräts nutzen kann, und eines mit einer virtuellen Tastatur, zeigt, dass die Webseite nur im verbleibenden Platz angezeigt werden kann](viewport-height.png)

Komplexere Anwendungen oder spezielle Geräte wie mehrbildschirmige Mobiltelefone erfordern möglicherweise eine bessere Kontrolle über das Layout, wenn die virtuelle Tastatur erscheint.

Die folgende Abbildung zeigt, was auf einem Zweibildschirmgerät passiert, wenn die virtuelle Tastatur nur auf einem der beiden Bildschirme erscheint. Die Ansicht wird auf beiden Bildschirmen kleiner, um Platz für die virtuelle Tastatur zu schaffen, was dazu führt, dass Platz auf dem Bildschirm verschwendet wird, auf dem die virtuelle Tastatur nicht angezeigt wird.

![Ein Gerät mit zwei Bildschirmen, mit angezeigter virtueller Tastatur auf einem Bildschirm, zeigt, dass die Webseite nur den vertikalen Bereich nutzen kann, der nach dem Anzeigen der Tastatur übrig bleibt, selbst wenn auf dem anderen Bildschirm leerer Raum bleibt](dual-screen.png)

Die VirtualKeyboard API kann verwendet werden, um aus der automatischen Handhabung der virtuellen Tastatur durch den Browser auszusteigen und stattdessen die vollständige Kontrolle zu übernehmen. Mit der VirtualKeyboard API erscheint und verschwindet die Tastatur weiterhin nach Bedarf, wenn Formularelemente fokussiert werden, aber die Ansicht ändert sich nicht, und Sie können JavaScript und CSS verwenden, um Ihr Layout anzupassen.

## Konzept

Die VirtualKeyboard API besteht aus drei Teilen:

- Die [`VirtualKeyboard`](/de/docs/Web/API/VirtualKeyboard) Schnittstelle, die über [`navigator.virtualKeyboard`](/de/docs/Web/API/Navigator/virtualKeyboard) zugänglich ist, wird verwendet, um aus dem automatischen Verhalten der virtuellen Tastatur auszusteigen, die virtuelle Tastatur programmgesteuert ein- oder auszublenden sowie die aktuelle Position und Größe der virtuellen Tastatur zu erhalten.
- Die `keyboard-inset-*` CSS-Umgebungsvariablen liefern Informationen über die Position und Größe der virtuellen Tastatur.
- Das [`virtualkeyboardpolicy`](/de/docs/Web/HTML/Global_attributes/virtualkeyboardpolicy) Attribut spezifiziert, ob die virtuelle Tastatur auf `contenteditable` Elementen erscheinen soll.

### Ausstieg aus dem automatischen Verhalten der virtuellen Tastatur

Um aus dem automatischen Verhalten der virtuellen Tastatur des Browsers auszusteigen, verwenden Sie `navigator.virtualKeyboard.overlaysContent = true`. Der Browser wird die Ansicht nicht mehr automatisch verkleinern, um Platz für die virtuelle Tastatur zu schaffen, stattdessen überlagert sie Ihren Inhalt.

### Erkennung der Geometrie der virtuellen Tastatur mit JavaScript

Nachdem Sie aus dem Standardverhalten des Browsers ausgestiegen sind, können Sie die aktuelle Geometrie der virtuellen Tastatur mithilfe von `navigator.virtualKeyboard.boundingRect` ermitteln und das Layout entsprechend mit CSS und JavaScript anpassen. Sie können auch Geometrieänderungen, wie z. B. das Ein- oder Ausblenden der Tastatur, durch das `geometrychange`-Ereignis erfassen.

Dies ist nützlich, um wichtige UI-Elemente in dem Bereich zu positionieren, der nicht von der virtuellen Tastatur überdeckt wird.

Der folgende Codeausschnitt verwendet das `geometrychange`-Ereignis, um zu erkennen, wann sich die Geometrie der virtuellen Tastatur ändert; er greift dann auf die `boundingRect`-Eigenschaft zu, um die Größe und Position der virtuellen Tastatur abzufragen:

```js
if ("virtualKeyboard" in navigator) {
  navigator.virtualKeyboard.overlaysContent = true;

  navigator.virtualKeyboard.addEventListener("geometrychange", (event) => {
    const { x, y, width, height } = event.target.boundingRect;
  });
}
```

### Erkennung der Geometrie der virtuellen Tastatur mit CSS-Umgebungsvariablen

Die VirtualKeyboard API stellt auch die folgenden [CSS-Umgebungsvariablen](/de/docs/Web/CSS/env) zur Verfügung: `keyboard-inset-top`, `keyboard-inset-right`, `keyboard-inset-bottom`, `keyboard-inset-left`, `keyboard-inset-width`, und `keyboard-inset-height`.

Die `keyboard-inset-*` CSS-Umgebungsvariablen sind nützlich, um Ihr Layout an das Erscheinen der virtuellen Tastatur mit CSS anzupassen. Sie definieren ein Rechteck durch seine oberen, rechten, unteren und linken Einrückungen vom Rand der Ansicht. Die `width` und `height` Variablen sind ebenfalls verfügbar, falls erforderlich.

Der folgende Codeausschnitt verwendet die `keyboard-inset-height` CSS-Variable, um Platz für die virtuelle Tastatur unter der Liste der Nachrichten und dem Eingabefeld in einer chat-ähnlichen Anwendung zu reservieren. Wenn die virtuelle Tastatur ausgeblendet ist, gibt die `env()`-Funktion `0px` zurück und der `keyboard` Grid-Bereich ist ausgeblendet. Die Nachrichten und Eingabeelemente können die volle Höhe der Ansicht einnehmen. Wenn die virtuelle Tastatur erscheint, erhält der `keyboard` Grid-Bereich die Höhe der virtuellen Tastatur.

```html
<style>
  body {
    display: grid;
    margin: 0;
    height: 100vh;
    grid-template:
      "messages" 1fr
      "input" auto
      "keyboard" env(keyboard-inset-height, 0px);
  }
</style>
<ul id="messages"></ul>
<input type="text" />
<script>
  if ("virtualKeyboard" in navigator) {
    navigator.virtualKeyboard.overlaysContent = true;
  }
</script>
```

### Kontrolle der virtuellen Tastatur auf `contenteditable` Elementen

Standardmäßig lösen Elemente, die das [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) Attribut verwenden, auch die virtuelle Tastatur aus, wenn sie angetippt oder angeklickt werden. In bestimmten Situationen kann es wünschenswert sein, dieses Verhalten zu verhindern und stattdessen die virtuelle Tastatur nach einem anderen Ereignis anzuzeigen.

Setzen Sie das [`virtualkeyboardpolicy`](/de/docs/Web/HTML/Global_attributes/virtualkeyboardpolicy) Attribut auf `manual`, um die standardmäßige Handhabung der virtuellen Tastatur im Browser zu verhindern und stattdessen selbst über die `show()` und `hide()` Methoden der [`VirtualKeyboard`](/de/docs/Web/API/VirtualKeyboard) Schnittstelle zu steuern.

Der folgende Codeausschnitt zeigt, wie man das `virtualkeyboardpolicy` Attribut und die `navigator.virtualKeyboard.show()` Methode verwendet, um die virtuelle Tastatur stattdessen bei einem Doppelklick anzuzeigen:

```html
<div contenteditable virtualkeyboardpolicy="manual" id="editor"></div>
<script>
  if ("virtualKeyboard" in navigator) {
    navigator.virtualKeyboard.overlaysContent = true;

    const editor = document.getElementById("editor");
    editor.addEventListener("dblclick", () => {
      navigator.virtualKeyboard.show();
    });
  }
</script>
```

## Schnittstellen

- [`VirtualKeyboard`](/de/docs/Web/API/VirtualKeyboard) {{experimental_inline}}
  - : Bietet Funktionen, die Tastaturlayoutkarten abrufen und das Erfassen von Tastendrücken von der physikalischen Tastatur umschalten.

## Erweiterungen zu anderen Schnittstellen

- [`Navigator.virtualKeyboard`](/de/docs/Web/API/Navigator/virtualKeyboard) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt eine Referenz zur [`VirtualKeyboard`](/de/docs/Web/API/VirtualKeyboard) API zurück, um die Bildschirmtastatur zu steuern.
- [`HTMLElement.virtualkeyboardpolicy`](/de/docs/Web/API/HTMLElement/virtualKeyboardPolicy) {{experimental_inline}}
  - : Ein String, der angibt, ob die Standardpolitik des Browsers für das Anzeigen der virtuellen Tastatur verwendet werden soll, wenn das Element fokussiert ist, oder ob das Anzeigen der virtuellen Tastatur manuell gesteuert werden soll.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Full control with the VirtualKeyboard API](https://developer.chrome.com/docs/web-platform/virtual-keyboard/)
