---
title: Mobile Accessibility
slug: Learn_web_development/Core/Accessibility/Mobile
l10n:
  sourceCommit: 1b7c3c1e03f14c3878e4d8518b0f1a89bedfdc9c
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Multimedia","Learn_web_development/Core/Accessibility/Accessibility_troubleshooting", "Learn_web_development/Core/Accessibility")}}

Da der Zugriff auf das Web auf mobilen Geräten so beliebt ist und bekannte Plattformen wie iOS und Android vollwertige Barrierefreiheitswerkzeuge bieten, ist es wichtig, die Barrierefreiheit Ihrer Webinhalte auf diesen Plattformen zu berücksichtigen. Dieser Artikel betrachtet mobile spezifische Überlegungen zur Barrierefreiheit.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und Best Practices zur Barrierefreiheit, wie sie in den vorherigen Lektionen dieses Moduls behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Vertrautheit mit Screenreadern auf iOS und Android.</li>
          <li>Verständnis der Barrierefreiheitsprobleme bei einigen Arten von Ereignissen.</li>
          <li>Spezifische Techniken für benutzerfreundlichere Benutzereingabemechanismen auf mobilen Geräten.</li>
          <li>Wissen, dass mobile Browser spezifische Benutzerfreundlichkeitsvorteile für bestimmte <code>&lt;input&gt;</code>-Typen wie <code>number</code> oder <code>tel</code> bieten.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Barrierefreiheit auf mobilen Geräten

Der Zustand der Barrierefreiheit – und die Unterstützung von Webstandards im Allgemeinen – ist bei modernen mobilen Geräten gut. Die Zeiten, in denen mobile Geräte völlig andere Webtechnologien als Desktop-Browser verwendeten und Entwickler dazu zwangen, Browser-Erkennung zu nutzen und ihnen komplett separate Websites zu bieten, sind längst vorbei (obwohl immer noch einige Unternehmen die Nutzung mobiler Geräte erkennen und ihnen eine separate mobile Domain bereitstellen).

Heutzutage können mobile Geräte normalerweise vollwertige Websites verarbeiten, und die Hauptplattformen haben sogar Screenreader integriert, um sehbehinderten Nutzern die Nutzung zu ermöglichen. Moderne mobile Browser haben auch eine gute Unterstützung für [WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics).

Um eine Website auf mobilen Geräten zugänglich und benutzbar zu machen, müssen Sie nur allgemeine gute Webdesign- und Barrierefreiheitspraktiken befolgen.

Es gibt einige Ausnahmen, die für mobile Geräte besondere Überlegungen erfordern; die Hauptausnahmen sind:

- Steuerungsmechanismen — Stellen Sie sicher, dass Steuerelemente der Benutzeroberfläche wie Schaltflächen sowohl auf Mobilgeräten (d.h. hauptsächlich Touchscreen) als auch auf Desktops/Laptops (hauptsächlich Maus/Tastatur) zugänglich sind.
- Benutzereingabe — Machen Sie die Anforderungen an die Benutzereingabe auf mobilen Geräten so schmerzlos wie möglich (z. B. in Formularen, halten Sie das Tippen auf ein Minimum).
- Responsives Design — Stellen Sie sicher, dass Layouts auf mobilen Geräten funktionieren, Bilddownloadgrößen sparen und über die Bereitstellung von Bildern für hochauflösende Bildschirme nachdenken.

## Zusammenfassung des Screenreader-Tests auf Android und iOS

Die gängigsten mobilen Plattformen haben voll funktionsfähige Screenreader. Diese funktionieren in etwa genauso wie Desktop-Screenreader, außer dass sie hauptsächlich mit Touch-Gesten anstelle von Tastenkombinationen bedient werden.

Werfen wir einen Blick auf die beiden Haupt-Screenreader: TalkBack auf Android und VoiceOver auf iOS.

### Android TalkBack

Der TalkBack-Screenreader ist in das Android-Betriebssystem integriert.

Um ihn einzuschalten, finden Sie heraus, welches Telefonmodell und welche Android-Version Sie haben, und suchen Sie dann nach dem TalkBack-Menü. Es neigt dazu, je nach Android-Version und sogar zwischen verschiedenen Telefonmodellen stark zu variieren. Einige Telefonhersteller (z. B. Samsung) haben sogar in neueren Telefonen kein TalkBack und entschieden sich stattdessen für ihren eigenen Screenreader.

Wenn Sie das TalkBack-Menü gefunden haben, drücken Sie den Schieberegler, um TalkBack zu aktivieren. Befolgen Sie alle zusätzlichen Bildschirmanweisungen, die Ihnen angezeigt werden.

Wenn TalkBack eingeschaltet ist, sind die Grundsteuerungen Ihres Android-Geräts ein wenig anders. Zum Beispiel:

1. Einmaliges Antippen einer App wählt sie aus, und das Gerät liest vor, was die App ist.
2. Durch Wischen nach links und rechts bewegen Sie sich zwischen Apps oder Schaltflächen/Steuerungen, wenn Sie sich in einer Steuerungsleiste befinden. Das Gerät liest jede Option vor.
3. Doppeltippen irgendwo öffnet die App/wählt die Option aus.
4. Sie können auch „durch Berührung erkunden“ – halten Sie Ihren Finger auf dem Bildschirm und ziehen Sie ihn, und Ihr Gerät wird die verschiedenen Apps/Elemente, über die Sie hinweggehen, vorlesen.

Wenn Sie TalkBack ausschalten möchten:

1. Navigieren Sie zurück zum TalkBack-Menü (unter Verwendung der derzeit aktivierten verschiedenen Gesten).
2. Navigieren Sie zum Schieberegler und aktivieren Sie ihn, um ihn auszuschalten.

> [!NOTE]
> Sie können jederzeit zu Ihrem Startbildschirm gelangen, indem Sie in einer fließenden Bewegung nach oben und links wischen. Wenn Sie mehr als einen Startbildschirm haben, können Sie zwischen ihnen wechseln, indem Sie mit zwei Fingern nach links und rechts wischen.

Eine umfassendere Liste der TalkBack-Gesten finden Sie unter [Use TalkBack gestures](https://support.google.com/accessibility/android/answer/6151827).

#### Entsperren des Telefons

Wenn TalkBack eingeschaltet ist, ist das Entsperren des Telefons etwas anders.

Sie können mit zwei Fingern von unten nach oben über den Sperrbildschirm wischen. Wenn Sie ein Passcode oder ein Muster zum Entsperren Ihres Geräts festgelegt haben, werden Sie zum entsprechenden Eingabebildschirm weitergeleitet, um es einzugeben.

Sie können auch durch Berühren erkunden, um die _Unlock_-Schaltfläche unten in der Mitte des Bildschirms zu finden, und dann doppelt tippen.

#### Globale und lokale Menüs

TalkBack ermöglicht Ihnen den Zugriff auf globale und lokale Kontextmenüs, wo auch immer Sie sich auf dem Gerät befinden. Letztere bieten globale Optionen, die das gesamte Gerät betreffen, und erstere bieten Optionen, die nur die aktuelle App/den aktuellen Bildschirm betreffen, auf der/dem Sie sich befinden.

Um auf diese Menüs zuzugreifen:

1. Greifen Sie auf das globale Menü zu, indem Sie schnell nach unten und dann nach rechts wischen.
2. Greifen Sie auf das lokale Menü zu, indem Sie schnell nach oben und dann nach rechts wischen.
3. Wischen Sie nach links und rechts, um zwischen den verschiedenen Optionen zu wechseln.
4. Sobald Sie die gewünschte Option ausgewählt haben, doppeltippen Sie, um diese Option auszuwählen.

Details zu allen verfügbaren Optionen unter den globalen und lokalen Kontextmenüs finden Sie unter [Use global and local context menus](https://support.google.com/accessibility/android/answer/6007066).

#### Durchsuchen von Webseiten

Sie können das lokale Kontextmenü verwenden, während Sie einen Webbrowser verwenden, um Optionen zu finden, mit denen Sie Webseiten nur mithilfe von Überschriften, Formularsteuerungen oder Links oder Zeile für Zeile navigieren können.

Zum Beispiel mit eingeschaltetem TalkBack:

1. Öffnen Sie Ihren Webbrowser.
2. Aktivieren Sie die URL-Leiste.
3. Geben Sie eine Webseite mit mehreren Überschriften ein, zum Beispiel die Startseite von bbc.co.uk. Um den Text der URL einzugeben:
   - Wählen Sie die URL-Leiste aus, indem Sie nach links/rechts wischen, bis Sie sie erreichen, und dann doppeltippen.
   - Halten Sie Ihren Finger auf der virtuellen Tastatur gedrückt, bis Sie den gewünschten Charakter erreicht haben, und lassen Sie dann Ihren Finger los, um zu tippen. Wiederholen Sie dies für jedes Zeichen.
   - Sobald Sie fertig sind, suchen Sie die Enter-Taste und drücken Sie sie.

4. Wischen Sie nach links und rechts, um sich zwischen verschiedenen Elementen auf der Seite zu bewegen.
5. Wischen Sie mit einer glatten Bewegung nach oben und rechts, um das lokale Inhaltsmenü aufzurufen.
6. Wischen Sie nach rechts, bis Sie die Option "Überschriften und Landmarken" finden.
7. Doppeltippen Sie, um sie auszuwählen. Jetzt können Sie nach links und rechts wischen, um zwischen Überschriften und ARIA-Landmarken zu navigieren.
8. Um zum Standardmodus zurückzukehren, rufen Sie das lokale Kontextmenü erneut auf, indem Sie nach oben und rechts wischen, wählen Sie "Default" aus und doppeltippen Sie dann, um es zu aktivieren.

> [!NOTE]
> Siehe [Get started on Android with TalkBack](https://support.google.com/accessibility/android/answer/6283677?hl=en&ref_topic=3529932) für eine vollständigere Dokumentation.

### iOS VoiceOver

Eine mobile Version von VoiceOver ist in das iOS-Betriebssystem integriert.

Um es einzuschalten, gehen Sie zur _Einstellungen_-App und wählen _Barrierefreiheit > VoiceOver_. Drücken Sie den _VoiceOver_-Schieberegler, um es zu aktivieren (auf dieser Seite sehen Sie auch mehrere andere mit VoiceOver verbundene Optionen).

> [!NOTE]
> Einige ältere iOS-Geräte haben das VoiceOver-Menü unter _Einstellungen-App_ > _Allgemein_ > _Barrierefreiheit_ > _VoiceOver_.

Sobald VoiceOver aktiviert ist, werden die Grundsteuerungsgesten von iOS etwas anders sein:

1. Ein einmaliges Tippen bewirkt, dass das Element, auf das Sie tippen, ausgewählt wird; Ihr Gerät wird das Element, auf das Sie getippt haben, sprechen.
2. Sie können auch die Elemente auf dem Bildschirm navigieren, indem Sie nach links und rechts wischen, um sich zwischen ihnen zu bewegen, oder indem Sie Ihren Finger auf dem Bildschirm schieben, um sich zwischen verschiedenen Elementen zu bewegen (wenn Sie das gewünschte Element finden, können Sie Ihren Finger entfernen, um es auszuwählen).
3. Um das ausgewählte Element zu aktivieren (z. B. eine ausgewählte App zu öffnen), doppeltippen Sie irgendwo auf dem Bildschirm.
4. Wischen Sie mit drei Fingern, um durch eine Seite zu scrollen.
5. Tippen Sie mit zwei Fingern, um eine kontextabhängige Aktion auszuführen - zum Beispiel ein Foto aufnehmen, während Sie in der Kamera-App sind.

Um es wieder auszuschalten, navigieren Sie zurück zu _Einstellungen > Allgemein > Barrierefreiheit > VoiceOver_ mit Hilfe der oben genannten Gesten und schalten Sie den _VoiceOver_-Schieberegler wieder aus.

#### Telefon entsperren

Um das Telefon zu entsperren, müssen Sie die Home-Taste (oder wischen) wie gewohnt drücken. Wenn Sie einen Passcode festgelegt haben, können Sie jede Nummer durch Wischen/Schieben auswählen (wie oben erklärt) und dann doppeltippen, um jede Nummer einzugeben, wenn Sie die richtige gefunden haben.

#### Verwenden des Rotors

Wenn VoiceOver eingeschaltet ist, steht Ihnen eine Navigationsfunktion namens Rotor zur Verfügung, die es Ihnen ermöglicht, schnell aus einer Reihe von häufig nützlichen Optionen zu wählen. So verwenden Sie es:

1. Drehen Sie zwei Finger um den Bildschirm, als ob Sie ein Zifferblatt drehen. Jede Option wird laut vorgelesen, während Sie weiter drehen. Sie können hin und her gehen, um durch die Optionen zu blättern.
2. Sobald Sie die gewünschte Option gefunden haben:
   - Lassen Sie Ihre Finger los, um sie auszuwählen.
   - Wenn es sich um eine Option handelt, bei der Sie den Wert iterieren können (wie Volume oder Speaking Rate), können Sie nach oben oder unten wischen, um den Wert des ausgewählten Elements zu erhöhen oder zu verringern.

Die unter dem Rotor verfügbaren Optionen sind kontextabhängig – sie unterscheiden sich je nach App oder Ansicht, in der Sie sich befinden (siehe unten für ein Beispiel).

#### Durchsuchen von Webseiten

Probieren wir das Web-Browsing mit VoiceOver aus:

1. Öffnen Sie Ihren Webbrowser.
2. Aktivieren Sie die URL-Leiste.
3. Geben Sie eine Webseite mit mehreren Überschriften ein, wie z. B. die Startseite von bbc.co.uk. Um den Text der URL einzugeben:
   - Wählen Sie die URL-Leiste aus, indem Sie nach links/rechts wischen, bis Sie sie erreichen, und dann doppeltippen.
   - Für jedes Zeichen halten Sie Ihren Finger auf der virtuellen Tastatur gedrückt, bis Sie das gewünschte Zeichen erreichen, und lassen Sie dann Ihren Finger los, um es auszuwählen. Doppeltippen Sie, um es einzugeben.
   - Sobald Sie fertig sind, suchen Sie die Enter-Taste und drücken Sie sie.

4. Wischen Sie nach links und rechts, um sich zwischen Elementen auf der Seite zu bewegen. Sie können ein Element durch Doppeltippen auswählen (z. B. einen Link folgen).
5. Standardmäßig wird die ausgewählte Rotor-Option die Speaking Rate sein; Sie können derzeit nach oben und unten wischen, um die Sprechgeschwindigkeit zu erhöhen oder zu verringern.
6. Drehen Sie nun zwei Finger um den Bildschirm, um den Rotor anzuzeigen und zwischen seinen Optionen zu wechseln. Hier sind einige Beispiele für verfügbare Optionen:
   - _Speaking Rate_: Ändern Sie die Sprechgeschwindigkeit.
   - _Containers_: Zwischen verschiedenen semantischen Containern auf der Seite wechseln.
   - _Headings_: Zwischen Überschriften auf der Seite wechseln.
   - _Links_: Zwischen Links auf der Seite wechseln.
   - _Form Controls_: Zwischen Formularsteuerungen auf der Seite wechseln.
   - _Language_: Zwischen verschiedenen Übersetzungen wechseln, sofern verfügbar.

7. Wählen Sie _Headings_ aus. Nun können Sie nach oben und unten wischen, um zwischen den Überschriften auf der Seite zu wechseln.

> [!NOTE]
> Für eine umfassendere Referenz zu den verfügbaren VoiceOver-Gesten und weiteren Hinweisen zum Accessibility-Testing auf iOS siehe [Apples VoiceOver-Dokumentation](https://developer.apple.com/documentation/accessibility/voiceover/).

## Steuerungsmechanismen

In unserem Artikel zur CSS- und JavaScript-Barrierefreiheit haben wir die Idee von Ereignissen untersucht, die spezifisch für einen bestimmten Steuerungsmechanismus sind (siehe [Maus-spezifische Ereignisse](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#mouse-specific_events)). Zur Erinnerung, diese verursachen Barrierefreiheitsprobleme, weil andere Steuerungsmechanismen die zugehörige Funktionalität nicht aktivieren können.

Ein Beispiel ist das [click](/de/docs/Web/API/Element/click_event)-Ereignis, das in Bezug auf Barrierefreiheit gut ist – ein zugehöriger Ereignishandler kann durch Klicken auf das Element, auf dem der Handler festgelegt ist, durch Tabben zu ihm und Drücken von Enter/Return oder durch Tippen darauf auf einem Touchscreen-Gerät aufgerufen werden. Probieren Sie das folgende grundlegende Schaltflächenbeispiel aus, um zu sehen, was wir meinen:

```html hidden live-sample___basic-button
<button>Press me!</button>
```

```css hidden live-sample___basic-button
html {
  height: 100%;
}

body {
  height: inherit;
  font-family: sans-serif;
  display: flex;
  align-items: center;
}

h1 {
  text-align: center;
}

button {
  width: 70%;
  margin: 0 auto;
  display: block;
  font-size: 150%;
  line-height: 1.5;
}
```

```js hidden live-sample___basic-button
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  alert("Ouch, that hurt!");
});
```

{{embedlivesample("basic-button", "100%", "100")}}

Maus-spezifische Ereignisse wie [mousedown](/de/docs/Web/API/Element/mousedown_event) und [mouseup](/de/docs/Web/API/Element/mouseup_event) hingegen verursachen Probleme — ihre Ereignishandler können nicht mit anderen Steuerungen als der Maus aufgerufen werden.

Das nächste Beispiel verwendet Code wie den folgenden, um es Ihnen zu ermöglichen, ein Kästchen mit der Maus über den Bildschirm zu ziehen:

```js
div.addEventListener("mousedown", () => {
  initialBoxX = div.offsetLeft;
  initialBoxY = div.offsetTop;
  movePanel();
});

document.addEventListener("mouseup", stopMove);
```

```html hidden live-sample___mouse-drag live-sample___multi-drag
<div></div>
```

```css hidden live-sample___mouse-drag live-sample___multi-drag
html {
  font-family: sans-serif;
  overflow: hidden;
}

body {
  background: #ffe;
  margin: 0;
}

div {
  background-color: #1fe200;
  background-image: linear-gradient(
    to bottom right,
    rgb(0 0 0 / 0),
    rgb(0 0 0 / 0.4)
  );
  width: 200px;
  height: 150px;
  border: 1px solid green;
  position: absolute;
}
```

```js hidden live-sample___mouse-drag
document.body.width = window.innerWidth;
document.body.height = window.innerHeight;

let mouseX, mouseY;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

const div = document.querySelector("div");

let initialMouseX = null;

let initialMouseY = null;

var initialBoxX, initialBoxY, rAF;

div.addEventListener("mousedown", () => {
  initialBoxX = div.offsetLeft;
  initialBoxY = div.offsetTop;
  movePanel();
});

document.addEventListener("mouseup", stopMove);

function movePanel() {
  if (initialMouseX === null) {
    initialMouseX = mouseX;
    initialMouseY = mouseY;
  } else {
    let mouseMoveX = mouseX - initialMouseX;
    let mouseMoveY = mouseY - initialMouseY;

    let offsetX = initialBoxX + mouseMoveX;
    let offsetY = initialBoxY + mouseMoveY;
    console.log(offsetX + " " + offsetY);

    div.style.left = offsetX + "px";
    div.style.top = offsetY + "px";
  }

  rAF = requestAnimationFrame(movePanel);
}

function stopMove() {
  cancelAnimationFrame(rAF);

  console.log("mousemove stopped");

  initialMouseX = null;
  initialMouseY = null;
}
```

{{embedlivesample("mouse-drag", "100%", "400")}}

Wenn Sie jedoch versuchen, es mit Ihrem Finger auf einem Touchscreen-Gerät zu ziehen, funktioniert es nicht. Um andere Steuerungsformen zu ermöglichen, müssen Sie verschiedene, aber gleichwertige Ereignisse verwenden — zum Beispiel funktionieren Touch-Ereignisse auf Touchscreen-Geräten:

```js
div.addEventListener("ontouchstart", (e) => {
  initialBoxX = div.offsetLeft;
  initialBoxY = div.offsetTop;
  positionHandler(e);
  movePanel();
});

document.addEventListener("touchend", stopMove);
```

```js hidden live-sample___multi-drag
document.body.width = window.innerWidth;
document.body.height = window.innerHeight;

let posX, posY;

document.addEventListener("mousemove", positionHandler);
document.addEventListener("touchmove", positionHandler);

function positionHandler(e) {
  if (e.clientX && e.clientY) {
    posX = e.clientX;
    posY = e.clientY;
  } else if (e.targetTouches) {
    posX = e.targetTouches[0].clientX;
    posY = e.targetTouches[0].clientY;
    e.preventDefault();
  }
}

const div = document.querySelector("div");

let initialPosX = null;

let initialPosY = null;

let rAF;

div.addEventListener("mousedown", () => {
  initialBoxX = div.offsetLeft;
  initialBoxY = div.offsetTop;
  movePanel();
});

div.addEventListener("ontouchstart", (e) => {
  initialBoxX = div.offsetLeft;
  initialBoxY = div.offsetTop;
  positionHandler(e);
  movePanel();
});

document.addEventListener("mouseup", stopMove);
document.addEventListener("touchend", stopMove);

function movePanel() {
  if (initialPosX === null) {
    initialPosX = posX;
    initialPosY = posY;
  } else {
    let posMoveX = posX - initialPosX;
    let posMoveY = posY - initialPosY;

    let offsetX = initialBoxX + posMoveX;
    let offsetY = initialBoxY + posMoveY;

    div.style.left = offsetX + "px";
    div.style.top = offsetY + "px";
  }

  rAF = requestAnimationFrame(movePanel);
}

function stopMove() {
  cancelAnimationFrame(rAF);

  initialPosX = null;
  initialPosY = null;
}
```

Die aktualisierte Version funktioniert sowohl mit Maus- als auch Touch-Drag:

{{embedlivesample("multi-drag", "100%", "400")}}

> [!NOTE]
> Sie können auch vollständig funktionale Beispiele zur Implementierung verschiedener Steuerungsmechanismen unter [Implementing game control mechanisms](/de/docs/Games/Techniques/Control_mechanisms) sehen.

## Responsives Design

[Responsives Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design) ist die Praxis, Ihre Layouts und andere Funktionen Ihrer Apps dynamisch je nach Faktoren wie Bildschirmgröße und Auflösung zu ändern, um sie für Benutzer verschiedener Gerätetypen benutzbar und zugänglich zu machen.

Insbesondere die häufigsten Probleme, die für mobile Geräte angesprochen werden müssen, sind:

- Eignung von Layouts für mobile Geräte. Ein mehrspaltiges Layout funktioniert auf einem schmalen Bildschirm beispielsweise nicht so gut, und die Textgröße muss möglicherweise erhöht werden, um lesbar zu bleiben. Solche Probleme können durch die Erstellung eines responsiven Layouts mit Technologien wie [Media Queries](/de/docs/Web/CSS/Guides/Media_queries), [Viewport](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport) und [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) gelöst werden.
- Bewahrung der heruntergeladenen Bildgrößen. Im Allgemeinen benötigen Geräte mit kleinem Bildschirm keine so großen Bilder wie ihre Desktop-Gegenstücke und sie sind eher auf langsame Netzwerkverbindungen angewiesen. Daher ist es ratsam, kleinere Bilder auf schmale Bildschirmgeräte entsprechend zu servieren. Sie können dies mithilfe von [Techniken zu responsiven Bildern](/de/docs/Web/HTML/Guides/Responsive_images) handhaben.
- Denken an hohe Auflösungen. Viele mobile Geräte haben hochauflösende Bildschirme und benötigen daher hochauflösende Bilder, damit die Anzeige weiterhin klar und scharf bleibt. Auch hier können Sie Bilder entsprechend mit responsiven Bildtechniken bereitstellen. Darüber hinaus können viele Bildanforderungen mit dem SVG-Vektorbildformat erfüllt werden, das heute in Browsern gut unterstützt wird. SVG hat eine kleine Dateigröße und bleibt scharf, unabhängig von der angezeigten Größe (siehe [Einbeziehen von Vektorgrafiken in HTML](/de/docs/Learn_web_development/Core/Structuring_content/Including_vector_graphics_in_HTML) für weitere Details).

> [!NOTE]
> Wir werden hier keine vollständige Diskussion von Techniken zum responsiven Design bereitstellen, da sie an anderen Stellen auf MDN behandelt werden (siehe die oben genannten Links).

### Spezifische mobile Überlegungen

Es gibt weitere wichtige Aspekte, die bei der Verbesserung der Zugänglichkeit von Websites auf mobilen Geräten zu berücksichtigen sind. Wir haben hier einige aufgeführt, werden aber in Zukunft bei Bedarf weitere hinzufügen.

#### Zoom nicht deaktivieren

Mit [Viewport](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport) ist es möglich, den Zoom zu deaktivieren. Stellen Sie immer sicher, dass das Skalieren aktiviert ist, und setzen Sie die Breite auf die Breite des Geräts im {{htmlelement("head")}}:

```html
<meta name="viewport" content="width=device-width; user-scalable=yes" />
```

Sie sollten niemals `user-scalable=no` festlegen, wenn es irgendwie möglich ist — viele Menschen sind auf den Zoom angewiesen, um den Inhalt Ihrer Website sehen zu können, daher ist es eine wirklich schlechte Idee, diese Funktionalität zu entfernen. Es gibt bestimmte Situationen, in denen das Zoomen die Benutzeroberfläche unterbrechen könnte; in solchen Fällen, wenn Sie das Gefühl haben, dass Sie den Zoom deaktivieren müssen, sollten Sie eine andere Art von Äquivalent bereitstellen, wie eine Steuerung zur Erhöhung der Textgröße, die Ihr UI nicht beschädigt.

#### Menüs zugänglich halten

Da der Bildschirm auf mobilen Geräten viel schmaler ist, ist es sehr üblich, Media Queries und andere Technologien zu verwenden, um das Navigationsmenü auf ein kleines Symbol oben auf dem Display zu reduzieren — das nur gedrückt werden kann, um das Menü anzuzeigen, wenn es benötigt wird — wenn die Website auf Mobilgeräten angezeigt wird. Dies wird häufig durch ein "Drei horizontale Linien"-Symbol dargestellt, und das Designmuster wird daher als "Hamburger-Menü" bezeichnet.

Beim Implementieren eines solchen Menüs müssen Sie sicherstellen, dass die Steuerung, um es anzuzeigen, durch entsprechende Steuerungsmechanismen (normalerweise Touch für mobile Geräte) zugänglich ist, wie oben im Abschnitt [Steuerungsmechanismen](#steuerungsmechanismen) besprochen, und dass der Rest der Seite verschoben oder auf irgendeine Weise ausgeblendet wird, während das Menü genutzt wird, um Verwirrung bei der Navigation zu vermeiden.

Hier finden Sie ein [gutes Hamburger-Menü-Beispiel](https://fritz-weisshart.de/meg_men/).

## Benutzereingabe

Auf mobilen Geräten ist die Eingabe von Daten tendenziell lästiger für Benutzer als die entsprechende Erfahrung auf Desktop-Computern. Es ist bequemer, Text in Formulareingabefelder mit einer Desktop- oder Laptop-Tastatur einzugeben als mit einer virtuellen Touchscreen-Tastatur oder einer kleinen mobilen physischen Tastatur.

Aus diesem Grund ist es sinnvoll, die Menge an benötigtem Tippen zu minimieren. Ein Beispiel: Anstatt Benutzer jedes Mal ihren Jobtitel über ein reguläres Texteingabefeld eingeben zu lassen, könnten Sie stattdessen ein {{htmlelement("select")}}-Menü mit den häufigsten Optionen anbieten (was auch bei der Konsistenz der Dateneingabe hilft) und eine "Andere"-Option bereitstellen, die ein Textfeld anzeigt, um etwaige Ausreißer einzugeben. Sie können ein einfaches Beispiel dieser Idee in Aktion im folgenden Beispiel sehen:

```html hidden live-sample___select-text-combo
<form>
  <div>
    <label for="job">Job type:</label>
    <select id="job" name="job">
      <option value="">-- select job --</option>
      <option value="butcher">Butcher</option>
      <option value="baker">Baker</option>
      <option value="candle">Candlestick maker</option>
      <option value="other">Other</option>
    </select>
  </div>
  <div>
    <label for="other-job">Other job:</label>
    <input type="text" name="other-job" id="other-job" />
  </div>
</form>
```

```css hidden live-sample___select-text-combo
html {
  font-family: sans-serif;
}

div {
  margin-bottom: 10px;
}
```

```js hidden live-sample___select-text-combo
const select = document.querySelector("select");
const other = document.querySelector("input");

other.parentElement.style.display = "none";

select.onchange = function () {
  if (select.value === "other") {
    other.parentElement.style.display = "block";
  } else {
    other.parentElement.style.display = "none";
  }
};
```

{{embedlivesample("select-text-combo", "100%", "80")}}

Es lohnt sich auch, die Verwendung von HTML-Formulareingabetypen auf mobilen Plattformen zu berücksichtigen, da sie diese gut handhaben — sowohl Android als auch iOS.

Beispielsweise:

- Die Typen `number`, `tel` und `email` zeigen geeignete virtuelle Tastaturen zur Eingabe von Nummern/Telefonnummern an.
- Die Typen `time` und `date` zeigen geeignete Auswähler zur Auswahl von Zeiten und Daten an.

Um diese auszuprobieren, sehen Sie sich die Live-Beispiele bei [The HTML5 input types](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types) an.

Wenn Sie eine andere Lösung für Desktops bereitstellen möchten, können Sie immer eine andere Markup-Variante an Ihre mobilen Geräte anhand von Feature-Erkennung senden. Lesen Sie unseren [Artikel zur Feature-Erkennung](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection) für weitere Informationen.

## Zusammenfassung

In diesem Artikel haben wir Ihnen einige Details zu häufigen, spezifischen Problemen der Barrierefreiheit auf mobilen Geräten und deren Überwindung vorgestellt. Wir haben Ihnen auch die Verwendung der gängigsten Screenreader gezeigt, um Ihnen beim Accessibility-Testing zu helfen.

## Siehe auch

- [Guidelines For Mobile Web Development](https://www.smashingmagazine.com/2012/07/guidelines-for-mobile-web-development/) — Eine Liste von Artikeln in _Smashing Magazine_, die verschiedene Techniken für das Mobile Webdesign behandeln.
- [Make your site work on touch devices](https://www.creativebloq.com/javascript/make-your-site-work-touch-devices-51411644) — Nützlicher Artikel über die Verwendung von Touch-Ereignissen, um Interaktionen auf Mobilgeräten zum Laufen zu bringen.

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Multimedia","Learn_web_development/Core/Accessibility/Accessibility_troubleshooting", "Learn_web_development/Core/Accessibility")}}
