---
title: Barrierefreiheit auf Mobilgeräten
slug: Learn_web_development/Core/Accessibility/Mobile
l10n:
  sourceCommit: 20b627881ef42682e5051e160dc398c7861c03a9
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Multimedia","Learn_web_development/Core/Accessibility/Accessibility_troubleshooting", "Learn_web_development/Core/Accessibility")}}

Da der Zugriff auf das Web über Mobilgeräte so verbreitet ist und etablierte Plattformen wie iOS und Android über ausgereifte Werkzeuge für Barrierefreiheit verfügen, ist es wichtig, auch auf diesen Plattformen auf die Barrierefreiheit Ihrer Webinhalte zu achten. Dieser Artikel behandelt Aspekte der Barrierefreiheit, die speziell für Mobilgeräte relevant sind.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und bewährten Verfahren für Barrierefreiheit, wie sie in früheren Lektionen dieses Moduls vermittelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Vertrautheit mit Screenreadern unter iOS und Android.</li>
          <li>Verständnis der Barrierefreiheitsprobleme, die bei bestimmten Arten von Events auftreten.</li>
          <li>Kenntnis konkreter Techniken für benutzerfreundlichere Eingabemöglichkeiten auf Mobilgeräten.</li>
          <li>Wissen, dass mobile Browser bei bestimmten <code>&lt;input&gt;</code>-Typen wie <code>number</code> oder <code>tel</code> besondere Vorteile für die Bedienbarkeit bieten.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Barrierefreiheit auf Mobilgeräten

Moderne Mobilgeräte bieten eine gute Unterstützung für Barrierefreiheit – und für Webstandards im Allgemeinen. Die Zeiten, in denen Mobilgeräte völlig andere Webtechnologien als Desktop-Browser verwendeten und Entwickler deshalb Browser-Erkennung einsetzen und vollständig separate Websites bereitstellen mussten, sind längst vorbei. Allerdings erkennen noch immer einige Unternehmen die Nutzung von Mobilgeräten und leiten sie auf eine separate mobile Domain um.

Heutzutage können Mobilgeräte in der Regel Websites mit vollem Funktionsumfang darstellen. Die wichtigsten Plattformen verfügen sogar über integrierte Screenreader, mit denen Menschen mit Sehbehinderungen sie nutzen können. Moderne mobile Browser unterstützen in der Regel auch [WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) gut.

Damit eine Website auf Mobilgeräten barrierefrei und benutzbar ist, müssen Sie die allgemeinen bewährten Verfahren für Webdesign und Barrierefreiheit befolgen.

Einige Bereiche erfordern auf Mobilgeräten besondere Aufmerksamkeit. Die wichtigsten sind:

- Steuerungsmöglichkeiten – Stellen Sie sicher, dass Bedienelemente wie Schaltflächen sowohl auf Mobilgeräten (hauptsächlich per Touchscreen) als auch auf Desktop- und Laptop-Computern (hauptsächlich per Maus und Tastatur) zugänglich sind.
- Benutzereingaben – Machen Sie Eingaben auf Mobilgeräten so einfach wie möglich. Beschränken Sie beispielsweise bei Formularen das Tippen auf ein Minimum.
- Responsives Design – Stellen Sie sicher, dass Layouts auf Mobilgeräten funktionieren, halten Sie die Downloadgrößen von Bildern gering und berücksichtigen Sie Bildschirme mit hoher Auflösung.

## Überblick über Screenreader-Tests unter Android und iOS

Die gängigsten mobilen Plattformen verfügen über voll funktionsfähige Screenreader. Sie funktionieren ähnlich wie Screenreader auf Desktop-Computern, werden aber überwiegend mit Touch-Gesten statt mit Tastenkombinationen bedient.

Sehen wir uns die beiden wichtigsten an: TalkBack unter Android und VoiceOver unter iOS.

### Android TalkBack

Der Screenreader TalkBack ist in das Android-Betriebssystem integriert.

Um ihn einzuschalten, ermitteln Sie zunächst Ihr Telefonmodell und Ihre Android-Version und suchen Sie dann nach der Position des TalkBack-Menüs. Diese kann sich zwischen Android-Versionen und sogar zwischen Telefonmodellen stark unterscheiden. Einige Telefonhersteller, etwa Samsung, bieten auf neueren Geräten statt TalkBack einen eigenen Screenreader an.

Wenn Sie das TalkBack-Menü gefunden haben, betätigen Sie den Schiebeschalter, um TalkBack einzuschalten. Befolgen Sie gegebenenfalls weitere Anweisungen auf dem Bildschirm.

Wenn TalkBack eingeschaltet ist, ändert sich die grundlegende Bedienung Ihres Android-Geräts etwas. Zum Beispiel:

1. Wenn Sie einmal auf eine App tippen, wird sie ausgewählt und das Gerät liest ihren Namen vor.
2. Durch Wischen nach links oder rechts wechseln Sie zwischen Apps oder, innerhalb einer Steuerleiste, zwischen Schaltflächen und Bedienelementen. Das Gerät liest jede Option vor.
3. Durch Doppeltippen an einer beliebigen Stelle öffnen Sie die App oder wählen die Option aus.
4. Sie können den Bildschirm auch durch Berühren erkunden: Halten Sie den Finger auf dem Bildschirm und bewegen Sie ihn darüber. Ihr Gerät liest die Apps und Elemente vor, über die Sie sich bewegen.

So schalten Sie TalkBack wieder aus:

1. Navigieren Sie zurück zum TalkBack-Menü. Verwenden Sie dazu die Gesten, die jetzt aktiv sind.
2. Navigieren Sie zum Schiebeschalter und betätigen Sie ihn, um TalkBack auszuschalten.

> [!NOTE]
> Sie können jederzeit zum Startbildschirm gelangen, indem Sie in einer fließenden Bewegung nach oben und links wischen. Wenn Sie mehrere Startbildschirme haben, können Sie mit zwei Fingern nach links und rechts wischen, um zwischen ihnen zu wechseln.

Eine ausführlichere Liste der TalkBack-Gesten finden Sie unter [TalkBack-Gesten verwenden](https://support.google.com/accessibility/android/answer/6151827).

#### Telefon entsperren

Wenn TalkBack eingeschaltet ist, funktioniert das Entsperren des Telefons etwas anders.

Sie können mit zwei Fingern vom unteren Rand des Sperrbildschirms nach oben wischen. Wenn Sie zum Entsperren Ihres Geräts einen Code oder ein Muster festgelegt haben, gelangen Sie anschließend zum entsprechenden Eingabebildschirm.

Sie können den Bildschirm auch durch Berühren erkunden, um die Schaltfläche _Entsperren_ unten in der Mitte des Bildschirms zu finden, und dann doppeltippen.

#### Globale und lokale Menüs

Mit TalkBack können Sie überall auf dem Gerät auf globale und lokale Kontextmenüs zugreifen. Das globale Menü bietet Optionen für das gesamte Gerät, während das lokale Menü Optionen für die aktuelle App oder Bildschirmansicht enthält.

So öffnen Sie diese Menüs:

1. Öffnen Sie das globale Menü, indem Sie schnell nach unten und dann nach rechts wischen.
2. Öffnen Sie das lokale Menü, indem Sie schnell nach oben und dann nach rechts wischen.
3. Wischen Sie nach links oder rechts, um zwischen den Optionen zu wechseln.
4. Wenn Sie die gewünschte Option ausgewählt haben, aktivieren Sie sie durch Doppeltippen.

Einzelheiten zu allen Optionen der globalen und lokalen Kontextmenüs finden Sie unter [Globale und lokale Kontextmenüs verwenden](https://support.google.com/accessibility/android/answer/6007066).

#### Webseiten durchsuchen

In einem Webbrowser können Sie über das lokale Kontextmenü Optionen aufrufen, mit denen Sie eine Webseite beispielsweise nur anhand ihrer Überschriften, Formular-Steuerelemente oder Links oder Zeile für Zeile durchlaufen können.

Gehen Sie bei eingeschaltetem TalkBack beispielsweise so vor:

1. Öffnen Sie Ihren Webbrowser.
2. Aktivieren Sie die URL-Leiste.
3. Rufen Sie eine Webseite mit vielen Überschriften auf, beispielsweise die Startseite von bbc.co.uk. So geben Sie die URL ein:
   - Wählen Sie die URL-Leiste aus, indem Sie nach links oder rechts wischen, bis Sie sie erreichen, und dann doppeltippen.
   - Halten Sie Ihren Finger auf der virtuellen Tastatur, bis Sie das gewünschte Zeichen erreicht haben, und heben Sie ihn dann an, um es einzugeben. Wiederholen Sie dies für jedes Zeichen.
   - Suchen Sie anschließend die Eingabetaste und betätigen Sie sie.

4. Wischen Sie nach links oder rechts, um zwischen den Elementen auf der Seite zu wechseln.
5. Wischen Sie in einer fließenden Bewegung nach oben und rechts, um das lokale Kontextmenü zu öffnen.
6. Wischen Sie nach rechts, bis Sie die Option „Überschriften und Orientierungspunkte“ finden.
7. Wählen Sie sie durch Doppeltippen aus. Nun können Sie durch Wischen nach links oder rechts zwischen Überschriften und ARIA-Landmarks wechseln.
8. Um zum Standardmodus zurückzukehren, öffnen Sie erneut das lokale Kontextmenü, indem Sie nach oben und rechts wischen. Wählen Sie „Standard“ aus und aktivieren Sie die Option durch Doppeltippen.

> [!NOTE]
> Eine ausführlichere Dokumentation finden Sie unter [Erste Schritte mit TalkBack unter Android](https://support.google.com/accessibility/android/answer/6283677?hl=en&ref_topic=3529932).

### iOS VoiceOver

Eine mobile Version von VoiceOver ist in das iOS-Betriebssystem integriert.

Um sie einzuschalten, öffnen Sie die App _Einstellungen_ und wählen Sie _Bedienungshilfen > VoiceOver_. Betätigen Sie den _VoiceOver_-Schiebeschalter, um VoiceOver zu aktivieren. Auf dieser Seite finden Sie auch weitere VoiceOver-Optionen.

> [!NOTE]
> Auf einigen älteren iOS-Geräten finden Sie das VoiceOver-Menü unter _Einstellungen_ > _Allgemein_ > _Bedienungshilfen_ > _VoiceOver_.

Sobald VoiceOver aktiviert ist, ändern sich die grundlegenden Bediengesten von iOS etwas:

1. Durch einmaliges Tippen wählen Sie ein Element aus. Ihr Gerät liest das angetippte Element vor.
2. Sie können zwischen den Elementen auf dem Bildschirm wechseln, indem Sie nach links oder rechts wischen oder Ihren Finger über den Bildschirm bewegen. Wenn Sie das gewünschte Element gefunden haben, heben Sie den Finger an, um es auszuwählen.
3. Um das ausgewählte Element zu aktivieren, beispielsweise eine App zu öffnen, tippen Sie an einer beliebigen Stelle des Bildschirms doppelt.
4. Wischen Sie mit drei Fingern, um durch eine Seite zu scrollen.
5. Tippen Sie mit zwei Fingern, um eine vom Kontext abhängige Aktion auszuführen – beispielsweise ein Foto aufzunehmen, während die Kamera-App geöffnet ist.

Um VoiceOver wieder auszuschalten, navigieren Sie mit den oben beschriebenen Gesten zurück zu _Einstellungen > Allgemein > Bedienungshilfen > VoiceOver_ und schalten den _VoiceOver_-Schiebeschalter aus.

#### Telefon entsperren

Um das Telefon zu entsperren, drücken Sie wie gewohnt die Home-Taste oder wischen Sie über den Bildschirm. Wenn Sie einen Code festgelegt haben, können Sie jede Ziffer durch Wischen oder Bewegen des Fingers auswählen, wie oben beschrieben. Wenn Sie die richtige Ziffer gefunden haben, geben Sie sie durch Doppeltippen ein.

#### Den Rotor verwenden

Wenn VoiceOver eingeschaltet ist, steht Ihnen eine Navigationsfunktion namens Rotor zur Verfügung. Damit können Sie schnell zwischen mehreren häufig benötigten Optionen wählen. So verwenden Sie ihn:

1. Drehen Sie zwei Finger auf dem Bildschirm, als würden Sie einen Drehknopf bedienen. Während der Drehung wird jede Option vorgelesen. Sie können in beide Richtungen drehen, um die Optionen durchzugehen.
2. Wenn Sie die gewünschte Option gefunden haben:
   - Heben Sie die Finger an, um sie auszuwählen.
   - Wenn sich der Wert der Option ändern lässt, etwa bei Lautstärke oder Sprechgeschwindigkeit, können Sie nach oben oder unten wischen, um den Wert zu erhöhen oder zu verringern.

Die verfügbaren Rotor-Optionen sind kontextabhängig: Sie unterscheiden sich je nach App oder Ansicht. Ein Beispiel folgt weiter unten.

#### Webseiten durchsuchen

Probieren wir das Surfen im Web mit VoiceOver aus:

1. Öffnen Sie Ihren Webbrowser.
2. Aktivieren Sie die URL-Leiste.
3. Rufen Sie eine Webseite mit vielen Überschriften auf, beispielsweise die Startseite von bbc.co.uk. So geben Sie die URL ein:
   - Wählen Sie die URL-Leiste aus, indem Sie nach links oder rechts wischen, bis Sie sie erreichen, und dann doppeltippen.
   - Halten Sie für jedes Zeichen Ihren Finger auf der virtuellen Tastatur, bis Sie das gewünschte Zeichen erreicht haben, und heben Sie ihn dann an, um das Zeichen auszuwählen. Tippen Sie doppelt, um es einzugeben.
   - Suchen Sie anschließend die Eingabetaste und betätigen Sie sie.

4. Wischen Sie nach links oder rechts, um zwischen den Elementen auf der Seite zu wechseln. Sie können ein Element durch Doppeltippen aktivieren, beispielsweise um einem Link zu folgen.
5. Standardmäßig ist im Rotor die Sprechgeschwindigkeit ausgewählt. Sie können jetzt nach oben oder unten wischen, um sie zu erhöhen oder zu verringern.
6. Drehen Sie nun zwei Finger wie an einem Drehknopf auf dem Bildschirm, um den Rotor aufzurufen und zwischen seinen Optionen zu wechseln. Dazu gehören beispielsweise:
   - _Sprechgeschwindigkeit_: Ändern Sie die Sprechgeschwindigkeit.
   - _Container_: Wechseln Sie zwischen semantischen Containern auf der Seite.
   - _Überschriften_: Wechseln Sie zwischen den Überschriften auf der Seite.
   - _Links_: Wechseln Sie zwischen den Links auf der Seite.
   - _Formular-Steuerelemente_: Wechseln Sie zwischen den Formular-Steuerelementen auf der Seite.
   - _Sprache_: Wechseln Sie zwischen verschiedenen Übersetzungen, sofern welche verfügbar sind.

7. Wählen Sie _Überschriften_ aus. Nun können Sie durch Wischen nach oben oder unten zwischen den Überschriften auf der Seite wechseln.

> [!NOTE]
> Eine ausführlichere Übersicht über die verfügbaren VoiceOver-Gesten sowie weitere Hinweise zum Testen der Barrierefreiheit unter iOS finden Sie in der [VoiceOver-Dokumentation von Apple](https://developer.apple.com/documentation/accessibility/voiceover/).

## Steuerungsmöglichkeiten

Im Artikel zur Barrierefreiheit von CSS und JavaScript haben wir Events betrachtet, die nur mit einer bestimmten Art der Steuerung ausgelöst werden können (siehe [Mausspezifische Events](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#mouse-specific_events)). Zur Erinnerung: Sie verursachen Barrierefreiheitsprobleme, weil sich die zugehörige Funktion mit anderen Steuerungsmöglichkeiten nicht aktivieren lässt.

Das [click](/de/docs/Web/API/Element/click_event)-Event ist dagegen aus Sicht der Barrierefreiheit gut geeignet: Ein zugehöriger Event-Handler kann ausgelöst werden, indem Sie auf das Element klicken, für das er registriert ist, mit der Tabulatortaste zu ihm navigieren und die Eingabetaste drücken oder auf einem Touchscreen darauf tippen. Probieren Sie das folgende einfache Schaltflächenbeispiel aus:

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

Mausspezifische Events wie [mousedown](/de/docs/Web/API/Element/mousedown_event) und [mouseup](/de/docs/Web/API/Element/mouseup_event) bereiten hingegen Probleme: Ihre Event-Handler lassen sich nicht mit anderen Steuerungsmöglichkeiten als der Maus auslösen.

Das nächste Beispiel verwendet Code wie den folgenden, damit Sie ein Kästchen mit der Maus über den Bildschirm ziehen können:

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

Wenn Sie jedoch versuchen, es auf einem Touchscreen mit dem Finger zu ziehen, funktioniert es nicht. Um andere Steuerungsmöglichkeiten zu unterstützen, müssen Sie andere, aber entsprechende Events verwenden. Beispielsweise funktionieren Touch-Events auf Touchscreen-Geräten:

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

Die aktualisierte Version lässt sich sowohl mit der Maus als auch per Touch-Geste ziehen:

{{embedlivesample("multi-drag", "100%", "400")}}

> [!NOTE]
> Unter [Steuerungsmöglichkeiten für Spiele implementieren](/de/docs/Games/Techniques/Control_mechanisms) finden Sie außerdem vollständig funktionsfähige Beispiele für die Umsetzung verschiedener Steuerungsmöglichkeiten.

## Responsives Design

[Responsives Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design) bedeutet, Layouts und andere Eigenschaften Ihrer Anwendungen dynamisch an Faktoren wie Bildschirmgröße und Auflösung anzupassen, damit sie auf unterschiedlichen Gerätetypen benutzbar und zugänglich sind.

Die häufigsten Probleme, die insbesondere für Mobilgeräte gelöst werden müssen, sind:

- **Eignung der Layouts für Mobilgeräte.** Ein mehrspaltiges Layout funktioniert beispielsweise auf einem schmalen Bildschirm nicht so gut. Möglicherweise muss auch die Schriftgröße erhöht werden, damit der Text lesbar ist. Solche Probleme lassen sich mit einem responsiven Layout lösen, das Technologien wie [Media Queries](/de/docs/Web/CSS/Guides/Media_queries), [viewport](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport) und [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) verwendet.
- **Geringe Downloadgrößen für Bilder.** Geräte mit kleinen Bildschirmen benötigen in der Regel keine so großen Bilder wie Desktop-Computer. Außerdem werden sie häufiger über langsame Netzwerkverbindungen genutzt. Daher ist es sinnvoll, für schmale Bildschirme bei Bedarf kleinere Bilder bereitzustellen. Dies können Sie mit [Techniken für responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images) umsetzen.
- **Berücksichtigung hoher Auflösungen.** Viele Mobilgeräte haben hochauflösende Bildschirme und benötigen daher Bilder mit höherer Auflösung, damit die Darstellung klar und scharf bleibt. Auch hierfür können Sie mit Techniken für responsive Bilder passende Dateien bereitstellen. Darüber hinaus lassen sich viele Bildanforderungen mit dem SVG-Vektorgrafikformat erfüllen, das heute von Browsern gut unterstützt wird. SVG-Dateien sind klein und bleiben unabhängig von ihrer Darstellungsgröße scharf. Weitere Einzelheiten finden Sie unter [Vektorgrafiken in HTML einbinden](/de/docs/Learn_web_development/Core/Structuring_content/Including_vector_graphics_in_HTML).

> [!NOTE]
> Eine umfassende Erläuterung der Techniken für responsives Design würde hier den Rahmen sprengen. Sie werden an anderen Stellen auf MDN behandelt (siehe die obigen Links).

### Besondere Aspekte für Mobilgeräte

Wenn Sie Websites auf Mobilgeräten barrierefreier gestalten, sollten Sie weitere wichtige Punkte berücksichtigen. Einige davon sind hier aufgeführt; die Liste kann künftig ergänzt werden.

#### Zoomen nicht deaktivieren

Mit [viewport](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport) lässt sich das Zoomen deaktivieren. Stellen Sie sicher, dass das Vergrößern und Verkleinern möglich bleibt, und setzen Sie die Breite im {{htmlelement("head")}} auf die Gerätebreite:

```html
<meta name="viewport" content="width=device-width; user-scalable=yes" />
```

Verwenden Sie nach Möglichkeit niemals `user-scalable=no`: Viele Menschen sind auf das Zoomen angewiesen, um die Inhalte Ihrer Website sehen zu können. Ihnen diese Möglichkeit zu nehmen, ist daher keine gute Idee. Es gibt Situationen, in denen das Zoomen die Benutzeroberfläche beeinträchtigen kann. Wenn Sie es deshalb deaktivieren müssen, sollten Sie eine gleichwertige Alternative anbieten, beispielsweise ein Bedienelement, mit dem sich die Textgröße erhöhen lässt, ohne die Benutzeroberfläche zu beeinträchtigen.

#### Menüs zugänglich halten

Da Bildschirme auf Mobilgeräten viel schmaler sind, werden Navigationsmenüs häufig mithilfe von Media Queries und anderen Technologien auf ein kleines Symbol am oberen Bildschirmrand reduziert. Bei Bedarf lässt sich das Menü durch Betätigen dieses Symbols einblenden. Häufig besteht es aus drei waagerechten Linien; dieses Gestaltungsmuster wird deshalb als „Hamburger-Menü“ bezeichnet.

Wenn Sie ein solches Menü umsetzen, müssen Sie sicherstellen, dass sich das Bedienelement zum Einblenden mit geeigneten Steuerungsmöglichkeiten bedienen lässt – auf Mobilgeräten normalerweise per Touch-Geste –, wie oben unter [Steuerungsmöglichkeiten](#steuerungsmöglichkeiten) beschrieben. Außerdem sollte der übrige Seiteninhalt beiseitegeschoben oder ausgeblendet werden, während das Menü geöffnet ist, damit er bei der Navigation durch das Menü nicht zu Verwirrung führt.

Ein Beispiel für ein barrierefreies, responsives Navigationsmenü finden Sie in der [Navigationskomponente des W3C Design Systems](https://design-system.w3.org/components/navigation.html) und im zugehörigen [funktionsfähigen Beispiel für die Header-Navigation](https://design-system.w3.org/code/header-nav.html).

## Benutzereingaben

Die Dateneingabe auf Mobilgeräten ist für Benutzer in der Regel mühsamer als auf Desktop-Computern. Text lässt sich mit der Tastatur eines Desktop- oder Laptop-Computers bequemer in Formularfelder eingeben als über eine virtuelle Touchscreen-Tastatur oder eine kleine physische Tastatur eines Mobilgeräts.

Deshalb lohnt es sich, den erforderlichen Tippaufwand zu verringern. Statt Benutzer ihre Berufsbezeichnung jedes Mal in ein gewöhnliches Textfeld eingeben zu lassen, könnten Sie beispielsweise ein {{htmlelement("select")}}-Menü mit den häufigsten Optionen anbieten. Das verbessert auch die Einheitlichkeit der eingegebenen Daten. Ergänzen Sie eine Option „Sonstiges“, die ein Textfeld für andere Berufsbezeichnungen einblendet. Das folgende Beispiel zeigt diese Lösung:

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

Außerdem lohnt es sich, auf mobilen Plattformen die verschiedenen HTML-Typen für Formulareingaben zu verwenden: Sowohl Android als auch iOS unterstützen sie gut.

Zum Beispiel:

- Die Typen `number`, `tel` und `email` zeigen geeignete virtuelle Tastaturen für die Eingabe von Zahlen, Telefonnummern beziehungsweise E-Mail-Adressen an.
- Die Typen `time` und `date` zeigen geeignete Auswahloberflächen für Uhrzeiten beziehungsweise Datumsangaben an.

Live-Beispiele zum Ausprobieren finden Sie unter [Die HTML5-Eingabetypen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types).

Wenn Sie für Desktop-Computer eine andere Lösung anbieten möchten, können Sie mithilfe von Feature Detection für Mobilgeräte anderes Markup bereitstellen. Weitere Informationen finden Sie in unserem [Artikel über Feature Detection](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection).

## Zusammenfassung

In diesem Artikel haben wir einige häufige Barrierefreiheitsprobleme auf Mobilgeräten und mögliche Lösungen vorgestellt. Außerdem haben wir die Verwendung der gängigsten Screenreader erläutert, damit Sie die Barrierefreiheit testen können.

## Siehe auch

- [Richtlinien für die mobile Webentwicklung](https://www.smashingmagazine.com/2012/07/guidelines-for-mobile-web-development/) – Eine Sammlung von Artikeln im _Smashing Magazine_ über verschiedene Techniken für mobiles Webdesign.
- [Ihre Website auf Touch-Geräten nutzbar machen](https://www.creativebloq.com/javascript/make-your-site-work-touch-devices-51411644) – Ein hilfreicher Artikel über die Verwendung von Touch-Events, um Interaktionen auf Mobilgeräten zu ermöglichen.

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Multimedia","Learn_web_development/Core/Accessibility/Accessibility_troubleshooting", "Learn_web_development/Core/Accessibility")}}
