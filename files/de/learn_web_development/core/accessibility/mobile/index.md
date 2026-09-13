---
title: Mobile Accessibility
slug: Learn_web_development/Core/Accessibility/Mobile
l10n:
  sourceCommit: f99d00a1c3697e26a679925954e26564e7e79b98
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Multimedia", "Learn_web_development/Core/Accessibility/Accessibility_troubleshooting", "Learn_web_development/Core/Accessibility")}}

Da der Zugriff auf das Internet über mobile Geräte heutzutage so beliebt ist und bekannte Plattformen wie iOS und Android über umfassende Barrierefreiheitswerkzeuge verfügen, ist es wichtig, die Zugänglichkeit Ihrer Webinhalte auf diesen Plattformen zu berücksichtigen. Dieser Artikel behandelt mobile spezifische Überlegungen zur Barrierefreiheit.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>, und den Barrierefreiheit Best Practices, wie sie in den vorherigen Lektionen dieses Moduls vermittelt wurden.</a></td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Vertrautheit mit Screenreadern auf iOS und Android.</li>
          <li>Verständnis für Barrierefreiheitsprobleme bei einigen Arten von Ereignissen.</li>
          <li>Spezifische Techniken für benutzerfreundlichere Eingabemechanismen auf mobilen Geräten.</li>
          <li>Wissen, dass mobile Browser spezifische Benutzerfreundlichkeitsvorteile für bestimmte <code>&lt;input&gt;</code>-Typen wie <code>number</code> oder <code>tel</code> bieten.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Barrierefreiheit auf mobilen Geräten

Der Stand der Barrierefreiheit — und die Unterstützung von Webstandards im Allgemeinen — ist auf modernen mobilen Geräten gut. Die Zeiten, in denen mobile Geräte völlig andere Webtechnologien als Desktop-Browser verwendeten und Entwickler dazu zwangen, Browser-Erkennung zu nutzen und ihnen völlig separate Webseiten zu servieren, sind längst vorbei (obwohl immer noch einige Unternehmen die Nutzung von mobilen Geräten erkennen und ihnen eine separate mobile Domain anbieten).

Heutzutage können mobile Geräte in der Regel voll funktionsfähige Websites verarbeiten, und die Hauptplattformen haben sogar integrierte Screenreader, die es sehbehinderten Nutzern ermöglichen, sie erfolgreich zu nutzen. Moderne mobile Browser unterstützen in der Regel auch gut [WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics).

Um eine Website auf mobilen Geräten zugänglich und benutzbar zu machen, müssen Sie lediglich allgemeine gute Webdesign- und Barrierefreiheit Best Practices befolgen.

Es gibt einige Ausnahmen, die auf mobilen Geräten besondere Aufmerksamkeit erfordern; die wichtigsten davon sind:

- Steuerungsmechanismen — Stellen Sie sicher, dass Schnittstellensteuerungen wie Schaltflächen auf mobilen Geräten (d.h. hauptsächlich Touchscreen) sowie auf Desktops/Laptops (hauptsächlich Maus/Tastatur) zugänglich sind.
- Benutzereingaben — Machen Sie die Anforderungen an Benutzereingaben auf mobilen Geräten so schmerzlos wie möglich (z.B. in Formularen, halten Sie das Tippen auf ein Minimum).
- Responsives Design — Stellen Sie sicher, dass Layouts auf mobilen Geräten funktionieren, Bilddownloadgrößen beibehalten werden und an die Bereitstellung von Bildern für hochauflösende Bildschirme gedacht wird.

## Zusammenfassung des Screenreader-Testens auf Android und iOS

Die gängigsten mobilen Plattformen verfügen über voll funktionsfähige Screenreader. Diese funktionieren ähnlich wie Desktop-Screenreader, mit dem Unterschied, dass sie hauptsächlich durch Berührungsgesten statt durch Tastenkombinationen bedient werden.

Betrachten wir die beiden wichtigsten: TalkBack auf Android und VoiceOver auf iOS.

### Android TalkBack

Der TalkBack Screenreader ist im Android-Betriebssystem integriert.

Um ihn zu aktivieren, finden Sie heraus, welches Telefonmodell und welche Android-Version Sie haben, und suchen Sie dann, wo sich das TalkBack-Menü befindet. Es unterscheidet sich häufig stark zwischen Android-Versionen und sogar zwischen verschiedenen Telefonmodellen. Einige Telefonhersteller (z.B. Samsung) haben TalkBack in neueren Telefonen nicht einmal mehr eingebaut und stattdessen auf ihren eigenen Screenreader gesetzt.

Wenn Sie das TalkBack-Menü gefunden haben, drücken Sie den Schiebeschalter, um TalkBack zu aktivieren. Befolgen Sie alle zusätzlichen Bildschirmanweisungen, die Ihnen präsentiert werden.

Wenn TalkBack aktiviert ist, sind die grundlegenden Steuerungen Ihres Android-Geräts etwas anders. Zum Beispiel:

1. Durch einmaliges Tippen auf eine App wird sie ausgewählt, und das Gerät wird vorlesen, was die App ist.
2. Durch Wischen nach links und rechts wechseln Sie zwischen Apps oder Schaltflächen/Steuerungen, wenn Sie sich in einer Steuerleiste befinden. Das Gerät liest jede Option vor.
3. Durch Doppeltippen wird die App geöffnet/die Option ausgewählt.
4. Sie können auch "durch Berührung erkunden" — halten Sie Ihren Finger auf dem Bildschirm und ziehen Sie ihn herum, und Ihr Gerät liest die verschiedenen Apps/Elemente vor, über die Sie fahren.

Wenn Sie TalkBack ausschalten möchten:

1. Navigieren Sie zurück zum TalkBack-Menübildschirm (verwenden Sie die derzeit aktivierten verschiedenen Gesten).
2. Navigieren Sie zum Schiebeschalter und aktivieren Sie ihn, um ihn auszuschalten.

> [!NOTE]
> Sie können jederzeit zu Ihrem Startbildschirm gelangen, indem Sie in einer flüssigen Bewegung nach oben und links wischen. Wenn Sie mehr als einen Startbildschirm haben, können Sie zwischen ihnen wechseln, indem Sie mit zwei Fingern nach links und rechts wischen.

Eine vollständigere Liste der TalkBack-Gesten finden Sie unter [TalkBack-Gesten verwenden](https://support.google.com/accessibility/android/answer/6151827).

#### Telefon entsperren

Wenn TalkBack aktiviert ist, unterscheidet sich das Entsperren des Telefons etwas.

Sie können mit zwei Fingern von unten auf dem Sperrbildschirm nach oben wischen. Wenn Sie einen Passcode oder ein Muster zum Entsperren Ihres Geräts festgelegt haben, werden Sie zum entsprechenden Eingabebildschirm weitergeleitet, um diesen einzugeben.

Sie können auch durch Berührung erkunden, um die _Entsperren_-Taste unten in der Mitte des Bildschirms zu finden, und dann doppeltippen.

#### Globale und lokale Menüs

TalkBack ermöglicht Ihnen den Zugriff auf globale und lokale Kontextmenüs, unabhängig davon, wo Sie sich auf dem Gerät befinden. Ersteres bietet globale Optionen im Zusammenhang mit dem gesamten Gerät, während letzteres Optionen bietet, die sich nur auf die aktuelle App/den aktuellen Bildschirm beziehen, in dem Sie sich befinden.

Um zu diesen Menüs zu gelangen:

1. Greifen Sie auf das globale Menü zu, indem Sie schnell nach unten und dann rechts wischen.
2. Greifen Sie auf das lokale Menü zu, indem Sie schnell nach oben und dann rechts wischen.
3. Wischen Sie nach links und rechts, um zwischen den verschiedenen Optionen zu wechseln.
4. Sobald Sie die gewünschte Option ausgewählt haben, doppelklicken Sie, um diese Option auszuwählen.

Details zu allen verfügbaren Optionen im globalen und lokalen Kontextmenü finden Sie unter [Globale und lokale Kontextmenüs verwenden](https://support.google.com/accessibility/android/answer/6007066).

#### Surfen auf Webseiten

Sie können das lokale Kontextmenü in einem Webbrowser verwenden, um Optionen zu finden, mit denen Sie Webseiten nur über die Überschriften, Formularsteuerelemente oder Links navigieren oder zeilenweise navigieren können, usw.

Beispielsweise bei eingeschaltetem TalkBack:

1. Öffnen Sie Ihren Webbrowser.
2. Aktivieren Sie die URL-Leiste.
3. Geben Sie eine Webseite ein, die eine Reihe von Überschriften enthält, wie z.B. die Startseite von bbc.co.uk. Um den Text der URL einzugeben:
   - Wählen Sie die URL-Leiste durch Wischen nach links/rechts, bis Sie dazu gelangen, und doppelklicken Sie.
   - Halten Sie Ihren Finger auf der virtuellen Tastatur, bis Sie das gewünschte Zeichen erhalten, und lassen Sie dann Ihren Finger los, um es zu tippen. Wiederholen Sie dies für jedes Zeichen.
   - Wenn Sie fertig sind, finden Sie die Eingabetaste und drücken Sie sie.

4. Wischen Sie nach links und rechts, um zwischen verschiedenen Elementen auf der Seite zu wechseln.
5. Wischen Sie nach oben und rechts in einer flüssigen Bewegung, um das lokale Inhaltsmenü zu öffnen.
6. Wischen Sie nach rechts, bis Sie die Option "Überschriften und Landmarken" finden.
7. Doppeltippen Sie, um es auszuwählen. Jetzt können Sie nach links und rechts wischen, um zwischen Überschriften und ARIA-Landmarken zu wechseln.
8. Um zum Standardmodus zurückzukehren, öffnen Sie das lokale Kontextmenü erneut, indem Sie nach oben und rechts wischen, wählen Sie "Standard" und doppeltippen Sie, um zu aktivieren.

> [!NOTE]
> Siehe [Erste Schritte auf Android mit TalkBack](https://support.google.com/accessibility/android/answer/6283677?hl=en&ref_topic=3529932) für umfassendere Dokumentation.

### iOS VoiceOver

Eine mobile Version von VoiceOver ist im iOS-Betriebssystem integriert.

Um sie zu aktivieren, gehen Sie zur App _Einstellungen_ und wählen Sie _Bedienungshilfen > VoiceOver_. Drücken Sie den _VoiceOver_-Schieber, um sie zu aktivieren (Sie sehen auch mehrere andere Optionen, die mit VoiceOver zusammenhängen, auf dieser Seite).

> [!NOTE]
> Einige ältere iOS-Geräte haben das VoiceOver-Menü in _Einstellungen_ > _Allgemein_ > _Bedienungshilfen_ > _VoiceOver_.

Einmal aktiviert, sind die grundlegenden Steuerungsgesten von iOS mit VoiceOver etwas anders:

1. Einmaliges Tippen lässt das Element, auf das Sie tippen, auswählen; Ihr Gerät wird das Element, auf das Sie getippt haben, vorlesen.
2. Sie können auch die Elemente auf dem Bildschirm navigieren, indem Sie nach links und rechts wischen, um zwischen ihnen zu wechseln, oder indem Sie Ihren Finger um den Bildschirm schieben, um zwischen verschiedenen Elementen zu wechseln (wenn Sie das gewünschte Element gefunden haben, können Sie Ihren Finger wegnehmen, um es auszuwählen).
3. Um das ausgewählte Element zu aktivieren (z.B. eine ausgewählte App zu öffnen), doppeltippen Sie irgendwo auf dem Bildschirm.
4. Wischen Sie mit drei Fingern, um durch eine Seite zu scrollen.
5. Tippen Sie mit zwei Fingern, um eine kontextbezogene Aktion auszuführen — z.B. ein Foto in der Kamera-App aufzunehmen.

Um es wieder auszuschalten, navigieren Sie zurück zu _Einstellungen > Allgemein > Bedienungshilfen > VoiceOver_ unter Verwendung der oben angegebenen Gesten und schalten Sie den _VoiceOver_-Schieber wieder aus.

#### Telefon entsperren

Um das Telefon zu entsperren, müssen Sie die Home-Taste drücken (oder wischen) wie gewohnt. Wenn Sie einen Passcode festgelegt haben, können Sie jede Nummer wählen, indem Sie wischen/schieben (wie oben beschrieben) und dann doppeltippen, um die jeweilige Nummer einzugeben, wenn Sie die richtige gefunden haben.

#### Den Rotor verwenden

Wenn VoiceOver aktiviert ist, steht Ihnen ein Navigationswerkzeug namens Rotor zur Verfügung, mit dem Sie schnell aus einer Vielzahl von nützlichen Optionen wählen können. Um es zu verwenden:

1. Drehen Sie zwei Finger über den Bildschirm, als würden Sie einen Knopf drehen. Jede Option wird vorgelesen, während Sie weiter drehen. Sie können vor- und zurückdrehen, um die Optionen zu durchlaufen.
2. Sobald Sie die gewünschte Option gefunden haben:
   - Lassen Sie Ihre Finger los, um sie auszuwählen.
   - Wenn es sich um eine Option handelt, bei der Sie den Wert ändern können (z.B. Volume oder Sprachgeschwindigkeit), können Sie nach oben oder unten wischen, um den Wert des ausgewählten Elements zu erhöhen oder zu verringern.

Die im Rotor verfügbaren Optionen sind kontextabhängig — sie werden je nach verwendeter App oder Ansicht unterschiedlich sein (siehe unten für ein Beispiel).

#### Surfen auf Webseiten

Versuchen wir es mit dem Websuchen mit VoiceOver:

1. Öffnen Sie Ihren Webbrowser.
2. Aktivieren Sie die URL-Leiste.
3. Geben Sie eine Webseite ein, die eine Reihe von Überschriften enthält, wie z.B. die Startseite von bbc.co.uk. Um den Text der URL einzugeben:
   - Wählen Sie die URL-Leiste durch Wischen nach links/rechts, bis Sie dazu gelangen, und dann doppeltippen.
   - Für jedes Zeichen, halten Sie Ihren Finger auf der virtuellen Tastatur, bis Sie das Zeichen erhalten, das Sie möchten, und lassen Sie dann Ihren Finger los, um es auszuwählen. Doppeltippen Sie, um es zu tippen.
   - Wenn Sie fertig sind, finden Sie die Eingabetaste und drücken Sie sie.

4. Wischen Sie nach links und rechts, um zwischen Elementen auf der Seite zu wechseln. Sie können ein Element durch Doppeltippen auswählen (z.B. einem Link folgen).
5. Standardmäßig wird die ausgewählte Rotoroption die Sprachgeschwindigkeit sein; Sie können aktuell nach oben und unten wischen, um die Sprachgeschwindigkeit zu erhöhen oder zu verringern.
6. Drehen Sie jetzt zwei Finger über den Bildschirm wie bei einem Drehknopf, um den Rotor anzuzeigen und zwischen seinen Optionen zu wechseln. Hier sind einige Beispiele für die verfügbaren Optionen:
   - _Sprachgeschwindigkeit_: Sprachgeschwindigkeit ändern.
   - _Container_: Zwischen verschiedenen semantischen Containern auf der Seite wechseln.
   - _Überschriften_: Zwischen den Überschriften auf der Seite wechseln.
   - _Links_: Zwischen den Links auf der Seite wechseln.
   - _Formular-Steuerelemente_: Zwischen Formularsteuerelementen auf der Seite wechseln.
   - _Sprache_: Zwischen verschiedenen Übersetzungen wechseln, falls verfügbar.

7. Wählen Sie _Überschriften_. Jetzt können Sie nach oben und unten wischen, um zwischen den Überschriften auf der Seite zu wechseln.

> [!NOTE]
> Für eine umfassendere Referenz, die die verfügbaren VoiceOver-Gesten abdeckt, und weitere Hinweise zum Testen der Barrierefreiheit auf iOS, siehe [Apples VoiceOver-Dokumentation](https://developer.apple.com/documentation/accessibility/voiceover/).

## Steuerungsmechanismen

In unserem Artikel zu Barrierefreiheit in CSS und JavaScript haben wir das Konzept von ereignisbasierenden Steuermechanismen analysiert, die spezifisch für eine bestimmte Art von Steuerungsmechanismen sind (siehe [Mouse-spezifische Ereignisse](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#mouse-specific_events)). Zur Wiederholung, diese verursachen Barrierefreiheitsprobleme, da andere Steuermechanismen die zugehörige Funktionalität nicht aktivieren können.

Ein Beispiel: Das [click](/de/docs/Web/API/Element/click_event)-Ereignis ist in Bezug auf Barrierefreiheit gut – ein zugehöriger Ereignis-Handler kann durch Klicken auf das Element, auf dem sich der Handler befindet, durch Tabben zu ihm und Drücken von Enter/Return oder durch Antippen auf einem Touchscreen-Gerät aktiviert werden. Probieren Sie das folgende einfache Schaltflächenbeispiel aus, um zu sehen, was wir meinen:

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

Mauseigene Ereignisse, wie [mousedown](/de/docs/Web/API/Element/mousedown_event) und [mouseup](/de/docs/Web/API/Element/mouseup_event), schaffen jedoch Probleme, weil ihre Ereignis-Handler mit nicht-mausabhängigen Steuerungen nicht ausgelöst werden können.

Das nächste Beispiel setzt Code wie den folgenden ein, um es Ihnen zu ermöglichen, ein Feld mit der Maus über den Bildschirm zu ziehen:

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

Wenn Sie jedoch versuchen, es mit dem Finger auf einem Touchscreen-Gerät zu ziehen, funktioniert es nicht. Um andere Steuerungsformen zu aktivieren, müssen Sie andere, jedoch gleichwertige Ereignisse verwenden — zum Beispiel funktionieren Touch-Ereignisse auf Touchscreen-Geräten:

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

Die aktualisierte Version wird mit sowohl Maus- als auch Touch-Ziehen funktionieren:

{{embedlivesample("multi-drag", "100%", "400")}}

> [!NOTE]
> Sie können auch voll funktionsfähige Beispiele ansehen, die zeigen, wie verschiedene Steuermechanismen implementiert werden können, unter [Implementing game control mechanisms](/de/docs/Games/Techniques/Control_mechanisms).

## Responsives Design

[Responsive Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design) ist die Praxis, Ihre Layouts und andere Eigenschaften Ihrer Apps dynamisch ändern zu lassen, abhängig von Faktoren wie Bildschirmgröße und Auflösung, damit sie für Benutzer verschiedener Gerätetypen nutzbar und zugänglich sind.

Insbesondere die häufigsten Probleme, die auf mobilen Geräten angegangen werden müssen, sind:

- Eignung der Layouts für mobile Geräte. Ein mehrspaltiges Layout wird zum Beispiel auf einem schmalen Bildschirm nicht so gut funktionieren, und die Textgröße muss möglicherweise erhöht werden, damit sie lesbar ist. Solche Probleme können gelöst werden, indem ein responsives Layout mit Technologien wie [Media Queries](/de/docs/Web/CSS/Guides/Media_queries), [Viewport](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport), und [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) erstellt wird.
- Bewahrung der Bildgrößen. Im Allgemeinen benötigen Geräte mit kleinem Bildschirm keine so großen Bilder wie ihre Desktop-Pendants, und sie sind eher auf langsamen Netzwerkverbindungen. Daher ist es sinnvoll, kleinere Bilder für Geräte mit schmalem Bildschirm bereitzustellen. Sie können dies mit [Techniken für responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images) handhaben.
- Berücksichtigung hoher Auflösungen. Viele mobile Geräte haben hochauflösende Bildschirme und benötigen daher höher aufgelöste Bilder, damit das Display weiterhin scharf und klar aussieht. Auch hier können Sie Bilder entsprechend mit responsiven Bildtechniken bereitstellen. Darüber hinaus können viele Bildanforderungen mit dem SVG-Vektorformat erfüllt werden, das heute gut über die Browser hinweg unterstützt wird. SVG hat eine kleine Dateigrößer und bleibt unabhängig von der Darstellungsgröße scharf (siehe [Einbindung von Vektorgrafiken in HTML](/de/docs/Learn_web_development/Core/Structuring_content/Including_vector_graphics_in_HTML) für weitere Details).

> [!NOTE]
> Wir werden hier keine vollständige Diskussion der responsiven Designtechniken bieten, da sie an anderen Stellen auf MDN erörtert werden (siehe die obigen Links).

### Spezifische mobile Überlegungen

Es gibt weitere wichtige Punkte, die bei der barrierefreien Gestaltung von Websites auf mobilen Geräten zu berücksichtigen sind. Wir haben hier einige aufgelistet, aber wir werden mehr hinzufügen, wenn wir auf sie kommen.

#### Zoom nicht deaktivieren

Mit [Viewport](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport) ist es möglich, den Zoom zu deaktivieren. Stellen Sie bei der Größenänderung immer sicher, dass sie aktiviert ist, und setzen Sie die Breite im {{htmlelement("head")}}-Element auf die Breite des Geräts:

```html
<meta name="viewport" content="width=device-width; user-scalable=yes" />
```

Sie sollten niemals `user-scalable=no` wenn möglich setzen — viele Menschen sind darauf angewiesen, zu zoomen, um den Inhalt Ihrer Website sehen zu können, daher ist das Entfernen dieser Funktionalität wirklich keine gute Idee. Es gibt bestimmte Situationen, in denen das Zoomen das UI-Layout beschädigen könnte; in solchen Fällen, wenn Sie das Gefühl haben, dass Sie das Zoomen deaktivieren müssen, sollten Sie eine andere Art von Äquivalent anbieten, z.B. eine Steuerung zur Erhöhung der Textgröße auf eine Weise, die Ihre Benutzeroberfläche nicht stört.

#### Menüs zugänglich halten

Da der Bildschirm auf mobilen Geräten so viel schmaler ist, ist es sehr häufig, Media Queries und andere Technologien zu verwenden, um das Navigationsmenü auf ein kleines Symbol am oberen Rand des Displays schrumpfen zu lassen — das bei Bedarf gedrückt werden kann, um das Menü anzuzeigen — wenn die Site auf mobilen Geräten angesehen wird. Dies wird allgemein durch ein "drei horizontale Linien"-Symbol dargestellt und das Designmuster wird folglich als "Hamburger-Menü" bezeichnet.

Beim Implementieren eines solchen Menüs müssen Sie sicherstellen, dass das Steuerungselement zum Anzeigen geeignet für die Steuermöglichkeiten (normalerweise Touch für mobile Geräte) zugänglich ist, wie im oben erwähnten Abschnitt [Steuerungsmechanismen](#steuerungsmechanismen) oben, und dass der Rest der Seite während des Zugangs zum Menü aus dem Weg geräumt oder irgendwie ausgeblendet wird, um Verwirrung beim Navigieren zu vermeiden.

Klicken Sie hier für ein [gutes Beispiel für ein Hamburger-Menü](https://fritz-weisshart.de/meg_men/).

## Benutzereingaben

Auf mobilen Geräten ist die Eingabe von Daten tendenziell ärgerlicher für die Benutzer als das entsprechende Erlebnis auf Desktop-Computern. Es ist bequemer, Text auf einer Desktop- oder Laptop-Tastatur als auf einer Touchscreen-Virtuellen Tastatur oder einer winzigen mobilen physischen Tastatur in Formulareingaben zu tippen.

Daher lohnt es sich, die Menge an benötigtem Tippen zu minimieren. Als Beispiel, anstatt die Benutzer dazu zu bringen, jedes Mal ihre Berufsbezeichnung über eine reguläre Texteingabe einzugeben, könnten Sie einen {{htmlelement("select")}}-Menü mit den häufigsten Optionen anbieten (was auch bei der Konsistenz der Dateneingabe hilft) und eine "Andere"-Option, die ein Texteingabefeld für außergewöhnliche Einträge anzeigt. Sie können ein einfaches Beispiel dieser Idee in Aktion im folgenden Beispiel sehen:

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

Es lohnt sich auch, die Verwendung von HTML-Formulareingabetypen auf mobilen Plattformen in Betracht zu ziehen, da sie gut damit umgehen — sowohl Android als auch iOS.

Zum Beispiel:

- Typen `number`, `tel` und `email` zeigen geeignete virtuelle Tastaturen zur Eingabe von Zahlen/Telefonnummern.
- Typen `time` und `date` zeigen geeignete Auswahlmöglichkeiten zur Auswahl von Zeiten und Daten.

Um diese auszuprobieren, sehen Sie sich die Live-Beispiele bei [Die HTML5-Eingabetypen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types) an.

Wenn Sie eine andere Lösung für Desktops bereitstellen möchten, könnten Sie Ihrem mobilen Gerät auch ein anderes Markup mit Feature-Erkennung bereitstellen. Schauen Sie sich unseren [Artikel zur Merkmals-Erkennung](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection) für weitere Informationen an.

## Zusammenfassung

In diesem Artikel haben wir Ihnen Details zu häufigen mobil-spezifischen Barrierefreiheitsproblemen und wie man sie überwindet bereitgestellt. Wir haben Sie auch durch die Nutzung der gängigsten Screenreader geführt, um Ihnen bei der Barrierefreiheitsprüfung zu helfen.

## Siehe auch

- [Richtlinien für die mobile Webentwicklung](https://www.smashingmagazine.com/2012/07/guidelines-for-mobile-web-development/) — Eine Sammlung von Artikeln in _Smashing Magazine_, die verschiedene Techniken für das mobile Webdesign abdecken.
- [Machen Sie Ihre Seite auf Touch-Geräten funktionsfähig](https://www.creativebloq.com/javascript/make-your-site-work-touch-devices-51411644) — Nützlicher Artikel über die Nutzung von Touch-Ereignissen, um Interaktionen auf mobilen Geräten zu ermöglichen.

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Multimedia", "Learn_web_development/Core/Accessibility/Accessibility_troubleshooting", "Learn_web_development/Core/Accessibility")}}
