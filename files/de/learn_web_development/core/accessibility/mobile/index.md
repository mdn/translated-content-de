---
title: Barrierefreiheit auf Mobilgeräten
slug: Learn_web_development/Core/Accessibility/Mobile
l10n:
  sourceCommit: b7e9f482c51817d3a885e26092f8219fd0d9d278
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Multimedia","Learn_web_development/Core/Accessibility/Accessibility_troubleshooting", "Learn_web_development/Core/Accessibility")}}

Da der Zugriff auf das Web über Mobilgeräte so verbreitet ist und Plattformen wie iOS und Android ausgereifte Werkzeuge für Barrierefreiheit bieten, ist es wichtig, die Barrierefreiheit Ihrer Webinhalte auch auf diesen Plattformen zu berücksichtigen. Dieser Artikel behandelt Aspekte der Barrierefreiheit, die speziell für Mobilgeräte relevant sind.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und bewährten Verfahren zur Barrierefreiheit, wie sie in den vorherigen Lektionen dieses Moduls vermittelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Screenreader unter iOS und Android kennenlernen.</li>
          <li>Barrierefreiheitsprobleme bei bestimmten Arten von Events verstehen.</li>
          <li>Techniken kennenlernen, mit denen sich Benutzereingaben auf Mobilgeräten einfacher gestalten lassen.</li>
          <li>Wissen, dass mobile Browser bei bestimmten <code>&lt;input&gt;</code>-Typen wie <code>number</code> oder <code>tel</code> besondere Vorteile bei der Bedienbarkeit bieten.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Barrierefreiheit auf Mobilgeräten

Die Barrierefreiheit moderner Mobilgeräte ist gut – ebenso wie ihre Unterstützung für Webstandards im Allgemeinen. Die Zeiten, in denen Mobilgeräte völlig andere Webtechnologien als Desktop-Browser verwendeten und Entwickler deshalb Browser-Erkennung einsetzen und vollständig separate Websites bereitstellen mussten, sind längst vorbei. Allerdings erkennen noch immer einige Unternehmen Mobilgeräte und leiten sie auf eine separate mobile Domain weiter.

Heutzutage können Mobilgeräte in der Regel Websites mit vollem Funktionsumfang darstellen. Die wichtigsten Plattformen verfügen sogar über integrierte Screenreader, mit denen Menschen mit Sehbehinderungen sie nutzen können. Moderne mobile Browser unterstützen meist auch [WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) gut.

Damit eine Website auf Mobilgeräten barrierefrei und benutzbar ist, sollten Sie die allgemeinen bewährten Verfahren für Webdesign und Barrierefreiheit befolgen.

Einige Bereiche erfordern auf Mobilgeräten besondere Aufmerksamkeit:

- **Steuerungsmechanismen:** Stellen Sie sicher, dass Bedienelemente wie Buttons sowohl auf Mobilgeräten (vor allem per Touchscreen) als auch auf Desktop- und Laptop-Computern (vor allem per Maus und Tastatur) zugänglich sind.
- **Benutzereingaben:** Gestalten Sie Eingaben auf Mobilgeräten so einfach wie möglich. Halten Sie beispielsweise den Schreibaufwand in Formularen gering.
- **Responsives Design:** Stellen Sie sicher, dass Layouts auf Mobilgeräten funktionieren, halten Sie die heruntergeladenen Bilddateien möglichst klein und berücksichtigen Sie hochauflösende Displays.

## Überblick über Screenreader-Tests unter Android und iOS

Die gängigsten mobilen Plattformen verfügen über voll funktionsfähige Screenreader. Sie funktionieren ähnlich wie Desktop-Screenreader, werden jedoch überwiegend mit Touch-Gesten statt mit Tastenkombinationen bedient.

Sehen wir uns die beiden wichtigsten an: TalkBack unter Android und VoiceOver unter iOS.

### Android TalkBack

Der Screenreader TalkBack ist in das Android-Betriebssystem integriert.

Um ihn einzuschalten, ermitteln Sie zunächst Ihr Smartphone-Modell und Ihre Android-Version. Suchen Sie dann nach dem TalkBack-Menü. Dessen Position kann sich je nach Android-Version und Smartphone-Modell stark unterscheiden. Einige Hersteller, beispielsweise Samsung, verwenden auf neueren Geräten statt TalkBack einen eigenen Screenreader.

Wenn Sie das TalkBack-Menü gefunden haben, betätigen Sie den Schalter, um TalkBack einzuschalten. Folgen Sie gegebenenfalls den weiteren Anweisungen auf dem Bildschirm.

Wenn TalkBack eingeschaltet ist, ändert sich die grundlegende Bedienung Ihres Android-Geräts etwas. Zum Beispiel:

1. Durch einmaliges Tippen auf eine App wird sie ausgewählt und das Gerät liest ihren Namen vor.
2. Durch Wischen nach links oder rechts wechseln Sie zwischen Apps beziehungsweise zwischen Buttons und Bedienelementen innerhalb einer Leiste. Das Gerät liest jede Option vor.
3. Durch doppeltes Tippen an einer beliebigen Stelle öffnen Sie die App beziehungsweise wählen die Option aus.
4. Sie können den Bildschirm auch durch Berührung erkunden: Halten Sie einen Finger auf den Bildschirm und bewegen Sie ihn darüber. Das Gerät liest die Apps und Elemente vor, über die Sie Ihren Finger bewegen.

So schalten Sie TalkBack wieder aus:

1. Navigieren Sie mit den nun aktiven Gesten zurück zum TalkBack-Menü.
2. Navigieren Sie zum Schalter und aktivieren Sie ihn, um TalkBack auszuschalten.

> [!NOTE]
> Sie können jederzeit zum Startbildschirm gelangen, indem Sie in einer fließenden Bewegung nach oben und links wischen. Wenn Sie mehrere Startbildschirme haben, können Sie mit zwei Fingern nach links oder rechts wischen, um zwischen ihnen zu wechseln.

Eine ausführlichere Liste der TalkBack-Gesten finden Sie unter [TalkBack-Gesten verwenden](https://support.google.com/accessibility/android/answer/6151827).

#### Smartphone entsperren

Wenn TalkBack eingeschaltet ist, funktioniert das Entsperren des Smartphones etwas anders.

Sie können auf dem Sperrbildschirm mit zwei Fingern von unten nach oben wischen. Wenn Sie zum Entsperren einen Code oder ein Muster eingerichtet haben, gelangen Sie anschließend zum entsprechenden Eingabebildschirm.

Sie können den Bildschirm auch durch Berührung erkunden, um den Button _Entsperren_ unten in der Mitte zu finden, und dann doppelt tippen.

#### Globale und lokale Menüs

Mit TalkBack können Sie überall auf dem Gerät globale und lokale Kontextmenüs aufrufen. Das globale Menü bietet Optionen für das gesamte Gerät, das lokale Menü dagegen Optionen für die aktuelle App beziehungsweise den aktuellen Bildschirm.

So verwenden Sie diese Menüs:

1. Rufen Sie das globale Menü auf, indem Sie schnell nach unten und dann nach rechts wischen.
2. Rufen Sie das lokale Menü auf, indem Sie schnell nach oben und dann nach rechts wischen.
3. Wischen Sie nach links oder rechts, um zwischen den Optionen zu wechseln.
4. Wenn Sie die gewünschte Option ausgewählt haben, tippen Sie doppelt, um sie zu aktivieren.

Einzelheiten zu allen Optionen der globalen und lokalen Kontextmenüs finden Sie unter [Globale und lokale Kontextmenüs verwenden](https://support.google.com/accessibility/android/answer/6007066).

#### Webseiten durchsuchen

Im Webbrowser können Sie über das lokale Kontextmenü festlegen, ob Sie beispielsweise anhand von Überschriften, Formularsteuerelementen oder Links oder Zeile für Zeile durch Webseiten navigieren möchten.

Probieren Sie Folgendes mit eingeschaltetem TalkBack aus:

1. Öffnen Sie Ihren Webbrowser.
2. Aktivieren Sie die Adressleiste.
3. Rufen Sie eine Webseite mit vielen Überschriften auf, beispielsweise die Startseite von bbc.co.uk. So geben Sie die URL ein:
   - Wischen Sie nach links oder rechts, bis die Adressleiste ausgewählt ist, und tippen Sie dann doppelt.
   - Halten Sie Ihren Finger auf der virtuellen Tastatur, bis Sie das gewünschte Zeichen erreicht haben, und heben Sie ihn dann an, um das Zeichen einzugeben. Wiederholen Sie dies für jedes Zeichen.
   - Suchen Sie anschließend die Eingabetaste und drücken Sie sie.

4. Wischen Sie nach links oder rechts, um zwischen den Elementen der Seite zu wechseln.
5. Wischen Sie in einer fließenden Bewegung nach oben und rechts, um das lokale Kontextmenü zu öffnen.
6. Wischen Sie nach rechts, bis Sie die Option „Überschriften und Orientierungspunkte“ erreichen.
7. Tippen Sie doppelt, um sie auszuwählen. Nun können Sie durch Wischen nach links oder rechts zwischen Überschriften und ARIA-Orientierungspunkten wechseln.
8. Um zum Standardmodus zurückzukehren, öffnen Sie das lokale Kontextmenü erneut durch Wischen nach oben und rechts. Wählen Sie „Standard“ aus und aktivieren Sie die Option durch doppeltes Tippen.

> [!NOTE]
> Eine ausführlichere Dokumentation finden Sie unter [Erste Schritte mit TalkBack unter Android](https://support.google.com/accessibility/android/answer/6283677?hl=en&ref_topic=3529932).

### iOS VoiceOver

Eine mobile Version von VoiceOver ist in das iOS-Betriebssystem integriert.

Um sie einzuschalten, öffnen Sie die App _Einstellungen_ und wählen Sie _Bedienungshilfen > VoiceOver_. Aktivieren Sie den Schalter _VoiceOver_. Auf dieser Seite finden Sie auch weitere VoiceOver-Optionen.

> [!NOTE]
> Auf einigen älteren iOS-Geräten befindet sich das VoiceOver-Menü unter _Einstellungen_ > _Allgemein_ > _Bedienungshilfen_ > _VoiceOver_.

Sobald VoiceOver aktiviert ist, ändern sich die grundlegenden Bediengesten unter iOS etwas:

1. Durch einmaliges Tippen wird das berührte Element ausgewählt und vom Gerät vorgelesen.
2. Sie können zwischen den Elementen auf dem Bildschirm wechseln, indem Sie nach links oder rechts wischen oder Ihren Finger über den Bildschirm bewegen. Wenn Sie das gewünschte Element gefunden haben, heben Sie den Finger an, um es auszuwählen.
3. Um das ausgewählte Element zu aktivieren, beispielsweise eine App zu öffnen, tippen Sie zweimal an einer beliebigen Stelle des Bildschirms.
4. Wischen Sie mit drei Fingern, um durch eine Seite zu scrollen.
5. Tippen Sie mit zwei Fingern, um eine kontextabhängige Aktion auszuführen, beispielsweise in der Kamera-App ein Foto aufzunehmen.

Um VoiceOver wieder auszuschalten, navigieren Sie mit diesen Gesten zurück zu _Einstellungen > Allgemein > Bedienungshilfen > VoiceOver_ und deaktivieren Sie den Schalter _VoiceOver_.

#### Smartphone entsperren

Zum Entsperren drücken Sie wie gewohnt die Home-Taste oder wischen über den Bildschirm. Wenn Sie einen Code eingerichtet haben, können Sie jede Ziffer durch Wischen oder Bewegen des Fingers auswählen, wie oben beschrieben. Tippen Sie jeweils doppelt, um die ausgewählte Ziffer einzugeben.

#### Den Rotor verwenden

Wenn VoiceOver eingeschaltet ist, steht Ihnen die Navigationsfunktion „Rotor“ zur Verfügung. Damit können Sie schnell zwischen verschiedenen häufig benötigten Optionen wählen. So verwenden Sie sie:

1. Drehen Sie zwei Finger auf dem Bildschirm, als würden Sie einen Drehregler bedienen. Bei jeder weiteren Drehung wird die nächste Option vorgelesen. Sie können in beide Richtungen drehen, um zwischen den Optionen zu wechseln.
2. Wenn Sie die gewünschte Option gefunden haben:
   - Heben Sie die Finger an, um sie auszuwählen.
   - Wenn sich der Wert der Option ändern lässt, etwa bei der Lautstärke oder Sprechgeschwindigkeit, wischen Sie nach oben oder unten, um ihn zu erhöhen oder zu verringern.

Die verfügbaren Rotor-Optionen sind kontextabhängig: Sie unterscheiden sich je nach App oder Ansicht. Ein Beispiel folgt im nächsten Abschnitt.

#### Webseiten durchsuchen

Probieren wir aus, wie Sie mit VoiceOver im Web surfen:

1. Öffnen Sie Ihren Webbrowser.
2. Aktivieren Sie die Adressleiste.
3. Rufen Sie eine Webseite mit vielen Überschriften auf, beispielsweise die Startseite von bbc.co.uk. So geben Sie die URL ein:
   - Wischen Sie nach links oder rechts, bis die Adressleiste ausgewählt ist, und tippen Sie dann doppelt.
   - Halten Sie für jedes Zeichen Ihren Finger auf der virtuellen Tastatur, bis Sie das gewünschte Zeichen erreicht haben, und heben Sie ihn dann an, um es auszuwählen. Tippen Sie doppelt, um es einzugeben.
   - Suchen Sie anschließend die Eingabetaste und drücken Sie sie.

4. Wischen Sie nach links oder rechts, um zwischen den Elementen der Seite zu wechseln. Tippen Sie doppelt auf ein ausgewähltes Element, um es zu aktivieren, beispielsweise um einem Link zu folgen.
5. Standardmäßig ist im Rotor die Option „Sprechgeschwindigkeit“ ausgewählt. Sie können nun nach oben oder unten wischen, um die Sprechgeschwindigkeit zu erhöhen oder zu verringern.
6. Drehen Sie nun zwei Finger auf dem Bildschirm wie an einem Drehregler, um den Rotor aufzurufen und zwischen seinen Optionen zu wechseln. Hier einige Beispiele:
   - _Sprechgeschwindigkeit_: Ändert die Sprechgeschwindigkeit.
   - _Container_: Wechselt zwischen semantischen Containern auf der Seite.
   - _Überschriften_: Wechselt zwischen Überschriften auf der Seite.
   - _Links_: Wechselt zwischen Links auf der Seite.
   - _Formularsteuerelemente_: Wechselt zwischen Formularsteuerelementen auf der Seite.
   - _Sprache_: Wechselt zwischen verschiedenen Übersetzungen, sofern vorhanden.

7. Wählen Sie _Überschriften_. Nun können Sie durch Wischen nach oben oder unten zwischen den Überschriften der Seite wechseln.

> [!NOTE]
> Eine ausführlichere Übersicht über VoiceOver-Gesten sowie weitere Hinweise zum Testen der Barrierefreiheit unter iOS finden Sie in der [VoiceOver-Dokumentation von Apple](https://developer.apple.com/documentation/accessibility/voiceover/).

## Steuerungsmechanismen

In unserem Artikel zur Barrierefreiheit von CSS und JavaScript haben wir Events betrachtet, die an einen bestimmten Steuerungsmechanismus gebunden sind (siehe [Mausspezifische Events](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#mouse-specific_events)). Zur Erinnerung: Solche Events verursachen Barrierefreiheitsprobleme, weil sich die zugehörige Funktion nicht mit anderen Steuerungsmechanismen auslösen lässt.

Das Event [click](/de/docs/Web/API/Element/click_event) ist beispielsweise gut für die Barrierefreiheit geeignet: Ein zugehöriger Event-Handler lässt sich auslösen, indem Sie auf das Element klicken, mit der Tabulatortaste dorthin navigieren und Enter drücken oder es auf einem Touchscreen antippen. Probieren Sie das folgende einfache Button-Beispiel aus:

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

Mausspezifische Events wie [mousedown](/de/docs/Web/API/Element/mousedown_event) und [mouseup](/de/docs/Web/API/Element/mouseup_event) verursachen dagegen Probleme: Ihre Event-Handler lassen sich nicht ohne Maus auslösen.

Das nächste Beispiel verwendet Code wie den folgenden, damit Sie eine Box mit der Maus über den Bildschirm ziehen können:

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
  background: #ffffee;
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

let initialBoxX, initialBoxY, rAF;

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
    console.log(`${offsetX} ${offsetY}`);

    div.style.left = `${offsetX}px`;
    div.style.top = `${offsetY}px`;
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

Wenn Sie versuchen, die Box auf einem Touchscreen mit dem Finger zu ziehen, funktioniert das jedoch nicht. Um andere Steuerungsformen zu unterstützen, müssen Sie andere, gleichwertige Events verwenden. Auf Touchscreen-Geräten eignen sich beispielsweise Touch-Events:

```js
div.addEventListener("touchstart", (e) => {
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

div.addEventListener("touchstart", (e) => {
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

    div.style.left = `${offsetX}px`;
    div.style.top = `${offsetY}px`;
  }

  rAF = requestAnimationFrame(movePanel);
}

function stopMove() {
  cancelAnimationFrame(rAF);

  initialPosX = null;
  initialPosY = null;
}
```

Die aktualisierte Version funktioniert sowohl beim Ziehen mit der Maus als auch mit dem Finger:

{{embedlivesample("multi-drag", "100%", "400")}}

> [!NOTE]
> Vollständig funktionsfähige Beispiele für die Implementierung verschiedener Steuerungsmechanismen finden Sie auch unter [Steuerungsmechanismen für Spiele implementieren](/de/docs/Games/Techniques/Control_mechanisms).

## Responsives Design

Bei [responsivem Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design) passen sich Layouts und andere Eigenschaften Ihrer Anwendungen dynamisch an Faktoren wie Bildschirmgröße und Auflösung an. So bleiben sie auf unterschiedlichen Gerätetypen benutzbar und zugänglich.

Insbesondere die folgenden häufigen Probleme sollten Sie für Mobilgeräte berücksichtigen:

- **Eignung des Layouts für Mobilgeräte:** Ein mehrspaltiges Layout funktioniert auf einem schmalen Bildschirm beispielsweise nicht so gut. Möglicherweise muss auch die Schriftgröße erhöht werden, damit der Text lesbar bleibt. Solche Probleme lassen sich mit einem responsiven Layout und Technologien wie [Media Queries](/de/docs/Web/CSS/Guides/Media_queries), [viewport](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport) und [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) lösen.
- **Kleinere Bilddateien bereitstellen:** Geräte mit kleinen Bildschirmen benötigen im Allgemeinen keine so großen Bilder wie Desktop-Computer und verwenden häufiger langsame Netzwerkverbindungen. Stellen Sie Geräten mit schmalen Bildschirmen deshalb nach Möglichkeit kleinere Bilder bereit. Dies lässt sich mit [Techniken für responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images) umsetzen.
- **Hohe Auflösungen berücksichtigen:** Viele Mobilgeräte haben hochauflösende Displays. Damit Bilder darauf scharf erscheinen, benötigen diese Geräte Bilder mit höherer Auflösung. Auch hierfür können Sie Techniken für responsive Bilder verwenden. Zudem lassen sich viele Bildanforderungen mit dem Vektorformat SVG erfüllen, das heute von Browsern gut unterstützt wird. SVG-Dateien sind klein und bleiben unabhängig von ihrer Darstellungsgröße scharf. Weitere Informationen finden Sie unter [Vektorgrafiken in HTML einbinden](/de/docs/Learn_web_development/Core/Structuring_content/Including_vector_graphics_in_HTML).

> [!NOTE]
> Wir behandeln Techniken für responsives Design hier nicht umfassend, da sie an anderen Stellen auf MDN erläutert werden (siehe die obigen Links).

### Besondere Aspekte für Mobilgeräte

Bei der barrierefreien Gestaltung von Websites für Mobilgeräte gibt es weitere wichtige Punkte zu beachten. Einige davon führen wir hier auf; bei Bedarf werden wir weitere ergänzen.

#### Zoomen nicht deaktivieren

Mit [viewport](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport) lässt sich das Zoomen deaktivieren. Stellen Sie stets sicher, dass eine Größenänderung möglich bleibt, und setzen Sie im {{htmlelement("head")}} die Breite auf die Gerätebreite:

```html
<meta name="viewport" content="width=device-width; user-scalable=yes" />
```

Vermeiden Sie nach Möglichkeit unbedingt `user-scalable=no`. Viele Menschen sind auf die Zoomfunktion angewiesen, um die Inhalte Ihrer Website erkennen zu können. Ihnen diese Möglichkeit zu nehmen, ist daher keine gute Idee. In bestimmten Situationen kann das Zoomen die Benutzeroberfläche beeinträchtigen. Wenn Sie es deshalb für nötig halten, die Zoomfunktion zu deaktivieren, sollten Sie eine gleichwertige Alternative anbieten – beispielsweise ein Steuerelement, mit dem sich die Schrift vergrößern lässt, ohne die Benutzeroberfläche zu beeinträchtigen.

#### Menüs zugänglich halten

Da Bildschirme auf Mobilgeräten deutlich schmaler sind, wird ein Navigationsmenü mithilfe von Media Queries und anderen Technologien häufig auf ein kleines Symbol am oberen Bildschirmrand reduziert. Erst durch Antippen des Symbols wird das Menü bei Bedarf eingeblendet. Das Symbol besteht üblicherweise aus drei horizontalen Linien; dieses Designmuster wird daher „Hamburger-Menü“ genannt.

Wenn Sie ein solches Menü implementieren, stellen Sie sicher, dass sich das Steuerelement zum Öffnen mit geeigneten Steuerungsmechanismen bedienen lässt – auf Mobilgeräten normalerweise per Touch, wie oben unter [Steuerungsmechanismen](#steuerungsmechanismen) erläutert. Sorgen Sie außerdem dafür, dass der übrige Seiteninhalt während der Bedienung des Menüs aus dem Weg geräumt oder ausgeblendet wird, damit die Navigation nicht verwirrend wird.

Hier finden Sie ein [gutes Beispiel für ein Hamburger-Menü](https://fritz-weisshart.de/meg_men/).

## Benutzereingaben

Die Dateneingabe auf Mobilgeräten ist für Benutzer in der Regel mühsamer als auf Desktop-Computern. Text lässt sich mit einer Desktop- oder Laptop-Tastatur bequemer in Formularfelder eingeben als mit einer virtuellen Touchscreen-Tastatur oder einer kleinen physischen Mobilgerätetastatur.

Deshalb lohnt es sich, den erforderlichen Schreibaufwand zu minimieren. Statt Benutzer beispielsweise ihre Berufsbezeichnung jedes Mal in ein gewöhnliches Textfeld eingeben zu lassen, könnten Sie ein {{htmlelement("select")}}-Menü mit den häufigsten Optionen anbieten. Das fördert zugleich einheitliche Eingaben. Für andere Berufsbezeichnungen könnten Sie eine Option „Sonstiges“ anbieten, die ein Textfeld einblendet. Das folgende Beispiel zeigt eine einfache Umsetzung:

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

Es lohnt sich außerdem, HTML-Eingabetypen für Formulare auf mobilen Plattformen zu verwenden, da sowohl Android als auch iOS sie gut unterstützen.

Zum Beispiel:

- Die Typen `number`, `tel` und `email` zeigen passende virtuelle Tastaturen für die Eingabe von Zahlen, Telefonnummern beziehungsweise E-Mail-Adressen an.
- Die Typen `time` und `date` zeigen passende Auswahlfelder für Uhrzeiten und Datumsangaben an.

Sie können diese Typen anhand der interaktiven Beispiele unter [Die HTML5-Eingabetypen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types) ausprobieren.

Wenn Sie für Desktop-Computer eine andere Lösung anbieten möchten, können Sie Mobilgeräten mithilfe von Feature Detection anderes Markup bereitstellen. Weitere Informationen finden Sie in unserem [Artikel über Feature Detection](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection).

## Zusammenfassung

In diesem Artikel haben wir einige häufige Barrierefreiheitsprobleme auf Mobilgeräten und mögliche Lösungen vorgestellt. Außerdem haben wir gezeigt, wie Sie die gängigsten mobilen Screenreader verwenden können, um die Barrierefreiheit zu testen.

## Siehe auch

- [Richtlinien für die Entwicklung mobiler Websites](https://www.smashingmagazine.com/2012/07/guidelines-for-mobile-web-development/) – Eine Sammlung von Artikeln im _Smashing Magazine_ über verschiedene Techniken für mobiles Webdesign.
- [Ihre Website auf Touch-Geräten nutzbar machen](https://www.creativebloq.com/javascript/make-your-site-work-touch-devices-51411644) – Ein hilfreicher Artikel darüber, wie Sie mit Touch-Events Interaktionen auf Mobilgeräten ermöglichen.

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Multimedia","Learn_web_development/Core/Accessibility/Accessibility_troubleshooting", "Learn_web_development/Core/Accessibility")}}
