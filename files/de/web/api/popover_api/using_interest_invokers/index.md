---
title: Verwendung von "Interest Invokers"
slug: Web/API/Popover_API/Using_interest_invokers
l10n:
  sourceCommit: 995f8bcede5aa8ca40921b030deef7524ce9e1a3
---

{{DefaultAPISidebar("Popover API")}}

**Interest Invokers** bieten eine Mechanik, um eine Schnittstelle zu aktualisieren oder benutzerdefinierte Code auszuführen, wenn ein Benutzer "Interesse zeigt" oder "das Interesse verliert" an einem Element (zum Beispiel durch drüberfahren oder aufhören, darüber zu fahren). Sie werden am häufigsten verwendet, um Popovers anzuzeigen und zu verbergen. Dieser Leitfaden erklärt die Konzepte hinter Interest Invokers, ihre Anwendungsfälle und wie man sie nutzt.

## Konzepte

Die Popover API bietet die Funktionalität, ein Popover anzuzeigen, wenn ein zugehöriges Steuerelement (der **Invoker**) aktiviert wird, beispielsweise wenn es angeklickt wird. Diese Funktion ist nützlich für die Anzeige von Benutzeroberflächenelementen wie Modals und Informationspanels. Sie können [Popover deklarativ erstellen](/de/docs/Web/API/Popover_API/Using#creating_declarative_popovers), indem Sie das [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) Attribut zusammen mit entweder [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) oder [`commandfor`](/de/docs/Web/HTML/Reference/Elements/button#commandfor) verwenden.

Zusätzlich zu diesen Aktivierungs-basierten Popovers besteht häufig die Notwendigkeit, ein Popover anzuzeigen, wenn ein Steuerelement überfahren oder fokussiert wird – Interaktionen, die auf Benutzerinteresse hinweisen. Zum Beispiel lassen viele soziale und Gemeinschaftsseiten Benutzer über einen Link zu einer Profilseite einer Person oder Gruppe fahren, um ein Popover mit mehr Informationen anzuzeigen. Diese kurze Vorschau hilft Benutzern zu entscheiden, ob sie die vollständige Seite besuchen möchten. Solche Popovers können auch schnelle Aktionen enthalten, wie "Folgen" oder "Gruppe abonnieren", wodurch Benutzer eine Aktion durchführen können, ohne ihren aktuellen Kontext zu verlieren.

Interest Invokers ermöglichen es dem Browser, ein auf Interesse basierendes Popover-Verhalten auf eine konsistente und zugängliche Weise bereitzustellen, ohne JavaScript zu benötigen. Der Browser bestimmt, wann ein Benutzer Interesse an einem Element zeigt, und dementsprechend wann eine Aktion ausgeführt werden sollte. "Interesse zeigen" tritt im Allgemeinen auf, wenn ein Benutzer über das Element fährt, es fokussiert oder lange darauf drückt (die genaue Art von "Interesse" kann je nach Browser variieren), und "Interesse verlieren" geschieht allgemein, wenn der Benutzer aufhört, mit dem Element zu interagieren.

Der Browser löst auch Ereignisse aus, wenn Interesse gewonnen oder verloren wird, so dass Sie benutzerdefinierten Code als Antwort ausführen können. Darüber hinaus beinhaltet diese Funktion CSS-Eigenschaften und Selektoren zum Stylen von Elementen basierend auf Interesse.

> [!NOTE]
> Auf Geräten mit einer <kbd>Esc</kbd>-Taste sorgt das Drücken dieser Taste dafür, dass jegliches Interesse abgebrochen wird. Dies bietet einen allgemeinen Fluchtmechanismus, falls die Interaktion ablenkend oder unerwünscht wird.

Sie können Interest Invokers auch verwenden, um benutzerdefinierten Code in [Nicht-Popover-Fällen](#verwendung_von_interest_invokers_ohne_popovers) auszuführen. Dieser Leitfaden konzentriert sich jedoch hauptsächlich auf Popovers, da sie die häufigste Nutzung von Interest Invokers darstellen.

## Erstellung eines Interest Invokers

Die Erstellung eines Interest Invokers auf deklarative Weise erfordert die folgenden zwei Bedingungen:

- Ein **Invoker-Element**: Dies ist das Element, mit dem der Benutzer interagiert, um Interesse anzuzeigen und eine Aktion auszulösen, wie das Anzeigen oder Verbergen eines Popovers. Das Invoker-Element muss ein [`interestfor`](/de/docs/Web/HTML/Reference/Elements/a#interestfor) Attribut haben, dessen Wert die `id` des Ziel-Elements ist. Das Invoker-Element kann ein HTML-{{htmlelement("a")}}, {{htmlelement("button")}}, oder {{htmlelement("area")}} Element sein oder ein SVG [`<a>`](/de/docs/Web/SVG/Reference/Element/a) Element.

- Ein **Ziel-Element**: Dies ist das Element, das betroffen oder gesteuert wird, wenn Interesse gewonnen oder verloren wird. Das Ziel-Element muss eine `id` haben und kann fast jeden Elementtyp haben. Wenn Sie diesem Element ein `popover` Attribut geben, verwandelt es sich in ein Popover.

  > [!NOTE]
  > Sie können auch das Ziel-Element programmatisch setzen, indem Sie die `interestForElement` DOM-Eigenschaft des Invoker-Elements auf eine Referenz auf das Ziel-Element setzen. Weitere Informationen finden Sie im späteren Abschnitt [JavaScript-API für Interest Invokers](#javascript_api_für_interest_invokers) in diesem Leitfaden.

Betrachten wir ein einfaches Beispiel. Hier ist das **Invoker-Element** ein Link, und das **Ziel-Element** ist ein Absatz mit dem `popover` Attribut.

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
const supported = Object.hasOwn(
  HTMLButtonElement.prototype,
  "interestForElement",
);
if (!supported) {
  document.querySelector("html").classList.add("no-interest-invokers");
}
```

```html live-sample___basic-interest-invoker
<p>Some text with a <a href="#" interestfor="mypopover">link</a>.</p>
<p id="mypopover" popover>A short preview with some quick info</p>
```

Das Setzen des `popover` Attributs auf das Ziel-Element sorgt dafür, dass es (über {{cssxref("display", "display: none")}}) verborgen und auf dem Bildschirm zentriert wird. Interesse am Invoker-Element (dem Link) zu zeigen, lässt das Popover erscheinen.

Dies wird wie folgt gerendert. Versuchen Sie, mit dem Link zu interagieren:

{{embedlivesample("basic-interest-invoker", "100%", "150")}}

Beachten Sie, wie das Popover erscheint, wenn der Link überfahren, fokussiert oder lange gedrückt wird, und verschwindet, wenn die Interaktion aufhört. Wenn der Link hingegen aktiviert wird, zum Beispiel durch einen Mausklick, verhält er sich wie ein normaler Link – außer dass er in diesem Beispiel nirgendwohin führt.

Der Wert des `popover` Attributs beeinflusst das Verhalten des Popovers in diesem Beispiel nicht. Es wird jedoch wichtig, wenn Sie Interest Invoker-Popovers mit regulären Popovers kombinieren, wie im nächsten Abschnitt gezeigt.

## Kombination von Interest Invokers mit aktivierungs-basierten Popovers

Sie können Interest Invokers mit regulären Popovers auf demselben Steuerelement kombinieren. Im folgenden Beispiel ist ein {{htmlelement("button")}} Element als Interest Invoker mit dem `interestfor` Attribut eingerichtet, was bedeutet, dass es ein Tooltip angezeigt wird, wenn der Benutzer Interesse zeigt. Wenn der Button angeklickt wird, wird ein anderes Popover angezeigt oder verborgen, das durch das `commandfor` Attribut referenziert wird. Das [`command`](/de/docs/Web/HTML/Reference/Elements/button#command) Attribut ist auf `toggle-popover` gesetzt, sodass der Button mehrmals gedrückt werden kann, um das Popover zwischen seinem angezeigten und verborgenen Zustand zu wechseln.

```css hidden live-sample___interest-invoker-popover-interaction
#my-tooltip {
  position-area: right;
}

#my-infobox {
  position-area: bottom;
}
```

```html live-sample___interest-invoker-popover-interaction
<p>
  Some content including a
  <button
    interestfor="my-tooltip"
    commandfor="my-infobox"
    command="toggle-popover">
    button
  </button>
</p>
<p id="my-tooltip" popover="hint">A hover tooltip</p>
<p id="my-infobox" popover>
  An infobox that also contains some control buttons<br />
  <button>Button 1</button> <button>Button 2</button>
</p>
```

Dies wird wie folgt gerendert:

{{embedlivesample("interest-invoker-popover-interaction", "100%", "150")}}

Sie können Interesse am Button zeigen, um das Tooltip anzuzeigen, und den Button anklicken, um die Infobox aufzudecken. Beachten Sie, dass die `popover` Werte hier wichtig sind — das Tooltip-Popover ist auf [`popover="hint"`](/de/docs/Web/API/Popover_API/Using#using_hint_popover_state) gesetzt, während die Infobox auf `popover` (gleichwertig mit `popover="auto"`) gesetzt ist. Dies ermöglicht es, dass das Tooltip sichtbar bleibt, auch wenn die Infobox angezeigt wird. Wenn beide Popovers auf `auto` gesetzt wären, könnten Sie das Tooltip und die Infobox nicht gleichzeitig sehen. In einer Benutzeroberfläche ist es nützlich, mehrere Tooltips zu sehen, ohne Teile der Benutzeroberfläche zu verbergen, die Sie bereits geöffnet haben.

## Styling von Interest Invokers

Beim Stylen von Popovers, die mit Interest Invokers verwendet werden, können Sie dieselben Styling-Techniken wie bei jedem anderen Popover verwenden (siehe [Styling von Popovers](/de/docs/Web/API/Popover_API/Using#styling_popovers)), einschließlich [Verwendung von Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning) zur Positionierung von Popovers relativ zu Invokern und [Animation von Popovers](/de/docs/Web/API/Popover_API/Using#animating_popovers).

Es gibt jedoch einige CSS-Funktionen, die speziell für Interest Invokers sind:

- Die {{cssxref("interest-delay")}} Kurzform-Eigenschaft und ihre zugehörigen Langformen {{cssxref("interest-delay-start")}} und {{cssxref("interest-delay-end")}}: Diese können verwendet werden, um eine Verzögerung zwischen dem Zeitpunkt zuzufügen, an dem der Benutzer Interesse gewinnt oder verliert, und dem Browser handelt entsprechend — zum Beispiel ein Popover anzeigen oder verbergen.
- Die {{cssxref(":interest-source")}} und {{cssxref(":interest-target")}} Pseudo-Klassen: Diese können verwendet werden, um Stile auf den Interest Invoker und sein zugehöriges Ziel-Element anzuwenden, jeweils nur wenn Interesse angezeigt wird.

Sehen wir uns ein einfaches Beispiel an, das zeigt, wie diese Funktionen funktionieren.

Wir haben zwei Buttons und ein Tooltip definiert. Das Tooltip wird angezeigt oder verborgen, wenn der Benutzer Interesse an einem der beiden Buttons zeigt oder verliert.

```html live-sample___interest-invoker-styling
<p>
  <button interestfor="my-tooltip">Button 1</button>
  <button interestfor="my-tooltip">Button 2</button>
</p>
<p id="my-tooltip" popover="hint">A hover tooltip</p>
```

Im CSS haben wir eine `interest-delay` von `1s 2s` auf dem `<button>` gesetzt — dies erstellt eine Verzögerung von 1 Sekunde bevor das Tooltip erscheint, wenn der Benutzer Interesse zeigt, und eine Verzögerung von 2 Sekunden bevor es verschwindet, wenn der Benutzer das Interesse verliert. Wir haben auch den `button:interest-source`-Selektor verwendet, um die {{cssxref("background-color")}} der Buttons auf `orange` zu ändern, wenn Interesse gezeigt wird.

```css live-sample___interest-invoker-styling
button {
  interest-delay: 1s 2s;
}

button:interest-source {
  background-color: orange;
}
```

Als nächstes haben wir die `:interest-source` Pseudo-Klasse mit der {{cssxref(":has()")}} Pseudo-Klasse kombiniert, um `interest-delay-start: 0s` auf alle Buttons innerhalb des Absatzes anzuwenden, jedoch nur, wenn der Absatz einen Button enthält, auf dem Interesse gezeigt wird (also einen Button, der `button:interest-source` entspricht). Dies ist eine nützliche Technik — wenn das Popover sofort erscheint, sobald Interesse an einem beliebigen Button gezeigt wird, wäre dies eine lästige Benutzererfahrung, aber nachdem der Benutzer Interesse an einem Button gezeigt hat, ist es bequem für ihn, schnell zwischen verschiedenen Popovers wechseln zu können.

```css live-sample___interest-invoker-styling
p:has(button:interest-source) button {
  interest-delay-start: 0s;
}
```

Wir haben auch eine {{cssxref("position-area")}} von `bottom` auf das Tooltip gesetzt, so dass es unter dem Button erscheint. Dies ist möglich, weil die Zuordnung eines Popovers mit seinem Interest Invoker einen impliziten Anker-Verweis zwischen ihnen schafft (siehe [Popover-Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning) für weitere Details).

```css live-sample___interest-invoker-styling
#my-tooltip {
  position-area: bottom;
}
```

Schließlich haben wir den `#my-tooltip:interest-target` Selektor verwendet, um einen gestrichelten Rand auf das Popover zu setzen, wenn Interesse angezeigt wird.

```css live-sample___interest-invoker-styling
#my-tooltip:interest-target {
  border-style: dashed;
}
```

Dies wird wie folgt gerendert:

{{embedlivesample("interest-invoker-styling", "100%", "150")}}

Versuchen Sie, Interesse am Button zu zeigen (zum Beispiel durch Überfahren oder Fokussieren) um das zuvor beschriebene Verhalten zu beobachten.

## JavaScript API für Interest Invokers

Interest Invokers haben eine zugehörige JavaScript-API, die es Ihnen ermöglicht, das Element abzufragen, das von einem Interest Invoker angezielt wird, und benutzerdefinierten Code auszuführen, wenn Interesse gezeigt oder verloren wird. Die Features dieser API sind:

- Die [`interestForElement`](/de/docs/Web/API/HTMLButtonElement/interestForElement) Eigenschaft, die auf den [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement), [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement), [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement) und [`SVGAElement`](/de/docs/Web/API/SVGAElement) Schnittstellen verfügbar ist. Sie gibt eine Referenz auf das Ziel-Element für den Interest Invoker zurück. Dies ist das Element, dessen `id` im äquivalenten HTML- oder SVG-Interest-Invoker `interestfor` Attribut referenziert wird.
- Die [`interest`](/de/docs/Web/API/HTMLElement/interest_event) und [`loseinterest`](/de/docs/Web/API/HTMLElement/loseinterest_event) Ereignisse, die auf dem Ziel-Element eines Interest Invokers ausgelöst werden, wenn Interesse gezeigt und verloren wird. Sie können diese Ereignisse abhören, um benutzerdefinierten Code als Antwort auszuführen.
- Die [`InterestEvent`](/de/docs/Web/API/InterestEvent) Schnittstelle, die das Ereignisobjekt für die `interest` und `loseinterest` Ereignisse ist. Dies beinhaltet eine `source` Eigenschaft, die eine Referenz auf das zugehörige Interest Invoker Element enthält.

### Erkennung der Unterstützung von Interest Invokers

Eine der Anwendungen der API ist die Funktionsprüfung. Der einfachste Weg, um zu überprüfen, ob Interest Invokers unterstützt werden, ist die Verwendung der {{jsxref("Object.hasOwn()")}} Methode auf einem der Schnittstellen-Typen, um zu sehen, ob die `interestForElement` Eigenschaft verfügbar ist.

Zum Beispiel:

```js
const supported = Object.hasOwn(
  HTMLButtonElement.prototype,
  "interestForElement",
);
```

Alle Beispiele in diesem Leitfaden verwenden diese Technik zur Unterstützungserkennung. Wenn der Rückgabewert `false` ist, was darauf hinweist, dass die Funktion nicht unterstützt wird, fügen wir dem {{htmlelement("html")}} Element eine Klasse hinzu:

```js
if (!supported) {
  document.querySelector("html").classList.add("no-interest-invokers");
}
```

Wir verwenden diese Klasse dann in unserem CSS, um ein "nicht unterstützt"-Banner anzuzeigen:

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

### Interest Invoker API im Einsatz

Werfen wir einen Blick auf ein einfaches Beispiel, das die API-Funktionen im Einsatz zeigt. Dieses Beispiel hat drei Links und einen Absatz, der als Popover eingerichtet ist:

```html live-sample___interest-invoker-api
<p>
  Here's some links:
  <a href="#">Link 1</a>
  <a href="#">Link 2</a>
  <a href="#">Link 3</a>
</p>
<p id="my-tooltip" popover="hint">A hover tooltip</p>
```

```css hidden live-sample___interest-invoker-api
html {
  font-family: sans-serif;
}

#my-tooltip {
  position-area: bottom;
}
```

Im JavaScript erhalten wir Referenzen auf das Popover und auf die drei Links. Wir durchlaufen dann die Links und setzen die [`interestForElement`](/de/docs/Web/API/HTMLAnchorElement/interestForElement) Eigenschaft jedes Links, um auf das Popover-Element zu verweisen. Dies richtet programmgesteuert die Interest-Invoker-Ziel-Beziehung zwischen dem Popover und jedem Link ein.

```js live-sample___interest-invoker-api
const tooltip = document.getElementById("my-tooltip");
const links = document.querySelectorAll("a");
links.forEach((link) => (link.interestForElement = tooltip));
```

Als nächstes hängen wir `interest` und `loseinterest` Ereignis-Handler an das Popover an. Wenn Interesse an einem der Links gezeigt wird, aktualisieren wir den Textinhalt des Popovers so, dass er den Textinhalt des Links enthält, der das Popover erscheinen ließ (abgerufen über die `source` Eigenschaft des Ereignisobjekts). Wenn Interesse verloren wird, hängen wir einen Stern an den `source` Element-Textinhalt an, damit Sie sehen können, wie oft Interesse daran gezeigt wurde.

```js live-sample___interest-invoker-api
tooltip.addEventListener("interest", (e) => {
  tooltip.textContent = `Interest shown on ${e.source.textContent}`;
});

tooltip.addEventListener("loseinterest", (e) => {
  e.source.textContent += "*";
});
```

Dies wird wie folgt gerendert:

{{embedlivesample("interest-invoker-api", "100%", "150")}}

## Verwendung von Interest Invokers zur Erstellung von Vorschau-Popovers

Wie bereits erwähnt, ist ein sehr häufiger Anwendungsfall für Interest Invokers die progressive Erweiterung von Links mit Vorschauinformationen über das Ziel des Links. Dies kann Details wie den Namen, die Biografie und den Standort einer Person, die auf einem Link zu ihrer Profilseite angezeigt werden, oder Schnellaktionen wie das Abonnieren einer Gruppe, die auf einem Link zu ihrer Homepage bereitgestellt werden, umfassen. Diese Vorschau-Popovers sind praktisch, weil sie Benutzern helfen, die Informationen zu erhalten, die sie benötigen, ohne die Seite zu verlassen und den Kontext zu verlieren.

Schauen wir uns an, wie man mit Interest Invokers ein Vorschau-Popover implementiert.

### HTML

Das Markup enthält einen Link zu einem GitHub-Profil innerhalb eines kurzen Absatzes und ein `<div>`, das ein begrenztes Benutzerprofil mit einem gefälschten "Folgen"-Button enthält. Das `interestfor` Attribut des Links zeigt auf die `id` des Benutzerprofils. Zusätzlich hat das Benutzerprofil ein `popover` Attribut, das es in ein Popover-Element verwandelt und es standardmäßig verbirgt.

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

Wir beginnen mit dem Setzen eines {{cssxref("interest-delay-start")}} Werts von `1s` auf den Link (der `a[interestfor]` Selektor ist nützlich, um nur die Links auszuwählen, die Interest Invokers sind). Dies erzeugt eine leichte Verzögerung, bevor das Vorschau-Popover erscheint. Es kann nervig werden, wenn Popovers zu schnell auf einer dichten, linkreichen Seite auftauchen; in solchen Fällen ist diese Technik nützlich.

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

Als nächstes setzen wir einen `position-area` Wert von `bottom right` auf das Popover, so dass es an der unteren rechten Ecke des Links erscheint, wenn Interesse angezeigt wird. (Der Rest des Popover-Stylings ist hier der Kürze halber versteckt.)

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

Im letzten CSS-Block animieren wir die {{cssxref("opacity")}} Eigenschaft des Popovers so, dass es sanft verblasst, wenn Interesse gezeigt wird (wie durch die {{cssxref(":interest-target")}} Pseudo-Klasse übereinstimmend). Da das Popover anfänglich verborgen beginnt (via `display: none`), sind einige zusätzliche Regeln erforderlich, um es korrekt zu animieren. Wir müssen [`transition-behavior: allow-discrete`](/de/docs/Web/CSS/Reference/Properties/transition-behavior#allow-discrete) auf den {{cssxref("overlay")}} und {{cssxref("display")}} Eigenschaften setzen, um diskrete Animationen zu ermöglichen. Wir müssen auch einen {{cssxref("@starting-style")}} Block verwenden, um den Anfangszustand des Popovers im `interest-target` Zustand zu definieren, da es vorher nicht gerendert wurde.

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

Dies wird wie folgt gerendert:

{{embedlivesample("link-preview-popover", "100%", "260", , , , , "allow-popups")}}

Versuchen Sie, den Link zu überfahren oder zu fokussieren, um das Vorschau-Popover anzuzeigen. Es gibt auch eine progressive Erweiterung in diesem Beispiel – in nicht unterstützenden Browsern funktioniert der Link wie erwartet.

## Verwendung von Interest Invokers ohne Popovers

Sehen wir uns ein Beispiel an, das Interest Invokers ohne Popovers verwendet. In diesem Beispiel erstellen wir ein Stilvorschau-Panel. Sie können verschiedene Farbschema-Buttons aktivieren, um dem Panel unterschiedliche Stile zuzuweisen. Wir haben die Interaktion progressiv mit Interest Invokers verbessert, so dass Sie den Stil vor der Auswahl Vorschau anzeigen können. Wenn Interesse an einem Button gezeigt wird, wird dessen Farbschema auf das Panel angewendet, und wenn Interesse verloren wird, kehrt das Panel zum zuvor angewendeten Stil zurück.

### HTML

Das HTML enthält fünf `<button>` Elemente und ein {{htmlelement("article")}} Element, das das Stilvorschau-Panel darstellt. Jeder Button hat denselben `interestfor` Wert, der sich auf die `id` des `<article>` bezieht, und jeder hat eine `class`, die ein anderes Farbschema darstellt. Beachten Sie, dass das `<article>` kein `popover` Attribut gesetzt hat (Popovers sind keine Voraussetzung für die Verwendung von Interest Invokers).

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

Zuerst definieren wir die Stile für jede `class`, die auf ein `<button>` Element angewendet wird:

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

Als nächstes wenden wir Stile auf jeden Button an, auf dem Interesse gezeigt wird, indem wir die {{cssxref(":interest-source")}} Pseudo-Klasse verwenden. Dies ermöglicht es Benutzern, leicht zu sehen, welcher Button derzeit Interesse anzieht.

```css live-sample___non-popover
button:interest-source {
  background-color: black;
  color: white;
  border: 2px solid black;
}
```

Zuletzt wenden wir eine {{cssxref("transition")}} auf das Stilpanel an, so dass `all`-Eigenschaftswerte, die sich auf dem Element ändern, sanft über eine Dauer von `0.7s` animieren. Dies bedeutet, dass alle auf das Panel angewendeten Farbschema-Änderungen animiert werden.

```css live-sample___non-popover
#style-panel {
  transition: all 0.7s;
}
```

### JavaScript

In diesem Teil des Codes beginnen wir mit dem Abrufen von Referenzen auf das Stilpanel und alle Buttons. Wir erstellen auch eine Variable namens `prevStyle` und setzen sie auf `black-white`. Dies ist das anfängliche Farbschema, das auf das Panel angewendet wird, und auch der Stil, auf den das Panel zurückkehrt, wenn Interesse verloren wird.

```js live-sample___non-popover
const stylePanel = document.getElementById("style-panel");
const buttons = document.querySelectorAll("button");

let prevStyle = "black-white";
```

Als nächstes setzen wir `interest` und `loseinterest` Ereignis-Listener auf das Stilpanel. Diese Ereignisse rufen die `sampleStyle()` und `revertStyle()` Funktionen auf, um Stile zuzuweisen und zurückzusetzen, wenn Interesse an den Buttons gezeigt und verloren wird. Wir durchlaufen auch die `buttons` [`NodeList`](/de/docs/Web/API/NodeList) und fügen jedem einen `click` Ereignis-Listener hinzu, damit beim Aktivieren eines Buttons die `setStyle()` Funktion ausgeführt wird.

```js live-sample___non-popover
stylePanel.addEventListener("interest", sampleStyle);
stylePanel.addEventListener("loseinterest", revertStyle);
buttons.forEach((button) => button.addEventListener("click", setStyle));
```

Schließlich definieren wir die zuvor erwähnten Funktionen:

- `sampleStyle()`: Wenn Interesse an einem Button gezeigt wird, wird dessen `class` über `e.source.className` abgerufen (`InterestEvent.source` enthält eine Referenz auf den Interest Invoker, auf dem Interesse gezeigt wurde) und über `e.target.className` auf das Stilpanel angewendet.
- `revertStyle()`: Wenn Interesse verloren wird, kehrt das Stilpanel zu seinem vorherigen Stil zurück, der in `prevStyle` gespeichert ist.
- `setStyle()`: Wenn ein Button geklickt wird, wird dessen `className` auf das Stilpanel angewendet. Wir aktualisieren auch `prevStyle` auf den `className` des geklickten Buttons, so dass das Panel das nächste Mal, wenn ein Stil angesehen wird, zum _neuen_ vorher festgelegten Stil zurückkehren kann.

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

Dies wird wie folgt gerendert:

{{embedlivesample("non-popover", "100%", "260")}}

Versuchen Sie, einen Button zu überfahren oder zu fokussieren, um seinen Stil im Panel anzuzeigen. Ein Klick auf einen Button wendet den Stil dauerhaft an. Beachten Sie, dass das Einstellen der Styles in Browsern, die Interest Invokers nicht unterstützen, nach wie vor funktioniert, auch wenn die "Vorschau"-Funktionalität nicht gegeben ist.

## Siehe auch

- [Interest Invoker Beispiele Startseite](https://mdn.github.io/dom-examples/interest-invokers/)
- [Popover API](/de/docs/Web/API/Popover_API)
