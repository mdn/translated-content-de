---
title: Barrierefreiheit auf Mobilgeräten
slug: Learn_web_development/Core/Accessibility/Mobile
l10n:
  sourceCommit: bfead5c281d92a213f0191746fd98a6bdc4dc457
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Multimedia","Learn_web_development/Core/Accessibility/Accessibility_troubleshooting", "Learn_web_development/Core/Accessibility")}}

Da der Zugriff auf das Web über Mobilgeräte weit verbreitet ist und bekannte Plattformen wie iOS und Android umfassende Hilfsmittel für Barrierefreiheit bieten, ist es wichtig, die Barrierefreiheit Ihrer Webinhalte auch auf diesen Plattformen zu berücksichtigen. Dieser Artikel behandelt Aspekte der Barrierefreiheit, die speziell für Mobilgeräte relevant sind.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und bewährten Praktiken für Barrierefreiheit, wie sie in früheren Lektionen dieses Moduls vermittelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Vertrautheit mit Screenreadern unter iOS und Android.</li>
          <li>Verständnis der Barrierefreiheitsprobleme, die mit bestimmten Arten von Ereignissen verbunden sind.</li>
          <li>Kenntnis konkreter Techniken für besser nutzbare Eingabemöglichkeiten auf Mobilgeräten.</li>
          <li>Wissen, dass mobile Browser für bestimmte <code>&lt;input&gt;</code>-Typen wie <code>number</code> oder <code>tel</code> besondere Vorteile bei der Bedienung bieten.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Barrierefreiheit auf Mobilgeräten

Moderne Mobilgeräte bieten eine gute Barrierefreiheit und unterstützen Webstandards im Allgemeinen gut. Die Zeiten, in denen Mobilgeräte völlig andere Webtechnologien als Desktop-Browser verwendeten und Entwickler deshalb Browser-Erkennung einsetzen und gesonderte Websites bereitstellen mussten, sind längst vorbei. Allerdings erkennen noch immer einige Unternehmen die Nutzung von Mobilgeräten und leiten diese auf eine separate mobile Domain um.

Heutzutage können Mobilgeräte in der Regel vollwertige Websites darstellen. Die wichtigsten Plattformen verfügen sogar über integrierte Screenreader, damit Menschen mit Sehbehinderungen sie nutzen können. Moderne mobile Browser unterstützen außerdem meist [WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) gut.

Damit eine Website auf Mobilgeräten barrierefrei und nutzbar ist, sollten Sie die allgemeinen bewährten Praktiken für Webdesign und Barrierefreiheit befolgen.

Einige Bereiche erfordern auf Mobilgeräten besondere Aufmerksamkeit. Die wichtigsten sind:

- Steuerungsmöglichkeiten – Stellen Sie sicher, dass Steuerelemente wie Buttons sowohl auf Mobilgeräten (hauptsächlich per Touchscreen) als auch auf Desktop-Computern und Laptops (hauptsächlich per Maus und Tastatur) bedienbar sind.
- Benutzereingaben – Gestalten Sie Eingaben auf Mobilgeräten so einfach wie möglich. Halten Sie beispielsweise den Tippaufwand in Formularen gering.
- Responsives Design – Stellen Sie sicher, dass Layouts auf Mobilgeräten funktionieren, halten Sie die Downloadgröße von Bildern gering und berücksichtigen Sie Displays mit hoher Auflösung.

## Überblick über Screenreader-Tests unter Android und iOS

Die verbreitetsten mobilen Plattformen verfügen über voll funktionsfähige Screenreader. Sie funktionieren ähnlich wie Screenreader auf Desktop-Computern, werden aber überwiegend mit Touch-Gesten statt mit Tastenkombinationen bedient.

Sehen wir uns die beiden wichtigsten an: TalkBack unter Android und VoiceOver unter iOS.

### Android TalkBack

Der Screenreader TalkBack ist in das Android-Betriebssystem integriert.

Um ihn einzuschalten, ermitteln Sie zunächst Ihr Smartphone-Modell und Ihre Android-Version. Suchen Sie anschließend nach dem TalkBack-Menü. Dessen Position unterscheidet sich häufig zwischen Android-Versionen und sogar zwischen Smartphone-Modellen. Manche Hersteller, beispielsweise Samsung, bieten auf neueren Geräten nicht einmal TalkBack an, sondern verwenden einen eigenen Screenreader.

Wenn Sie das TalkBack-Menü gefunden haben, betätigen Sie den Schalter, um TalkBack einzuschalten. Folgen Sie gegebenenfalls den weiteren Anweisungen auf dem Bildschirm.

Wenn TalkBack eingeschaltet ist, funktioniert die grundlegende Bedienung Ihres Android-Geräts etwas anders. Zum Beispiel:

1. Durch einmaliges Tippen auf eine App wählen Sie sie aus. Das Gerät liest vor, um welche App es sich handelt.
2. Durch Wischen nach links oder rechts wechseln Sie zwischen Apps beziehungsweise zwischen Buttons und Steuerelementen, wenn Sie sich in einer Steuerleiste befinden. Das Gerät liest jede Option vor.
3. Durch Doppeltippen an einer beliebigen Stelle öffnen Sie die App beziehungsweise wählen die Option aus.
4. Sie können den Bildschirm auch durch Berührung erkunden: Legen Sie einen Finger auf den Bildschirm und bewegen Sie ihn darüber. Ihr Gerät liest die Apps und Elemente vor, über die Sie den Finger bewegen.

So schalten Sie TalkBack wieder aus:

1. Navigieren Sie mit den nun geltenden Gesten zurück zum TalkBack-Menü.
2. Navigieren Sie zum Schalter und betätigen Sie ihn, um TalkBack auszuschalten.

> [!NOTE]
> Sie können jederzeit zum Startbildschirm gelangen, indem Sie in einer fließenden Bewegung nach oben und links wischen. Wenn Sie mehrere Startbildschirme haben, können Sie mit zwei Fingern nach links oder rechts wischen, um zwischen ihnen zu wechseln.

Eine ausführlichere Liste der TalkBack-Gesten finden Sie unter [TalkBack-Gesten verwenden](https://support.google.com/accessibility/android/answer/6151827).

#### Smartphone entsperren

Wenn TalkBack eingeschaltet ist, funktioniert das Entsperren des Smartphones etwas anders.

Sie können mit zwei Fingern vom unteren Rand des Sperrbildschirms nach oben wischen. Wenn Sie zum Entsperren Ihres Geräts einen Code oder ein Muster eingerichtet haben, gelangen Sie anschließend zum entsprechenden Eingabebildschirm.

Sie können den Bildschirm auch durch Berührung erkunden, um den Button _Entsperren_ unten in der Mitte zu finden, und dann doppeltippen.

#### Globale und lokale Menüs

Mit TalkBack können Sie überall auf dem Gerät globale und lokale Kontextmenüs aufrufen. Das globale Menü bietet Optionen für das Gerät als Ganzes, während das lokale Menü Optionen für die aktuelle App oder Bildschirmansicht enthält.

So rufen Sie diese Menüs auf:

1. Wischen Sie zügig nach unten und dann nach rechts, um das globale Menü aufzurufen.
2. Wischen Sie zügig nach oben und dann nach rechts, um das lokale Menü aufzurufen.
3. Wischen Sie nach links und rechts, um zwischen den Optionen zu wechseln.
4. Wenn Sie die gewünschte Option ausgewählt haben, doppeltippen Sie, um sie zu aktivieren.

Einzelheiten zu allen verfügbaren Optionen finden Sie unter [Globale und lokale Kontextmenüs verwenden](https://support.google.com/accessibility/android/answer/6007066).

#### Auf Webseiten navigieren

In einem Webbrowser können Sie über das lokale Kontextmenü Optionen aufrufen, mit denen Sie beispielsweise anhand von Überschriften, Formularsteuerelementen oder Links beziehungsweise Zeile für Zeile durch Webseiten navigieren können.

Probieren Sie bei eingeschaltetem TalkBack Folgendes aus:

1. Öffnen Sie Ihren Webbrowser.
2. Aktivieren Sie die URL-Leiste.
3. Rufen Sie eine Webseite mit vielen Überschriften auf, beispielsweise die Startseite von bbc.co.uk. So geben Sie die URL ein:
   - Wischen Sie nach links oder rechts, bis Sie die URL-Leiste erreichen, und wählen Sie sie durch Doppeltippen aus.
   - Halten Sie den Finger auf der virtuellen Tastatur, bis Sie das gewünschte Zeichen erreichen, und heben Sie ihn dann an, um das Zeichen einzugeben. Wiederholen Sie dies für jedes Zeichen.
   - Suchen Sie anschließend die Eingabetaste und betätigen Sie sie.

4. Wischen Sie nach links und rechts, um zwischen den Elementen der Seite zu wechseln.
5. Wischen Sie in einer fließenden Bewegung nach oben und rechts, um das lokale Kontextmenü aufzurufen.
6. Wischen Sie nach rechts, bis Sie die Option „Überschriften und Orientierungspunkte“ finden.
7. Wählen Sie sie durch Doppeltippen aus. Nun können Sie durch Wischen nach links und rechts zwischen Überschriften und ARIA-Orientierungspunkten wechseln.
8. Um zum Standardmodus zurückzukehren, öffnen Sie das lokale Kontextmenü erneut durch Wischen nach oben und rechts, wählen Sie „Standard“ und aktivieren Sie die Option durch Doppeltippen.

> [!NOTE]
> Eine ausführlichere Dokumentation finden Sie unter [Erste Schritte mit TalkBack unter Android](https://support.google.com/accessibility/android/answer/6283677?hl=en&ref_topic=3529932).

### iOS VoiceOver

Eine mobile Version von VoiceOver ist in das iOS-Betriebssystem integriert.

Um VoiceOver einzuschalten, öffnen Sie die App _Einstellungen_ und wählen Sie _Bedienungshilfen > VoiceOver_. Betätigen Sie den _VoiceOver_-Schalter, um die Funktion zu aktivieren. Auf dieser Seite finden Sie außerdem weitere VoiceOver-Optionen.

> [!NOTE]
> Auf einigen älteren iOS-Geräten finden Sie das VoiceOver-Menü unter _Einstellungen_ > _Allgemein_ > _Bedienungshilfen_ > _VoiceOver_.

Sobald VoiceOver aktiviert ist, funktionieren die grundlegenden Bediengesten unter iOS etwas anders:

1. Durch einmaliges Tippen wählen Sie ein Element aus. Ihr Gerät liest das angetippte Element vor.
2. Sie können auch durch Wischen nach links und rechts zwischen den Elementen auf dem Bildschirm wechseln oder Ihren Finger über den Bildschirm bewegen, um die Elemente zu erkunden. Wenn Sie das gewünschte Element gefunden haben, heben Sie den Finger an, um es auszuwählen.
3. Um das ausgewählte Element zu aktivieren, beispielsweise eine App zu öffnen, doppeltippen Sie an einer beliebigen Stelle auf dem Bildschirm.
4. Wischen Sie mit drei Fingern, um auf einer Seite zu scrollen.
5. Tippen Sie mit zwei Fingern, um eine kontextabhängige Aktion auszuführen, beispielsweise ein Foto in der Kamera-App aufzunehmen.

Um VoiceOver wieder auszuschalten, navigieren Sie mit den beschriebenen Gesten zurück zu _Einstellungen > Allgemein > Bedienungshilfen > VoiceOver_ und deaktivieren Sie den _VoiceOver_-Schalter.

#### Smartphone entsperren

Um das Smartphone zu entsperren, drücken Sie wie gewohnt die Home-Taste oder wischen Sie über den Bildschirm. Wenn Sie einen Code eingerichtet haben, wählen Sie jede Ziffer durch Wischen oder Bewegen des Fingers wie oben beschrieben aus. Doppeltippen Sie, sobald Sie die richtige Ziffer gefunden haben, um sie einzugeben.

#### Rotor verwenden

Wenn VoiceOver eingeschaltet ist, steht Ihnen die Navigationsfunktion „Rotor“ zur Verfügung. Damit können Sie schnell zwischen verschiedenen nützlichen Optionen wählen. So verwenden Sie sie:

1. Drehen Sie zwei Finger auf dem Bildschirm, als würden Sie an einem Einstellrad drehen. Während Sie die Finger weiterdrehen, wird jede Option vorgelesen. Sie können in beide Richtungen drehen, um durch die Optionen zu wechseln.
2. Wenn Sie die gewünschte Option gefunden haben:
   - Heben Sie die Finger an, um sie auszuwählen.
   - Wenn sich der Wert der Option ändern lässt, etwa bei Lautstärke oder Sprechgeschwindigkeit, können Sie nach oben oder unten wischen, um den Wert zu erhöhen oder zu verringern.

Die verfügbaren Rotor-Optionen hängen vom Kontext ab. Sie unterscheiden sich je nach App oder Ansicht (siehe das folgende Beispiel).

#### Auf Webseiten navigieren

Probieren wir aus, wie Sie mit VoiceOver im Web navigieren können:

1. Öffnen Sie Ihren Webbrowser.
2. Aktivieren Sie die URL-Leiste.
3. Rufen Sie eine Webseite mit vielen Überschriften auf, beispielsweise die Startseite von bbc.co.uk. So geben Sie die URL ein:
   - Wischen Sie nach links oder rechts, bis Sie die URL-Leiste erreichen, und wählen Sie sie durch Doppeltippen aus.
   - Halten Sie für jedes Zeichen den Finger auf der virtuellen Tastatur, bis Sie das gewünschte Zeichen erreichen, und heben Sie ihn dann an, um es auszuwählen. Doppeltippen Sie, um es einzugeben.
   - Suchen Sie anschließend die Eingabetaste und betätigen Sie sie.

4. Wischen Sie nach links und rechts, um zwischen den Elementen der Seite zu wechseln. Durch Doppeltippen können Sie ein Element aktivieren, beispielsweise einem Link folgen.
5. Standardmäßig ist im Rotor die Option „Sprechgeschwindigkeit“ ausgewählt. Sie können nun nach oben oder unten wischen, um die Sprechgeschwindigkeit zu erhöhen oder zu verringern.
6. Drehen Sie nun zwei Finger auf dem Bildschirm wie an einem Einstellrad, um den Rotor einzublenden und zwischen seinen Optionen zu wechseln. Hier einige Beispiele für verfügbare Optionen:
   - _Sprechgeschwindigkeit_: Ändern Sie die Sprechgeschwindigkeit.
   - _Container_: Wechseln Sie zwischen verschiedenen semantischen Containern auf der Seite.
   - _Überschriften_: Wechseln Sie zwischen den Überschriften der Seite.
   - _Links_: Wechseln Sie zwischen den Links der Seite.
   - _Formularsteuerelemente_: Wechseln Sie zwischen den Formularsteuerelementen der Seite.
   - _Sprache_: Wechseln Sie zwischen verschiedenen Übersetzungen, sofern diese verfügbar sind.

7. Wählen Sie _Überschriften_. Nun können Sie durch Wischen nach oben und unten zwischen den Überschriften der Seite wechseln.

> [!NOTE]
> Eine ausführlichere Referenz zu den verfügbaren VoiceOver-Gesten und weitere Hinweise zu Barrierefreiheitstests unter iOS finden Sie in der [VoiceOver-Dokumentation von Apple](https://developer.apple.com/documentation/accessibility/voiceover/).

## Steuerungsmöglichkeiten

Im Artikel über Barrierefreiheit in CSS und JavaScript haben wir Ereignisse betrachtet, die an eine bestimmte Art der Bedienung gebunden sind (siehe [Mausspezifische Ereignisse](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#mouse-specific_events)). Zur Erinnerung: Solche Ereignisse verursachen Barrierefreiheitsprobleme, weil sich die zugehörige Funktion mit anderen Eingabemethoden nicht auslösen lässt.

Das Ereignis [click](/de/docs/Web/API/Element/click_event) ist beispielsweise im Hinblick auf Barrierefreiheit gut geeignet: Ein zugehöriger Event-Handler kann ausgelöst werden, indem Sie auf das entsprechende Element klicken, mit der Tabulatortaste dorthin navigieren und die Eingabetaste drücken oder auf einem Touchscreen darauf tippen. Probieren Sie das folgende einfache Button-Beispiel aus:

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

Mausspezifische Ereignisse wie [mousedown](/de/docs/Web/API/Element/mousedown_event) und [mouseup](/de/docs/Web/API/Element/mouseup_event) verursachen dagegen Probleme: Ihre Event-Handler lassen sich nicht ohne Maus auslösen.

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

Wenn Sie jedoch versuchen, die Box auf einem Touchscreen mit dem Finger zu ziehen, funktioniert das nicht. Um andere Eingabemethoden zu unterstützen, müssen Sie andere, aber entsprechende Ereignisse verwenden. Auf Touchscreen-Geräten funktionieren beispielsweise Touch-Ereignisse:

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
> Voll funktionsfähige Beispiele für die Implementierung verschiedener Steuerungsmöglichkeiten finden Sie auch unter [Steuerungsmöglichkeiten für Spiele implementieren](/de/docs/Games/Techniques/Control_mechanisms).

## Responsives Design

[Responsives Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design) bedeutet, Layouts und andere Eigenschaften Ihrer Anwendungen dynamisch an Faktoren wie Bildschirmgröße und Auflösung anzupassen. So bleiben sie für Menschen mit unterschiedlichen Gerätetypen nutzbar und zugänglich.

Auf Mobilgeräten müssen insbesondere die folgenden häufigen Probleme berücksichtigt werden:

- **Eignung von Layouts für Mobilgeräte.** Ein mehrspaltiges Layout funktioniert beispielsweise auf einem schmalen Bildschirm weniger gut. Möglicherweise muss auch die Schriftgröße erhöht werden, damit der Text lesbar bleibt. Solche Probleme lassen sich mit einem responsiven Layout und Techniken wie [Media Queries](/de/docs/Web/CSS/Guides/Media_queries), [viewport](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport) und [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) lösen.
- **Geringe Downloadgröße von Bildern.** Geräte mit kleinen Bildschirmen benötigen im Allgemeinen keine so großen Bilder wie Desktop-Computer und sind häufiger über langsame Netzwerkverbindungen verbunden. Deshalb ist es sinnvoll, für schmale Bildschirme entsprechend kleinere Bilder bereitzustellen. Dafür können Sie [Techniken für responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images) verwenden.
- **Berücksichtigung hoher Auflösungen.** Viele Mobilgeräte haben hochauflösende Bildschirme und benötigen entsprechend höher aufgelöste Bilder, damit die Darstellung klar und scharf bleibt. Auch hierfür können Sie mithilfe responsiver Bildtechniken passende Bilder bereitstellen. Darüber hinaus lassen sich viele Anforderungen an Bilder mit dem Vektorbildformat SVG erfüllen, das heute browserübergreifend gut unterstützt wird. SVG-Dateien sind klein und bleiben unabhängig von der Darstellungsgröße scharf. Weitere Informationen finden Sie unter [Vektorgrafiken in HTML einbinden](/de/docs/Learn_web_development/Core/Structuring_content/Including_vector_graphics_in_HTML).

> [!NOTE]
> Wir behandeln Techniken für responsives Design hier nicht umfassend, da sie an anderen Stellen auf MDN erläutert werden (siehe die Links oben).

### Besondere Aspekte für Mobilgeräte

Bei der barrierefreien Gestaltung von Websites für Mobilgeräte gibt es weitere wichtige Punkte zu beachten. Einige davon sind hier aufgeführt; weitere können später ergänzt werden.

#### Zoom nicht deaktivieren

Mit [viewport](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport) lässt sich die Zoomfunktion deaktivieren. Stellen Sie immer sicher, dass die Größenänderung möglich bleibt, und setzen Sie die Breite im {{htmlelement("head")}} auf die Gerätebreite:

```html
<meta name="viewport" content="width=device-width; user-scalable=yes" />
```

Setzen Sie nach Möglichkeit niemals `user-scalable=no`: Viele Menschen sind auf die Zoomfunktion angewiesen, um die Inhalte Ihrer Website sehen zu können. Ihnen diese Möglichkeit zu nehmen, ist daher keine gute Idee. Es gibt Situationen, in denen das Zoomen die Benutzeroberfläche beeinträchtigen kann. Wenn Sie in einem solchen Fall meinen, die Zoomfunktion deaktivieren zu müssen, sollten Sie eine gleichwertige Alternative anbieten, beispielsweise ein Steuerelement zum Vergrößern des Textes, das Ihre Benutzeroberfläche nicht beeinträchtigt.

#### Menüs zugänglich halten

Da Bildschirme auf Mobilgeräten deutlich schmaler sind, werden Navigationsmenüs dort häufig mithilfe von Media Queries und anderen Techniken auf ein kleines Symbol am oberen Bildschirmrand reduziert. Durch Betätigen des Symbols wird das Menü bei Bedarf eingeblendet. Üblicherweise zeigt es drei waagerechte Linien; dieses Designmuster wird deshalb als „Hamburger-Menü“ bezeichnet.

Achten Sie bei der Implementierung eines solchen Menüs darauf, dass sich das Steuerelement zum Einblenden mit geeigneten Eingabemethoden bedienen lässt – auf Mobilgeräten normalerweise per Touch –, wie oben unter [Steuerungsmöglichkeiten](#steuerungsmöglichkeiten) beschrieben. Außerdem sollte der Rest der Seite während der Bedienung des Menüs ausgeblendet oder anderweitig aus dem Weg geräumt werden, damit es bei der Navigation nicht zu Verwechslungen kommt.

Hier finden Sie ein [gutes Beispiel für ein Hamburger-Menü](https://fritz-weisshart.de/meg_men/).

## Benutzereingaben

Die Dateneingabe ist für Menschen auf Mobilgeräten meist mühsamer als auf Desktop-Computern. Text in Formularfelder einzugeben, ist mit einer Desktop- oder Laptop-Tastatur bequemer als mit einer virtuellen Touchscreen-Tastatur oder einer kleinen physischen Tastatur eines Mobilgeräts.

Deshalb lohnt es sich, den erforderlichen Tippaufwand möglichst gering zu halten. Statt die Berufsbezeichnung jedes Mal in ein gewöhnliches Textfeld eingeben zu lassen, könnten Sie beispielsweise ein {{htmlelement("select")}}-Menü mit den häufigsten Optionen anbieten. Das fördert zugleich eine einheitliche Dateneingabe. Zusätzlich könnten Sie eine Option „Sonstiges“ bereitstellen, die ein Textfeld für andere Berufsbezeichnungen einblendet. Das folgende Beispiel zeigt, wie sich diese Idee umsetzen lässt:

```html hidden live-sample___select-text-combo
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

Es lohnt sich außerdem, HTML-Typen für Formulareingaben auf mobilen Plattformen zu verwenden, da sowohl Android als auch iOS sie gut unterstützen.

Zum Beispiel:

- Die Typen `number`, `tel` und `email` zeigen geeignete virtuelle Tastaturen für die Eingabe von Zahlen beziehungsweise Telefonnummern und E-Mail-Adressen an.
- Die Typen `time` und `date` zeigen geeignete Auswahlfelder für Uhrzeiten und Datumsangaben an.

Zum Ausprobieren finden Sie interaktive Beispiele unter [Die HTML5-Eingabetypen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types).

Wenn Sie für Desktop-Computer eine andere Lösung anbieten möchten, können Sie Mobilgeräten mithilfe von Feature Detection anderes Markup bereitstellen. Weitere Informationen finden Sie in unserem [Artikel über Feature Detection](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection).

## Zusammenfassung

In diesem Artikel haben wir einige häufige Probleme der Barrierefreiheit auf Mobilgeräten und mögliche Lösungen vorgestellt. Außerdem haben wir gezeigt, wie Sie die verbreitetsten Screenreader für Barrierefreiheitstests verwenden können.

## Siehe auch

- [Richtlinien für die mobile Webentwicklung](https://www.smashingmagazine.com/2012/07/guidelines-for-mobile-web-development/) – Eine Artikelsammlung im _Smashing Magazine_ über verschiedene Techniken für mobiles Webdesign.
- [Ihre Website auf Touch-Geräten nutzbar machen](https://www.creativebloq.com/javascript/make-your-site-work-touch-devices-51411644) – Ein hilfreicher Artikel darüber, wie Sie mit Touch-Ereignissen Interaktionen auf Mobilgeräten ermöglichen.

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Multimedia","Learn_web_development/Core/Accessibility/Accessibility_troubleshooting", "Learn_web_development/Core/Accessibility")}}
