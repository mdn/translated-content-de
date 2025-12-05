---
title: Verwendung von Interest-Invokern
slug: Web/API/Popover_API/Using_interest_invokers
l10n:
  sourceCommit: e00212a2a707a57b49b58b37a6a6c978aaef2bbd
---

{{DefaultAPISidebar("Popover API")}}

**Interest-Invoker** bieten einen Mechanismus zum Aktualisieren einer Benutzeroberfläche oder zum Ausführen von benutzerdefiniertem Code, wenn ein Benutzer "Interesse zeigt" oder das Interesse an einem Element "verliert" (zum Beispiel durch Hovern oder Nichtmehr-Hovern). Sie werden am häufigsten verwendet, um Popover anzuzeigen und zu verbergen. Dieser Leitfaden erklärt die Konzepte hinter Interest-Invokern, welche Anwendungsfälle sie haben und wie man sie verwendet.

## Konzepte

Die Popover API bietet die Funktionalität, ein Popover anzuzeigen, wenn ein zugehöriges Steuerelement (der **Invoker**) aktiviert wird, beispielsweise wenn darauf geklickt wird. Diese Funktion ist nützlich, um UI-Elemente wie Modale und Informationsfenster anzuzeigen. Sie können [Popover deklarativ erstellen](/de/docs/Web/API/Popover_API/Using#creating_declarative_popovers), indem Sie das [`popover`](/de/docs/Web/HTML/Reference/Elements/button#popover)-Attribut zusammen mit entweder [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) oder [`commandfor`](/de/docs/Web/HTML/Reference/Elements/button#commandfor) verwenden.

Zusätzlich zu diesen aktivierungsbasierten Popovern besteht häufig der Bedarf, ein Popover anzuzeigen, wenn ein Steuerelement gehovt oder fokussiert wird – Interaktionen, die Nutzerinteresse anzeigen. Viele soziale Netzwerke und Community-Seiten lassen Benutzer beispielsweise über einen Link zu einer Profilseite einer Person oder Gruppe schweben, um ein Popover mit weiteren Informationen anzuzeigen. Diese schnelle Vorschau hilft Benutzern zu entscheiden, ob sie die vollständige Seite besuchen möchten. Solche Popover können auch schnelle Aktionen wie "Folgen" oder "Gruppe abonnieren" enthalten, die es Benutzern ermöglichen, eine Aktion durchzuführen, ohne ihren aktuellen Kontext zu verlieren.

Interest-Invoker ermöglichen es dem Browser, ein interessebasiertes Popover-Verhalten auf konsistente und zugängliche Weise bereitzustellen, ohne JavaScript zu erfordern. Der Browser bestimmt, wann ein Benutzer Interesse an einem Element zeigt und daher, wann eine Aktion ausgeführt werden sollte. "Interesse zeigen" tritt im Allgemeinen auf, wenn ein Benutzer ein Element hovt, fokussiert oder lang drückt (die genaue Natur des "Interesses" kann je nach Browser variieren), und "Interesse verlieren" geschieht im Allgemeinen, wenn der Benutzer die Interaktion mit dem Element beendet.

Der Browser löst auch Ereignisse aus, wenn Interesse gewonnen oder verloren wird, sodass Sie benutzerdefinierten Code als Reaktion darauf ausführen können. Zusätzlich umfasst diese Funktion CSS-Eigenschaften und -Selektoren zum Stylen von Elementen basierend auf Interesse.

> [!NOTE]
> Auf Geräten mit einer verfügbaren <kbd>Esc</kbd>-Taste wird durch Drücken dieser Taste jegliches Interesse abgebrochen. Dies bietet einen allgemeinen Fluchtmechanismus, wenn die Interaktion ablenkend oder unerwünscht wird.

Sie können Interest-Invoker auch verwenden, um benutzerdefinierten Code in [Nicht-Popover-Fällen](#verwenden_von_interest-invokern_ohne_popover) auszuführen. Dieser Leitfaden konzentriert sich jedoch hauptsächlich auf Popover, da diese die häufigste Verwendung von Interest-Invokern sind.

## Erstellung eines Interest-Invokers

Das deklarative Erstellen eines Interest-Invokers erfordert die folgenden zwei Anforderungen:

- Ein **Invoker-Element**: Dies ist das Element, mit dem der Benutzer interagiert, um Interesse anzuzeigen und eine Aktion auszulösen, z. B. das Anzeigen oder Verbergen eines Popovers. Das Invoker-Element muss ein [`interestfor`](/de/docs/Web/HTML/Reference/Elements/a#interestfor)-Attribut haben, dessen Wert die `id` des Ziel-Elements ist. Das Invoker-Element kann ein HTML-{{htmlelement("a")}}, {{htmlelement("button")}} oder {{htmlelement("area")}}-Element oder ein SVG-[`<a>`](/de/docs/Web/SVG/Reference/Element/a)-Element sein.

- Ein **Ziel-Element**: Dies ist das Element, das betroffen oder gesteuert wird, wenn Interesse gewonnen oder verloren wird. Das Ziel-Element muss eine `id` haben und kann nahezu jeden Elementtyp darstellen. Indem Sie diesem Element ein `popover`-Attribut geben, wird es zu einem Popover.

  > [!NOTE]
  > Sie können das Ziel-Element auch programmgesteuert festlegen, indem Sie die `interestForElement`-DOM-Eigenschaft des Invoker-Elements auf eine Referenz auf das Ziel-Element setzen. Weitere Informationen finden Sie im Abschnitt [Die Interest-Invoker JavaScript API](#the_interest_invoker_javascript_api) später in diesem Leitfaden.

Schauen wir uns ein einfaches Beispiel an. Hier ist das **Invoker-Element** ein Link, und das **Ziel-Element** ist ein Absatz mit dem `popover`-Attribut.

```css hidden live-sample___basic-interest-invoker live-sample___interest-invoker-popover-interaction live-sample___interest-invoker-styling live-sample___interest-invoker-api live-sample___non-popover live-sample___link-preview-popover
.no-interest-invokers body::before {
  content: "Your browser doesn't support interest invokers.";
  background-color: wheat;
  display: block;
  padding: 10px 0;
  width: 100%;
  text-align: center;
}
```

```js hidden live-sample___basic-interest-invoker live-sample___interest-invoker-popover-interaction live-sample___interest-invoker-styling live-sample___interest-invoker-api live-sample___non-popover live-sample___link-preview-popover
const supported =
  HTMLButtonElement.prototype.hasOwnProperty("interestForElement");
if (!supported) {
  document.querySelector("html").classList.add("no-interest-invokers");
}
```

```html live-sample___basic-interest-invoker
<p>Some text with a <a href="#" interestfor="mypopover">link</a>.</p>
<p id="mypopover" popover>A short preview with some quick info</p>
```

Das Setzen des `popover`-Attributs auf das Ziel-Element führt dazu, dass es verborgen wird (über {{cssxref("display", "display: none")}}) und auf dem Bildschirm zentriert angezeigt wird. Interesse zeigen am Invoker-Element (dem Link) lässt das Popover erscheinen.

Das wird wie folgt dargestellt. Versuchen Sie, mit dem Link zu interagieren:

{{embedlivesample("basic-interest-invoker", "100%", "150")}}

Beachten Sie, wie das Popover erscheint, wenn der Link gehovt, fokussiert oder lang gedrückt wird, und verschwindet, wenn die Interaktion endet. Wenn der Link stattdessen aktiviert wird, z. B. mit einem Mausklick, verhält er sich wie ein normaler Link – außer dass er in diesem Beispiel nirgends hinführt.

Der Wert des `popover`-Attributs beeinflusst das Verhalten des Popovers in diesem Beispiel nicht. Er wird jedoch wichtig, wenn Sie Interesse-Invoker-Popover mit regulären Popovern kombinieren, wie im nächsten Abschnitt gezeigt.

## Kombination von Interest-Invokern mit Aktivierungs-basierten Popovern

Sie können Interest-Invoker-Elemente mit regulären Popovern auf demselben Steuerelement kombinieren. Im folgenden Beispiel ist ein {{htmlelement("button")}}-Element als Interest-Invoker mit dem `interestfor`-Attribut eingerichtet, was bedeutet, dass es ein Tooltip anzeigt, wenn der Benutzer Interesse daran zeigt. Wenn der Button geklickt wird, wird ein anderes Popover angezeigt oder verborgen, auf das mit dem `commandfor`-Attribut verwiesen wird. Das [`command`](/de/docs/Web/HTML/Reference/Elements/button#command)-Attribut ist auf `toggle-popover` gesetzt, sodass der Button mehrfach gedrückt werden kann, um das Popover zwischen seinen gezeigten und verborgenen Zuständen umzuschalten.

```css hidden live-sample___interest-invoker-popover-interaction
#mytooltip {
  position-area: right;
}

#myinfobox {
  position-area: bottom;
}
```

```html live-sample___interest-invoker-popover-interaction
<p>
  Some content including a
  <button
    interestfor="mytooltip"
    commandfor="myinfobox"
    command="toggle-popover">
    button
  </button>
</p>
<p id="mytooltip" popover="hint">A hover tooltip</p>
<p id="myinfobox" popover>
  An infobox that also contains some control buttons<br />
  <button>Button 1</button> <button>Button 2</button>
</p>
```

Das wird wie folgt dargestellt:

{{embedlivesample("interest-invoker-popover-interaction", "100%", "150")}}

Sie können Interesse am Button zeigen, um das Tooltip anzuzeigen, und den Button klicken, um das Info-Fenster zu offenbaren. Beachten Sie, dass die `popover`-Werte hier wichtig sind – das Tooltip-Popover ist auf [`popover="hint"`](/de/docs/Web/API/Popover_API/Using#using_hint_popover_state) gesetzt, während das Info-Fenster nur auf `popover` (äquivalent zu `popover="auto"`) gesetzt ist. Dies erlaubt es dem Tooltip, sichtbar zu bleiben, selbst wenn das Info-Fenster angezeigt wird. Wenn beide Popover auf `auto` gesetzt wären, könnten Sie das Tooltip und das Info-Fenster nicht gleichzeitig sehen. In einer UI ist es nützlich, mehrere Tooltips anzeigen zu können, ohne Teile der UI zu verbergen, die Sie bereits geöffnet haben.

## Styling von Interest-Invokern

Beim Styling von Popovern, die mit Interest-Invokern verwendet werden, können Sie dieselben Styling-Techniken wie bei jedem anderen Popover verwenden (siehe [Styling von Popovern](/de/docs/Web/API/Popover_API/Using#styling_popovers)), einschließlich [Verwendung von Ankerpositionierungen](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning), um Popover relativ zu ihren Invokern zu positionieren, und [Animieren von Popovern](/de/docs/Web/API/Popover_API/Using#animating_popovers).

Es gibt jedoch einige CSS-Features, die spezifisch für Interest-Invoker sind:

- Die {{cssxref("interest-delay")}}-Shorthand-Eigenschaft und ihre verwandten {{cssxref("interest-delay-start")}}- und {{cssxref("interest-delay-end")}}-Langformen: Diese können verwendet werden, um eine Verzögerung zwischen dem Erhalt oder Verlust des Interesses seitens des Benutzers und dem Agieren des Browsers auf diese Änderung hinzuzufügen – zum Beispiel, um ein Popover anzuzeigen oder zu verbergen.
- Die {{cssxref(":interest-source")}}- und {{cssxref(":interest-target")}}-Pseudoklassen: Diese können verwendet werden, um Stile auf das Interest-Invoker-Element und dessen zugehöriges Ziel-Element nur dann anzuwenden, wenn Interesse angezeigt wird.

Schauen wir uns ein einfaches Beispiel an, das zeigt, wie diese Features funktionieren.

Wir haben zwei Schaltflächen und ein Tooltip definiert. Das Tooltip wird angezeigt oder verborgen, wenn der Benutzer Interesse an einer der Schaltflächen zeigt oder verliert.

```html live-sample___interest-invoker-styling
<p>
  <button interestfor="mytooltip">Button 1</button>
  <button interestfor="mytooltip">Button 2</button>
</p>
<p id="mytooltip" popover="hint">A hover tooltip</p>
```

Im CSS haben wir eine `interest-delay` von `1s 2s` auf dem `<button>` gesetzt – dies erzeugt eine Verzögerung von 1 Sekunde, bevor das Tooltip erscheint, wenn der Benutzer Interesse zeigt, und eine Verzögerung von 2 Sekunden, bevor es verschwindet, wenn der Benutzer das Interesse verliert. Wir haben auch den `button:interest-source`-Selektor verwendet, um die {{cssxref("background-color")}} der Schaltflächen auf `orange` zu ändern, wenn Interesse angezeigt wird.

```css live-sample___interest-invoker-styling
button {
  interest-delay: 1s 2s;
}

button:interest-source {
  background-color: orange;
}
```

Als nächstes haben wir die `:interest-source`-Pseudoklasse mit der {{cssxref(":has()")}}-Pseudoklasse kombiniert, um `interest-delay-start: 0s` auf alle Schaltflächen im Absatz anzuwenden, aber nur, wenn der Absatz eine Schaltfläche enthält, auf die Interesse gezeigt wird (also eine Schaltfläche, die `button:interest-source` entspricht). Dies ist eine nützliche Technik – es würde eine ärgerliche Nutzererfahrung schaffen, wenn das Popover sofort erscheint, wenn auf irgendeine Schaltfläche Interesse angezeigt wird, aber nachdem der Benutzer Interesse an einer Schaltfläche gezeigt hat, ist es praktisch, schnell zwischen verschiedenen Popovern wechseln zu können.

```css live-sample___interest-invoker-styling
p:has(button:interest-source) button {
  interest-delay-start: 0s;
}
```

Wir haben auch einen {{cssxref("position-area")}} von `bottom` auf dem Tooltip festgelegt, damit es unter der Schaltfläche erscheint. Dies ist möglich, weil das Zuordnen eines Popovers zu seinem Interest-Invoker automatisch eine implizite Ankerreferenz zwischen ihnen erstellt (siehe [Anchor-Positionierung von Popovern](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning) für mehr Details).

```css live-sample___interest-invoker-styling
#mytooltip {
  position-area: bottom;
}
```

Schließlich haben wir den `#mytooltip:interest-target`-Selektor verwendet, um eine gestrichelte Umrandung auf dem Popover zu setzen, wenn Interesse angezeigt wird.

```css live-sample___interest-invoker-styling
#mytooltip:interest-target {
  border-style: dashed;
}
```

Das wird wie folgt dargestellt:

{{embedlivesample("interest-invoker-styling", "100%", "150")}}

Versuchen Sie, Interesse an der Schaltfläche zu zeigen (zum Beispiel, indem Sie sie hov-ern oder fokussieren) und beobachten das im Vorherigen beschriebene Verhalten.

## JavaScript API für Interest-Invoker

Interest-Invoker haben eine zugehörige JavaScript-API, mit der Sie das durch Interest-Invoker-Elemente angezielte Element abfragen und benutzerdefinierten Code ausführen können, wenn Interesse gezeigt oder verloren wird. Die Funktionen dieser API sind:

- Die [`interestForElement`](/de/docs/Web/API/HTMLButtonElement/interestForElement)-Eigenschaft, die auf den [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement), [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement), [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement) und [`SVGAElement`](/de/docs/Web/API/SVGAElement)-Schnittstellen verfügbar ist. Sie gibt eine Referenz auf das Ziel-Element für den Interest-Invoker zurück. Dies ist das Element, dessen `id` in dem äquivalenten HTML- oder SVG-Interest-Invokers `interestfor`-Attribut referenziert wird.
- Die [`interest`](/de/docs/Web/API/HTMLElement/interest_event) und [`loseinterest`](/de/docs/Web/API/HTMLElement/loseinterest_event)-Ereignisse, die auf dem Ziel-Element eines Interest-Invokers ausgelöst werden, wenn Interesse gezeigt und verloren wird, jeweils. Sie können diese Ereignisse anhören, um benutzerdefinierten Code als Reaktion auszuführen.
- Die [`InterestEvent`](/de/docs/Web/API/InterestEvent)-Schnittstelle, die das Ereignisobjekt für die `interest`- und `loseinterest`-Ereignisse ist. Sie enthält eine `source`-Eigenschaft, die eine Referenz auf das zugehörige Interest-Invoker-Element enthält.

### Erkennung von Unterstützung für Interest-Invoker

Einer der Anwendungsfälle der API ist das Feature-Detection. Der einfachste Weg, um zu überprüfen, ob Interest-Invoker unterstützt werden, ist die Verwendung der {{jsxref("Object.hasOwnProperty()")}}-Methode auf einem der Schnittstelltypen, um zu sehen, ob die `interestForElement`-Eigenschaft verfügbar ist.

Zum Beispiel:

```js
const supported =
  HTMLButtonElement.prototype.hasOwnProperty("interestForElement");
```

Alle Beispiele in diesem Leitfaden verwenden diese Technik, um Unterstützung zu erkennen. Wenn der Rückgabewert `false` ist, was darauf hinweist, dass das Feature nicht unterstützt wird, fügen wir dem {{htmlelement("html")}}-Element eine Klasse hinzu:

```js
if (!supported) {
  document.querySelector("html").classList.add("no-interest-invokers");
}
```

Wir verwenden dann diese Klasse in unserem CSS, um ein "nicht unterstützt"-Banner anzuzeigen:

```css
.no-interest-invokers body::before {
  content: "Your browser doesn't support interest invokers.";
  background-color: wheat;
  display: block;
  padding: 10px 0;
  width: 100%;
  text-align: center;
}
```

### Interest-Invoker-API in Aktion

Schauen wir uns ein einfaches Beispiel an, das die API-Funktionen In Aktion zeigt. Dieses Beispiel hat drei Links und einen Absatz, der als Popover gesetzt ist:

```html live-sample___interest-invoker-api
<p>
  Here's some links:
  <a href="#">Link 1</a>
  <a href="#">Link 2</a>
  <a href="#"">Link 3</a>
</p>
<p id="mytooltip" popover="hint">A hover toolip</p>
```

```css hidden live-sample___interest-invoker-api
html {
  font-family: sans-serif;
}

#mytooltip {
  position-area: bottom;
}
```

Im JavaScript holen wir Referenzen auf das Popover und die drei Links. Dann durchlaufen wir die Links und setzen die [`interestForElement`](/de/docs/Web/API/HTMLAnchorElement/interestForElement)-Eigenschaft jedes Links, um auf das Popover-Element zu verweisen. Dies legt programmgesteuert die Interesse-Invoker-Ziel-Beziehung zwischen dem Popover und jedem Link fest.

```js live-sample___interest-invoker-api
const tooltip = document.getElementById("mytooltip");
const links = document.querySelectorAll("a");
links.forEach((link) => (link.interestForElement = tooltip));
```

Als nächstes hängen wir `interest` und `loseinterest` Ereignishandler an das Popover. Wenn Interesse an einem der Links gezeigt wird, aktualisieren wir den Textinhalt des Popovers, sodass es den Textinhalt des Links einschließt, der das Popover erscheinen ließ (abgerufen über die `source`-Eigenschaft des Ereignisobjekts). Wenn Interesse verloren geht, fügen wir einen Sternchen an den `source`-Textinhalt des Elements an, sodass man die Anzahl der Male sehen kann, an denen Interesse gezeigt wurde.

```js live-sample___interest-invoker-api
tooltip.addEventListener("interest", (e) => {
  tooltip.textContent = `Interest shown on ${e.source.textContent}`;
});

tooltip.addEventListener("loseinterest", (e) => {
  e.source.textContent += "*";
});
```

Das wird wie folgt dargestellt:

{{embedlivesample("interest-invoker-api", "100%", "150")}}

## Verwenden von Interest-Invokern zur Erstellung von Vorschau-Popovern

Wie bereits erwähnt, ist ein sehr häufiger Anwendungsfall für Interest-Invoker die progressive Verbesserung von Links mit Vorschauinformationen über das Linkziel. Dies kann Details wie den Namen, die Biografie und den Standort einer Person umfassen, die auf einem Link zu ihrer Profilseite angezeigt werden, oder Schnellaktionen wie das Abonnieren einer Gruppe, die auf einem Link zu ihrer Homepage angeboten werden. Diese Vorschau-Popover sind praktisch, weil sie den Benutzern helfen, die benötigten Informationen zu erhalten, ohne zu navigieren und den Kontext zu verlieren.

Schauen wir uns an, wie Sie ein Vorschau-Popover mit Interest-Invokern implementieren können.

### HTML

Das Markup enthält einen Link zu einem GitHub-Profil in einem kurzen Absatz und ein `<div>`, das ein begrenztes Benutzerprofil mit einem gefälschten "Folgen"-Button enthält. Das `interestfor`-Attribut des Links zeigt auf die `id` des Benutzerprofils. Zusätzlich hat das Benutzerprofil ein `popover`-Attribut, das es in ein Popover-Element umwandelt und es standardmäßig verbirgt.

```html live-sample___link-preview-popover
<p>
  I think
  <a
    href="https://github.com/chrisdavidmills/"
    interestfor="user-info"
    target="_blank">
    @chrisdavidmills
  </a>
  should know about this.
</p>

<div id="user-info" popover="hint">
  <div class="wrapper">
    <img src="chris-mills.jpg" alt="chris mills" />
    <section>
      <p><strong>Chris Mills</strong></p>
      <p>
        Independent tech writer and web technology tinkerer, working on MDN on
        behalf of Google and Mozilla. A11y and open standards advocate. Heavy
        metal drummer. <button>Follow</button>
      </p>
      <p>🌍 Greenfield, UK</p>
    </section>
  </div>
</div>
```

### CSS

Wir beginnen mit dem Einstellen eines {{cssxref("interest-delay-start")}}-Werts von `1s` auf den Link (der `a[interestfor]`-Selektor ist nützlich, um nur die Links auszuwählen, die Interest-Invoker sind). Dies erzeugt eine leichte Verzögerung, bevor das Vorschau-Popover erscheint. Es kann störend sein, wenn Popover zu schnell auf einer dicht besetzten Linkseite erscheinen; in solchen Fällen ist diese Technik nützlich.

```css hidden live-sample___link-preview-popover
html {
  font-family: sans-serif;
}

* {
  box-sizing: border-box;
}
```

```css live-sample___link-preview-popover
a[interestfor] {
  interest-delay-start: 1s;
}
```

Als nächstes setzen wir einen `position-area`-Wert von `bottom right` auf das Popover, damit es in der unteren rechten Ecke des Links erscheint, wenn Interesse angezeigt wird. (Der Rest der Popover-Stil ist hier aus Gründen der Kürze ausgeblendet.)

```css live-sample___link-preview-popover
#user-info {
  position-area: bottom right;
}
```

```css hidden live-sample___link-preview-popover
#user-info {
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 0 10px;
  margin: 5px;
  background-color: white;
  font-size: 0.8rem;
}

#user-info .wrapper {
  display: flex;
  align-items: center;
  gap: 20px;
  width: 480px;
  font-size: 0.8rem;
}

#user-info img {
  margin: 10px 0;
  border: 1px solid lightgray;
  border-radius: 5px;
}
```

Im letzten CSS-Block animieren wir die {{cssxref("opacity")}}-Eigenschaft des Popovers, sodass es bei Interesse nahtlos einblendet (wie von der {{cssxref(":interest-target")}}-Pseudoklasse übereinstimmend). Da das Popover zunächst versteckt ist (über `display: none`), sind einige zusätzliche Regeln erforderlich, um es korrekt zu animieren. Wir müssen `transition-behavior: allow-discrete` auf den {{cssxref("overlay")}}- und {{cssxref("display")}}-Eigenschaften festlegen, um diskrete Animationen zu ermöglichen. Wir müssen auch einen {{cssxref("@starting-style")}}-Block verwenden, um den anfänglichen Zustand des Popovers im `interest-target`-Zustand zu definieren, da es zuvor nicht gerendert wurde.

```css hidden live-sample___link-preview-popover
[popover]:interest-target {
  opacity: 1;
}

[popover] {
  opacity: 0;
  transition:
    opacity 0.7s,
    overlay 0.7s allow-discrete,
    display 0.7s allow-discrete;
}

@starting-style {
  [popover]:interest-target {
    opacity: 0;
  }
}
```

### Ergebnis

Das wird wie folgt dargestellt:

{{embedlivesample("link-preview-popover", "100%", "260", , , , , "allow-popups")}}

Versuchen Sie, über den Link zu hov-ern oder ihn zu fokussieren, um das Vorschau-Popover anzuzeigen. In diesem Beispiel kommt auch progressive Verbesserung ins Spiel – in nicht unterstützenden Browsern funktioniert der Link wie erwartet.

## Verwenden von Interest-Invokern ohne Popover

Schauen wir uns ein Beispiel an, das Interest-Invoker ohne Popover verwendet. In diesem Beispiel erstellen wir ein Stilvorschau-Panel. Sie können verschiedene Farbschema-Schaltflächen aktivieren, um unterschiedliche Stile auf das Panel anzuwenden. Wir haben die Interaktion mit Interest-Invokern progressiv verbessert, sodass Sie den Stil vor der Auswahl in der Vorschau anzeigen können. Wenn Interesse an einer Schaltfläche gezeigt wird, wird ihr Farbschema auf das Panel angewendet, und wenn Interesse verloren geht, kehrt das Panel zum zuvor angewendeten Stil zurück.

### HTML

Das HTML enthält fünf `<button>`-Elemente und ein {{htmlelement("article")}}-Element, das das Stilvorschau-Panel darstellt. Jede Schaltfläche hat denselben `interestfor`-Wert, der auf die `id` des `<article>` verweist, und jede hat eine `class`, die ein unterschiedliches Farbschema darstellt. Beachten Sie, dass das `<article>` kein `popover`-Attribut gesetzt hat (Popover sind keine Voraussetzung für die Verwendung von Interest-Invokern).

```html live-sample___non-popover
<div>
  <button interestfor="style-panel" class="black-white">Black/White</button>
  <button interestfor="style-panel" class="bubblegum">Bubblegum</button>
  <button interestfor="style-panel" class="purple-haze">Purple haze</button>
  <button interestfor="style-panel" class="blaze">Blaze</button>
  <button interestfor="style-panel" class="mint-brown">Mint brown</button>
</div>
<article id="style-panel" class="black-white">
  <h2>Style preview panel</h2>
  <p>This is fun, right?</p>
</article>
```

### CSS

Zuerst definieren wir die Styles für jede `class`, die auf ein `<button>`-Element angewendet wird:

```css hidden live-sample___non-popover
html {
  font-family: sans-serif;
}

* {
  box-sizing: border-box;
}

body {
  width: 640px;
  margin: 0 auto;
}

body > div {
  display: flex;
  gap: 5px;
  margin-top: 20px;
}

button {
  flex: 1;
  padding: 5px;
  border-radius: 3px;
  cursor: pointer;
}

#style-panel {
  padding: 20px;
  border-radius: 30px;
  margin-top: 20px;
  border-width: 10px;
  corner-shape: scoop;
}

h2 {
  margin-top: 0;
  text-align: center;
  letter-spacing: 5px;
}

p {
  margin-bottom: 0;
  text-align: center;
  font-weight: bold;
  letter-spacing: 3px;
}
```

```css live-sample___non-popover
.black-white {
  color: black;
  background-color: white;
  border: 2px solid black;
}

.bubblegum {
  color: #fff8f0;
  background-color: #ef476f;
  border: 2px solid #fff8f0;
  box-shadow: 0 0 2px #ef476f;
}

.purple-haze {
  color: #8a1c7c;
  background-color: #f0bcd4;
  border: 2px solid #8a1c7c;
}

.blaze {
  color: #f2e94e;
  background-color: #7e6b8f;
  border: 2px solid #f2e94e;
}

.mint-brown {
  color: #41463d;
  background-color: #1cfeba;
  border: 2px solid #41463d;
}
```

Als nächstes wenden wir Styles auf jede Schaltfläche an, auf die Interesse gezeigt wird, indem wir die {{cssxref(":interest-source")}}-Pseudoklasse verwenden. Dies ermöglicht es den Benutzern, leicht zu sehen, welche Schaltfläche derzeit Interesse zieht.

```css live-sample___non-popover
button:interest-source {
  background-color: black;
  color: white;
  border: 2px solid black;
}
```

Zum Schluss wenden wir eine {{cssxref("transition")}} auf das Stil-Panel an, sodass alle Eigenschaftswerte, die sich auf dem Element ändern, sanft über eine Dauer von `0.7s` animieren. Dies bedeutet, dass alle auf das Panel angewendeten Farbschemaänderungen animiert werden.

```css live-sample___non-popover
#style-panel {
  transition: all 0.7s;
}
```

### JavaScript

In diesem Teil des Codes beginnen wir mit dem Abrufen von Referenzen auf das Stil-Panel und alle Schaltflächen. Wir erstellen auch eine Variable namens `prevStyle` und setzen sie auf `black-white`. Dies ist das anfängliche Farbschema, das auf das Panel angewendet wird, und auch der Stil, zu dem das Panel zurückkehrt, wenn Interesse verloren wird.

```js live-sample___non-popover
const stylePanel = document.getElementById("style-panel");
const buttons = document.querySelectorAll("button");

let prevStyle = "black-white";
```

Als nächstes setzen wir `interest` und `loseinterest` Ereignis-Listener auf das Stil-Panel. Diese Ereignisse rufen die `sampleStyle()` und `revertStyle()`-Funktionen auf, um Styles anzuwenden und zurückzusetzen, wenn Interesse an den Schaltflächen gezeigt und verloren wird. Wir durchlaufen zudem die `buttons`-[`NodeList`](/de/docs/Web/API/NodeList) und fügen jeder einen `click`-Ereignis-Listener hinzu, sodass beim Aktivieren einer Schaltfläche die `setStyle()`-Funktion ausgeführt wird.

```js live-sample___non-popover
stylePanel.addEventListener("interest", sampleStyle);
stylePanel.addEventListener("loseinterest", revertStyle);
buttons.forEach((button) => button.addEventListener("click", setStyle));
```

Schließlich definieren wir die zuvor genannten Funktionen:

- `sampleStyle()`: Wenn Interesse an einer Schaltfläche gezeigt wird, wird deren `class` von `e.source.className` abgerufen (`InterestEvent.source` enthält eine Referenz auf den Interest-Invoker, an dem Interesse gezeigt wurde) und über `e.target.className` auf das Stil-Panel angewendet.
- `revertStyle()`: Wenn Interesse verloren geht, kehrt das Stil-Panel zu seinem vorherigen Stil zurück, der in `prevStyle` gespeichert ist.
- `setStyle()`: Wenn eine Schaltfläche geklickt wird, wird deren `className` auf das Stil-Panel angewendet. Wir aktualisieren auch `prevStyle` auf den `className` der geklickten Schaltfläche, damit das Panel beim nächsten Voransichten eines Stils in den _neuen_ vorher festgelegten Stil zurückkehren kann.

```js live-sample___non-popover
function sampleStyle(e) {
  e.target.className = e.source.className;
}

function revertStyle(e) {
  e.target.className = prevStyle;
}

function setStyle(e) {
  stylePanel.className = e.target.className;
  prevStyle = e.target.className;
}
```

### Ergebnis

Das wird wie folgt dargestellt:

{{embedlivesample("non-popover", "100%", "260")}}

Versuchen Sie, über eine Schaltfläche zu hov-ern oder sie zu fokussieren, um ihren Stil im Panel in der Vorschau anzuzeigen. Durch Klicken auf eine Schaltfläche wird der Stil dauerhaft angewendet. Beachten Sie, dass das Festlegen der Styles auch in Browsern funktioniert, die Interest-Invoker nicht unterstützen, selbst wenn die "Vorschau"-Funktionalität nicht verfügbar ist.

## Siehe auch

- [Startseite der Interest-Invoker-Beispiele](https://mdn.github.io/dom-examples/interest-invokers/)
- [Popover API](/de/docs/Web/API/Popover_API)
