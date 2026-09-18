---
title: Barrierefreiheit auf Mobilgeräten
slug: Learn_web_development/Core/Accessibility/Mobile
l10n:
  sourceCommit: 9fac65196ac2b9a26afabbcb7f14fd58621916ae
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Multimedia","Learn_web_development/Core/Accessibility/Accessibility_troubleshooting", "Learn_web_development/Core/Accessibility")}}

Da der Webzugriff auf Mobilgeräten so beliebt ist und bekannte Plattformen wie iOS und Android vollwertige Barrierefreiheitswerkzeuge bieten, ist es wichtig, die Barrierefreiheit Ihrer Webinhalte auf diesen Plattformen zu berücksichtigen. Dieser Artikel behandelt mobilgerätespezifische Aspekte der Barrierefreiheit.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und den in den vorherigen Lektionen des Moduls vermittelten Best Practices für Barrierefreiheit.</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
      <td>
        <ul>
          <li>Vertrautheit mit Screenreadern unter iOS und Android.</li>
          <li>Vertrautheit mit den Barrierefreiheitsproblemen bestimmter Ereignistypen.</li>
          <li>Spezifische Techniken für besser nutzbare Mechanismen zur Benutzereingabe auf Mobilgeräten.</li>
          <li>Wissen, dass mobile Browser für bestimmte <code>&lt;input&gt;</code>-Typen wie <code>number</code> oder <code>tel</code> spezifische Nutzungsvorteile bieten.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Barrierefreiheit auf Mobilgeräten

Der Stand der Barrierefreiheit — und der Unterstützung von Webstandards im Allgemeinen — ist auf modernen Mobilgeräten gut. Die Zeiten, in denen Mobilgeräte völlig andere Webtechnologien als Desktop-Browser verwendeten und Entwickler dazu zwangen, Browser Sniffing einzusetzen und vollständig getrennte Websites bereitzustellen, sind lange vorbei (obwohl einige Unternehmen die Nutzung von Mobilgeräten weiterhin erkennen und dafür eine separate mobile Domain bereitstellen).

Heutzutage können Mobilgeräte in der Regel voll ausgestattete Websites verarbeiten, und die wichtigsten Plattformen verfügen sogar über integrierte Screenreader, damit sehbehinderte Benutzer sie erfolgreich verwenden können. Moderne mobile Browser bieten in der Regel auch gute Unterstützung für [WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics).

Um eine Website auf Mobilgeräten barrierefrei und nutzbar zu machen, müssen Sie lediglich allgemeine Best Practices für gutes Webdesign und Barrierefreiheit befolgen.

Es gibt einige Ausnahmen, die für Mobilgeräte besondere Beachtung erfordern. Die wichtigsten sind:

- Steuerungsmechanismen — Stellen Sie sicher, dass Bedienelemente der Benutzeroberfläche wie Buttons auf Mobilgeräten (d.h. hauptsächlich über Touchscreens) ebenso zugänglich sind wie auf Desktops/Laptops (hauptsächlich mit Maus/Tastatur).
- Benutzereingabe — Gestalten Sie Anforderungen an Benutzereingaben auf Mobilgeräten so unkompliziert wie möglich (z. B. indem Sie in Formularen den Tipppaufwand minimieren).
- Responsives Design — Stellen Sie sicher, dass Layouts auf Mobilgeräten funktionieren, halten Sie die Downloadgrößen von Bildern gering und berücksichtigen Sie die Bereitstellung von Bildern für hochauflösende Bildschirme.

## Zusammenfassung der Screenreader-Tests unter Android und iOS

Die gängigsten mobilen Plattformen verfügen über voll funktionsfähige Screenreader. Diese funktionieren ähnlich wie Desktop-Screenreader, werden jedoch größtenteils mit Touch-Gesten statt Tastenkombinationen bedient.

Sehen wir uns die beiden wichtigsten an: TalkBack unter Android und VoiceOver unter iOS.

### Android TalkBack

Der TalkBack-Screenreader ist in das Android-Betriebssystem integriert.

Um ihn zu aktivieren, ermitteln Sie Ihr Telefonmodell und Ihre Android-Version und suchen Sie dann nach der Position des TalkBack-Menüs. Diese unterscheidet sich häufig erheblich zwischen Android-Versionen und sogar zwischen verschiedenen Telefonmodellen. Einige Telefonhersteller (z. B. Samsung) bieten TalkBack auf neueren Telefonen nicht einmal an und haben sich stattdessen für einen eigenen Screenreader entschieden.

Wenn Sie das TalkBack-Menü gefunden haben, drücken Sie den Schiebeschalter, um TalkBack zu aktivieren. Folgen Sie allen weiteren angezeigten Anweisungen auf dem Bildschirm.

Wenn TalkBack aktiviert ist, unterscheiden sich die grundlegenden Bedienelemente Ihres Android-Geräts etwas. Zum Beispiel:

1. Einmaliges Tippen auf eine App wählt sie aus, und das Gerät liest vor, um welche App es sich handelt.
2. Wischen nach links und rechts wechselt zwischen Apps oder Buttons/Steuerelementen, wenn Sie sich in einer Steuerleiste befinden. Das Gerät liest jede Option vor.
3. Doppeltippen an einer beliebigen Stelle öffnet die App bzw. wählt die Option aus.
4. Sie können auch per Berührung erkunden — halten Sie Ihren Finger auf den Bildschirm gedrückt und ziehen Sie ihn darüber; Ihr Gerät liest die verschiedenen Apps/Elemente vor, über die Sie sich bewegen.

So deaktivieren Sie TalkBack:

1. Navigieren Sie zurück zum TalkBack-Menübildschirm (mithilfe der aktuell aktivierten Gesten).
2. Navigieren Sie zum Schiebeschalter und aktivieren Sie ihn, um TalkBack auszuschalten.

> [!NOTE]
> Sie können jederzeit zum Startbildschirm gelangen, indem Sie in einer fließenden Bewegung nach oben und links wischen. Wenn Sie mehr als einen Startbildschirm haben, können Sie zwischen ihnen wechseln, indem Sie mit zwei Fingern nach links und rechts wischen.

Eine vollständigere Liste der TalkBack-Gesten finden Sie unter [Use TalkBack gestures](https://support.google.com/accessibility/android/answer/6151827).

#### Das Telefon entsperren

Wenn TalkBack aktiviert ist, unterscheidet sich das Entsperren des Telefons etwas.

Sie können mit zwei Fingern vom unteren Rand des Sperrbildschirms nach oben wischen. Wenn Sie einen Passcode oder ein Muster zum Entsperren Ihres Geräts eingerichtet haben, gelangen Sie anschließend zum entsprechenden Eingabebildschirm.

Sie können auch per Berührung erkunden, um den Button _Unlock_ unten in der Mitte des Bildschirms zu finden, und dann doppeltippen.

#### Globale und lokale Menüs

TalkBack ermöglicht Ihnen den Zugriff auf globale und lokale Kontextmenüs, unabhängig davon, wohin Sie auf dem Gerät navigiert haben. Erstere bieten globale Optionen für das Gerät als Ganzes, während letztere nur Optionen für die aktuelle App bzw. den aktuellen Bildschirm bieten.

So gelangen Sie zu diesen Menüs:

1. Rufen Sie das globale Menü auf, indem Sie schnell nach unten und dann nach rechts wischen.
2. Rufen Sie das lokale Menü auf, indem Sie schnell nach oben und dann nach rechts wischen.
3. Wischen Sie nach links und rechts, um zwischen den verschiedenen Optionen zu wechseln.
4. Wenn Sie die gewünschte Option ausgewählt haben, doppeltippen Sie, um diese Option auszuwählen.

Einzelheiten zu allen Optionen in den globalen und lokalen Kontextmenüs finden Sie unter [Use global and local context menus](https://support.google.com/accessibility/android/answer/6007066).

#### Webseiten durchsuchen

Sie können das lokale Kontextmenü in einem Webbrowser verwenden, um Optionen zu finden, mit denen Sie Webseiten nur anhand von Überschriften, Formularsteuerelementen oder Links navigieren oder zeilenweise navigieren können usw.

Zum Beispiel bei aktiviertem TalkBack:

1. Öffnen Sie Ihren Webbrowser.
2. Aktivieren Sie die URL-Leiste.
3. Rufen Sie eine Webseite mit vielen Überschriften auf, etwa die Startseite von bbc.co.uk. So geben Sie den Text der URL ein:
   - Wählen Sie die URL-Leiste aus, indem Sie nach links/rechts wischen, bis Sie sie erreichen, und dann doppeltippen.
   - Halten Sie Ihren Finger auf der virtuellen Tastatur gedrückt, bis Sie das gewünschte Zeichen erreichen, und heben Sie dann den Finger an, um es einzugeben. Wiederholen Sie dies für jedes Zeichen.
   - Wenn Sie fertig sind, suchen Sie die Enter-Taste und drücken Sie sie.

4. Wischen Sie nach links und rechts, um zwischen verschiedenen Elementen auf der Seite zu wechseln.
5. Wischen Sie in einer fließenden Bewegung nach oben und rechts, um das lokale Inhaltsmenü aufzurufen.
6. Wischen Sie nach rechts, bis Sie die Option „Headings and Landmarks“ finden.
7. Doppeltippen Sie, um sie auszuwählen. Nun können Sie nach links und rechts wischen, um zwischen Überschriften und ARIA-Landmarks zu wechseln.
8. Um zum Standardmodus zurückzukehren, rufen Sie das lokale Kontextmenü erneut durch Wischen nach oben und rechts auf, wählen Sie „Default“ und doppeltippen Sie dann zum Aktivieren.

> [!NOTE]
> Ausführlichere Dokumentation finden Sie unter [Get started on Android with TalkBack](https://support.google.com/accessibility/android/answer/6283677?hl=en&ref_topic=3529932).

### iOS VoiceOver

Eine mobile Version von VoiceOver ist in das iOS-Betriebssystem integriert.

Um sie zu aktivieren, öffnen Sie Ihre _Settings_-App und wählen Sie _Accessibility > VoiceOver_. Drücken Sie den Schieberegler _VoiceOver_, um ihn zu aktivieren (auf dieser Seite sehen Sie außerdem mehrere weitere Optionen zu VoiceOver).

> [!NOTE]
> Bei einigen älteren iOS-Geräten befindet sich das VoiceOver-Menü unter _Settings app_ > _General_ > _Accessibility_ > _VoiceOver_.

Sobald VoiceOver aktiviert ist, unterscheiden sich die grundlegenden Steuerungsgesten von iOS etwas:

1. Ein einzelnes Tippen bewirkt, dass das angetippte Element ausgewählt wird; Ihr Gerät spricht das angetippte Element vor.
2. Sie können auch zwischen den Elementen auf dem Bildschirm navigieren, indem Sie nach links und rechts wischen, oder indem Sie Ihren Finger über den Bildschirm bewegen, um zwischen verschiedenen Elementen zu wechseln (wenn Sie das gewünschte Element gefunden haben, können Sie Ihren Finger anheben, um es auszuwählen).
3. Um das ausgewählte Element zu aktivieren (z. B. eine ausgewählte App zu öffnen), doppeltippen Sie an einer beliebigen Stelle auf dem Bildschirm.
4. Wischen Sie mit drei Fingern, um durch eine Seite zu scrollen.
5. Tippen Sie mit zwei Fingern, um eine kontextrelevante Aktion auszuführen — beispielsweise ein Foto aufzunehmen, während Sie sich in der Kamera-App befinden.

Um VoiceOver wieder auszuschalten, navigieren Sie mithilfe der oben genannten Gesten zurück zu _Settings > General > Accessibility > VoiceOver_ und schalten den Schieberegler _VoiceOver_ wieder aus.

#### Telefon entsperren

Um das Telefon zu entsperren, müssen Sie wie gewohnt die Home-Taste drücken (oder wischen). Wenn Sie einen Passcode eingerichtet haben, können Sie jede Zahl durch Wischen/Bewegen auswählen (wie oben erläutert) und dann doppeltippen, um jede Zahl einzugeben, sobald Sie die richtige gefunden haben.

#### Den Rotor verwenden

Wenn VoiceOver aktiviert ist, steht Ihnen eine Navigationsfunktion namens Rotor zur Verfügung, mit der Sie schnell aus mehreren häufig nützlichen Optionen wählen können. So verwenden Sie sie:

1. Drehen Sie zwei Finger auf dem Bildschirm, als würden Sie an einem Einstellrad drehen. Jede Option wird laut vorgelesen, während Sie weiterdrehen. Sie können vor- und zurückdrehen, um durch die Optionen zu wechseln.
2. Wenn Sie die gewünschte Option gefunden haben:
   - Heben Sie Ihre Finger an, um sie auszuwählen.
   - Wenn es sich um eine Option handelt, deren Wert Sie verändern können (etwa Volume oder Speaking Rate), können Sie nach oben oder unten wischen, um den Wert des ausgewählten Elements zu erhöhen oder zu verringern.

Die unter dem Rotor verfügbaren Optionen sind kontextsensitiv — sie unterscheiden sich je nach App oder Ansicht, in der Sie sich befinden (siehe unten für ein Beispiel).

#### Webseiten durchsuchen

Probieren wir das Surfen im Web mit VoiceOver aus:

1. Öffnen Sie Ihren Webbrowser.
2. Aktivieren Sie die URL-Leiste.
3. Rufen Sie eine Webseite mit vielen Überschriften auf, etwa die Startseite von bbc.co.uk. So geben Sie den Text der URL ein:
   - Wählen Sie die URL-Leiste aus, indem Sie nach links/rechts wischen, bis Sie sie erreichen, und dann doppeltippen.
   - Halten Sie für jedes Zeichen Ihren Finger auf der virtuellen Tastatur gedrückt, bis Sie das gewünschte Zeichen erreichen, und heben Sie dann Ihren Finger an, um es auszuwählen. Doppeltippen Sie, um es einzugeben.
   - Wenn Sie fertig sind, suchen Sie die Enter-Taste und drücken Sie sie.

4. Wischen Sie nach links und rechts, um zwischen Elementen auf der Seite zu wechseln. Sie können auf ein Element doppeltippen, um es auszuwählen (z. B. einem Link zu folgen).
5. Standardmäßig ist die ausgewählte Rotor-Option Speaking Rate; Sie können derzeit nach oben und unten wischen, um die Sprechgeschwindigkeit zu erhöhen oder zu verringern.
6. Drehen Sie nun zwei Finger wie an einem Einstellrad über den Bildschirm, um den Rotor anzuzeigen und zwischen dessen Optionen zu wechseln. Hier sind einige Beispiele für verfügbare Optionen:
   - _Speaking Rate_: Ändern Sie die Sprechgeschwindigkeit.
   - _Containers_: Wechseln Sie zwischen verschiedenen semantischen Containern auf der Seite.
   - _Headings_: Wechseln Sie zwischen Überschriften auf der Seite.
   - _Links_: Wechseln Sie zwischen Links auf der Seite.
   - _Form Controls_: Wechseln Sie zwischen Formularsteuerelementen auf der Seite.
   - _Language_: Wechseln Sie zwischen verschiedenen Übersetzungen, falls diese verfügbar sind.

7. Wählen Sie _Headings_. Nun können Sie nach oben und unten wischen, um zwischen Überschriften auf der Seite zu wechseln.

> [!NOTE]
> Eine vollständigere Referenz zu den verfügbaren VoiceOver-Gesten und weitere Hinweise zu Barrierefreiheitstests unter iOS finden Sie in der [VoiceOver-Dokumentation von Apple](https://developer.apple.com/documentation/accessibility/voiceover/).

## Steuerungsmechanismen

In unserem Artikel über CSS- und JavaScript-Barrierefreiheit haben wir die Idee von Ereignissen betrachtet, die für einen bestimmten Steuerungsmechanismus spezifisch sind (siehe [Mouse-specific events](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#mouse-specific_events)). Zur Wiederholung: Diese verursachen Probleme bei der Barrierefreiheit, weil andere Steuerungsmechanismen die zugehörige Funktionalität nicht aktivieren können.

Als Beispiel ist das Ereignis [click](/de/docs/Web/API/Element/click_event) hinsichtlich der Barrierefreiheit gut — ein zugehöriger Event-Handler kann aufgerufen werden, indem Sie auf das Element klicken, für das der Handler festgelegt ist, zu ihm tabben und Enter/Return drücken oder es auf einem Touchscreen-Gerät antippen. Probieren Sie das folgende grundlegende Button-Beispiel aus, um zu sehen, was gemeint ist:

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

Mausspezifische Ereignisse wie [mousedown](/de/docs/Web/API/Element/mousedown_event) und [mouseup](/de/docs/Web/API/Element/mouseup_event) verursachen jedoch Probleme — ihre Event-Handler können nicht über andere als Maussteuerungen aufgerufen werden.

Das nächste Beispiel verwendet Code wie den folgenden, um Ihnen zu ermöglichen, mit Ihrer Maus eine Box über den Bildschirm zu ziehen:

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

Wenn Sie jedoch versuchen, sie mit Ihrem Finger auf einem Touchscreen-Gerät zu ziehen, funktioniert dies nicht. Um andere Steuerungsformen zu ermöglichen, müssen Sie andere, aber gleichwertige Ereignisse verwenden — beispielsweise funktionieren Touch-Ereignisse auf Touchscreen-Geräten:

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

Die aktualisierte Version funktioniert sowohl mit Maus- als auch mit Touch-Ziehen:

{{embedlivesample("multi-drag", "100%", "400")}}

> [!NOTE]
> Voll funktionsfähige Beispiele zur Implementierung verschiedener Steuerungsmechanismen finden Sie auch unter [Implementing game control mechanisms](/de/docs/Games/Techniques/Control_mechanisms).

## Responsives Design

[Responsives Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design) ist die Praxis, Layouts und andere Funktionen Ihrer Apps abhängig von Faktoren wie Bildschirmgröße und -auflösung dynamisch zu verändern, damit sie für Benutzer verschiedener Gerätetypen nutzbar und zugänglich sind.

Insbesondere müssen für Mobilgeräte die folgenden häufigen Probleme gelöst werden:

- Eignung von Layouts für Mobilgeräte. Ein mehrspaltiges Layout funktioniert beispielsweise auf einem schmalen Bildschirm nicht so gut, und die Textgröße muss möglicherweise erhöht werden, damit sie lesbar ist. Solche Probleme können durch die Erstellung eines responsiven Layouts mithilfe von Technologien wie [Media Queries](/de/docs/Web/CSS/Guides/Media_queries), [viewport](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport) und [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) gelöst werden.
- Geringe Downloadgrößen von Bildern. Im Allgemeinen benötigen Geräte mit kleinen Bildschirmen keine so großen Bilder wie ihre Desktop-Gegenstücke, und sie verwenden mit höherer Wahrscheinlichkeit langsame Netzwerkverbindungen. Daher ist es sinnvoll, Geräten mit schmalen Bildschirmen je nach Bedarf kleinere Bilder bereitzustellen. Dies können Sie mit [Techniken für responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images) umsetzen.
- Berücksichtigung hoher Auflösungen. Viele Mobilgeräte haben hochauflösende Bildschirme und benötigen daher Bilder mit höherer Auflösung, damit die Darstellung weiterhin klar und scharf bleibt. Auch hier können Sie je nach Bedarf Bilder mithilfe responsiver Bildtechniken bereitstellen. Darüber hinaus lassen sich viele Bildanforderungen mit dem Format für SVG-Vektorgrafiken erfüllen, das heute browserübergreifend gut unterstützt wird. SVG hat eine geringe Dateigröße und bleibt unabhängig von der angezeigten Größe scharf (weitere Details finden Sie unter [Including vector graphics in HTML](/de/docs/Learn_web_development/Core/Structuring_content/Including_vector_graphics_in_HTML)).

> [!NOTE]
> Wir werden hier keine vollständige Diskussion responsiver Designtechniken anbieten, da diese an anderen Stellen auf MDN behandelt werden (siehe die obigen Links).

### Spezifische Überlegungen für Mobilgeräte

Bei der Verbesserung der Barrierefreiheit von Websites auf Mobilgeräten gibt es weitere wichtige Punkte zu beachten. Wir haben hier einige aufgelistet, werden aber weitere hinzufügen, sobald sie uns einfallen.

#### Zoom nicht deaktivieren

Mithilfe von [viewport](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport) ist es möglich, den Zoom zu deaktivieren. Stellen Sie stets sicher, dass die Größenänderung aktiviert ist, und setzen Sie die Breite im {{htmlelement("head")}} auf die Breite des Geräts:

```html
<meta name="viewport" content="width=device-width; user-scalable=yes" />
```

Sie sollten `user-scalable=no` nach Möglichkeit niemals festlegen — viele Menschen sind auf Zoom angewiesen, um die Inhalte Ihrer Website sehen zu können. Daher ist es eine sehr schlechte Idee, diese Funktionalität zu entfernen. Es gibt bestimmte Situationen, in denen das Zoomen die Benutzeroberfläche beeinträchtigen könnte. Wenn Sie in solchen Fällen der Meinung sind, den Zoom deaktivieren zu müssen, sollten Sie eine andere gleichwertige Möglichkeit bereitstellen, etwa ein Steuerelement zum Erhöhen der Textgröße, das Ihre Benutzeroberfläche nicht beeinträchtigt.

#### Menüs zugänglich halten

Da der Bildschirm auf Mobilgeräten wesentlich schmaler ist, werden häufig Media Queries und andere Technologien verwendet, um das Navigationsmenü beim Anzeigen der Website auf Mobilgeräten auf ein kleines Symbol am oberen Rand des Bildschirms zu reduzieren. Dieses kann gedrückt werden, um das Menü nur bei Bedarf anzuzeigen. Dies wird üblicherweise durch ein Symbol mit „drei horizontalen Linien“ dargestellt, weshalb das Designmuster als „Hamburger-Menü“ bekannt ist.

Bei der Implementierung eines solchen Menüs müssen Sie sicherstellen, dass das Steuerelement zum Anzeigen des Menüs durch geeignete Steuerungsmechanismen zugänglich ist (normalerweise Touch auf Mobilgeräten), wie oben unter [Steuerungsmechanismen](#steuerungsmechanismen) erläutert. Außerdem muss der Rest der Seite verschoben oder auf andere Weise ausgeblendet werden, während auf das Menü zugegriffen wird, um Verwirrung bei der Navigation darin zu vermeiden.

Klicken Sie hier für ein [gutes Beispiel eines Hamburger-Menüs](https://fritz-weisshart.de/meg_men/).

## Benutzereingabe

Auf Mobilgeräten ist die Dateneingabe für Benutzer in der Regel lästiger als die entsprechende Erfahrung auf Desktop-Computern. Es ist bequemer, Text über eine Desktop- oder Laptop-Tastatur in Formulareingaben einzugeben als über eine virtuelle Touchscreen-Tastatur oder eine kleine physische mobile Tastatur.

Aus diesem Grund lohnt es sich, die benötigte Eingabemenge möglichst gering zu halten. Anstatt Benutzer beispielsweise jedes Mal ihre Berufsbezeichnung über eine gewöhnliche Texteingabe ausfüllen zu lassen, könnten Sie stattdessen ein {{htmlelement("select")}}-Menü mit den häufigsten Optionen anbieten (was auch zur Konsistenz bei der Dateneingabe beiträgt) und eine Option „Other“ bereitstellen, die ein Textfeld zur Eingabe von Ausnahmen anzeigt. Ein einfaches Beispiel für diese Idee in Aktion sehen Sie im folgenden Beispiel:

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

Es lohnt sich auch, die Verwendung von HTML-Formulareingabetypen auf mobilen Plattformen in Betracht zu ziehen, da sowohl Android als auch iOS sie gut verarbeiten.

Zum Beispiel:

- Die Typen `number`, `tel` und `email` zeigen geeignete virtuelle Tastaturen zur Eingabe von Zahlen/Telefonnummern an.
- Die Typen `time` und `date` zeigen geeignete Auswahlwerkzeuge zur Auswahl von Uhrzeiten und Daten an.

Um dies auszuprobieren, sehen Sie sich die Live-Beispiele unter [The HTML5 input types](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types) an.

Wenn Sie für Desktops eine andere Lösung bereitstellen möchten, können Sie Ihren Mobilgeräten mittels Feature Detection jederzeit unterschiedliches Markup bereitstellen. Weitere Informationen finden Sie in unserem [Artikel über Feature Detection](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection).

## Zusammenfassung

In diesem Artikel haben wir Ihnen einige Details zu häufigen mobilgerätespezifischen Barrierefreiheitsproblemen und deren Überwindung vermittelt. Außerdem haben wir Sie durch die Verwendung der gängigsten Screenreader geführt, um Sie bei Barrierefreiheitstests zu unterstützen.

## Siehe auch

- [Guidelines For Mobile Web Development](https://www.smashingmagazine.com/2012/07/guidelines-for-mobile-web-development/) — Eine Liste von Artikeln im _Smashing Magazine_, die verschiedene Techniken für mobiles Webdesign behandeln.
- [Make your site work on touch devices](https://www.creativebloq.com/javascript/make-your-site-work-touch-devices-51411644) — Nützlicher Artikel über die Verwendung von Touch-Ereignissen, damit Interaktionen auf Mobilgeräten funktionieren.

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Multimedia","Learn_web_development/Core/Accessibility/Accessibility_troubleshooting", "Learn_web_development/Core/Accessibility")}}
