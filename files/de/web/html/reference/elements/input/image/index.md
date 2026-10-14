---
title: HTML-Attributwert `<input type="image">`
short-title: <input type="image">
slug: Web/HTML/Reference/Elements/input/image
l10n:
  sourceCommit: 46afd57950146568819d0bf98175a2ffdbe079d7
---

{{HTMLElement("input")}}-Elemente vom Typ **`image`** werden verwendet, um grafische Absende-Buttons zu erstellen, also Absende-Buttons, die statt Text ein Bild anzeigen.

{{InteractiveExample("HTML Demo: &lt;input type=&quot;image&quot;&gt;", "tabbed-standard")}}

```html interactive-example
<p>Sign in to your account:</p>

<div>
  <label for="userId">User ID</label>
  <input type="text" id="userId" name="userId" />
</div>

<input
  type="image"
  id="image"
  alt="Login"
  src="/shared-assets/images/examples/login-button.png" />
```

```css interactive-example
label {
  font-size: 0.8rem;
}

label,
input[type="image"] {
  margin-top: 1rem;
}

input[type="image"] {
  width: 80px;
}
```

## Wert

`<input type="image">`-Elemente akzeptieren kein `value`-Attribut. Der Pfad zum anzuzeigenden Bild wird im `src`-Attribut angegeben.

## Zusätzliche Attribute

Neben den Attributen, die alle {{HTMLElement("input")}}-Elemente gemeinsam haben, unterstützen Eingabeelemente vom Typ `image` die folgenden Attribute.

### alt

Das `alt`-Attribut stellt einen alternativen Text bereit, der als Beschriftung des Buttons verwendet wird, wenn das Bild nicht angezeigt werden kann – etwa aufgrund eines Fehlers, weil ein {{Glossary("user_agent", "User Agent")}} keine Bilder anzeigen kann oder entsprechend konfiguriert ist oder weil die nutzende Person einen Screenreader verwendet. Falls das Attribut angegeben wird, muss sein Wert eine nicht leere Zeichenfolge sein, die sich als Beschriftung für den Button eignet.

Wenn Sie beispielsweise einen grafischen Button mit einem Symbol und/oder dem Bildtext „Jetzt anmelden“ haben, sollten Sie auch das `alt`-Attribut auf einen entsprechenden Text setzen, etwa `Login Now`.

> [!NOTE]
> Obwohl das `alt`-Attribut technisch optional ist, sollten Sie es immer angeben, um die Nutzbarkeit Ihrer Inhalte zu verbessern.

Funktional verhält sich das `alt`-Attribut des `<input type="image">`-Elements genauso wie das [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt)-Attribut von {{HTMLElement("img")}}-Elementen.

### formaction

Eine Zeichenfolge mit der URL, an die die Daten gesendet werden. Sie hat Vorrang vor dem [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut des {{HTMLElement("form")}}-Elements, zu dem das {{HTMLElement("input")}} gehört.

Dieses Attribut ist auch für [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit)- und {{HTMLElement("button")}}-Elemente verfügbar.

### formenctype

Eine Zeichenfolge, die das beim Senden der Formulardaten an den Server zu verwendende Kodierungsverfahren festlegt. Drei Werte sind zulässig:

- `application/x-www-form-urlencoded`
  - : Der Standardwert. Die Formulardaten werden als Zeichenfolge gesendet, nachdem der Text mithilfe eines Algorithmus wie {{jsxref("encodeURI", "encodeURI()")}} {{Glossary("Percent-encoding", "prozentkodiert")}} wurde.
- `multipart/form-data`
  - : Verwendet die [`FormData`](/de/docs/Web/API/FormData)-API zur Verwaltung der Daten und ermöglicht so, Dateien an den Server zu senden. Sie _müssen_ diesen Kodierungstyp verwenden, wenn Ihr Formular {{HTMLElement("input")}}-Elemente mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) `file` ([`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)) enthält.
- `text/plain`
  - : Reiner Text; hauptsächlich für das Debugging nützlich, da Sie die zu sendenden Daten leicht erkennen können.

Falls angegeben, überschreibt der Wert des `formenctype`-Attributs das [`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype)-Attribut des zugehörigen Formulars.

Dieses Attribut ist auch für [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit)- und {{HTMLElement("button")}}-Elemente verfügbar.

### formmethod

Eine Zeichenfolge, die die beim Senden der Formulardaten zu verwendende HTTP-Methode angibt. Dieser Wert überschreibt das [`method`](/de/docs/Web/HTML/Reference/Elements/form#method)-Attribut des zugehörigen Formulars. Zulässige Werte sind:

- `get`
  - : Eine URL wird erstellt, indem an die durch das `formaction`- oder [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut angegebene URL zunächst ein Fragezeichen („?“) und dann die Formulardaten angehängt werden. Die Daten werden dabei entsprechend `formenctype` oder dem [`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype)-Attribut des Formulars kodiert. Anschließend wird diese URL mit einer HTTP-{{HTTPMethod("get")}}-Anfrage an den Server gesendet. Diese Methode eignet sich für Formulare, die nur {{Glossary("ASCII", "ASCII")}}-Zeichen enthalten und keine Seiteneffekte haben. Dies ist der Standardwert.
- `post`
  - : Die Formulardaten werden in den Body der Anfrage aufgenommen, die mit einer HTTP-{{HTTPMethod("post")}}-Anfrage an die durch das `formaction`- oder [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut angegebene URL gesendet wird. Diese Methode unterstützt komplexe Daten und Dateianhänge.
- `dialog`
  - : Diese Methode gibt an, dass der Button den Dialog schließt, dem das Eingabeelement zugeordnet ist. Die Formulardaten werden dabei nicht übertragen.

Dieses Attribut ist auch für [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit)- und {{HTMLElement("button")}}-Elemente verfügbar.

### formnovalidate

Ein boolesches Attribut, das festlegt, dass das Formular vor dem Senden an den Server nicht validiert werden soll. Es überschreibt den Wert des [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate)-Attributs des zugehörigen Formulars.

Dieses Attribut ist auch für [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit)- und {{HTMLElement("button")}}-Elemente verfügbar.

### formtarget

Eine Zeichenfolge mit einem Namen oder Schlüsselwort, die angibt, wo die nach dem Senden des Formulars empfangene Antwort angezeigt werden soll. Die Zeichenfolge muss der Name eines **Browsing-Kontexts** sein, also etwa eines Tabs, Fensters oder {{HTMLElement("iframe")}}-Elements. Ein hier angegebener Wert überschreibt das [`target`](/de/docs/Web/HTML/Reference/Elements/form#target)-Attribut des {{HTMLElement("form")}}-Elements, zu dem dieses Eingabeelement gehört.

Neben den Namen von Tabs, Fenstern oder Inlineframes können einige besondere Schlüsselwörter verwendet werden:

- `_self`
  - : Lädt die Antwort in denselben Browsing-Kontext, der das Formular enthält. Dadurch wird das aktuelle Dokument durch die empfangenen Daten ersetzt. Dies ist der Standardwert, wenn kein Wert angegeben wird.
- `_blank`
  - : Lädt die Antwort in einen neuen, unbenannten Browsing-Kontext. Üblicherweise ist dies ein neuer Tab im selben Fenster wie das aktuelle Dokument; abhängig von der Konfiguration des {{Glossary("user_agent", "User Agents")}} kann das Verhalten jedoch abweichen.
- `_parent`
  - : Lädt die Antwort in den übergeordneten Browsing-Kontext des aktuellen Kontexts. Wenn kein übergeordneter Kontext vorhanden ist, verhält sich dieser Wert wie `_self`.
- `_top`
  - : Lädt die Antwort in den obersten Browsing-Kontext, also den obersten Vorfahren des aktuellen Kontexts. Wenn der aktuelle Kontext bereits der oberste ist, verhält sich dieser Wert wie `_self`.

Dieses Attribut ist auch für [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit)- und {{HTMLElement("button")}}-Elemente verfügbar.

### height

Eine Zahl, die die Höhe in CSS-Pixeln angibt, mit der das durch das `src`-Attribut festgelegte Bild dargestellt wird.

### src

Eine Zeichenfolge mit der URL der Bilddatei, die als grafischer Absende-Button angezeigt werden soll. Wenn die nutzende Person mit dem Bild interagiert, wird das Eingabeelement wie jeder andere Button behandelt.

### width

Eine Zahl, die die Breite in CSS-Pixeln angibt, mit der das Bild dargestellt wird.

## Veraltete Attribute

Das folgende Attribut wurde in HTML 4 für Eingabeelemente vom Typ `image` definiert, jedoch nicht von allen Browsern implementiert und ist inzwischen veraltet.

### usemap

Wenn `usemap` angegeben wird, muss sein Wert der Name eines {{HTMLElement("map")}}-Elements sein, das eine mit dem Bild zu verwendende Image-Map definiert. Diese Verwendung ist veraltet. Wenn Sie Image-Maps verwenden möchten, sollten Sie stattdessen das {{HTMLElement("img")}}-Element verwenden.

## Bildbasierte Eingabeelemente verwenden

Das `<input type="image">`-Element ist ein {{Glossary("replaced_elements", "ersetztes Element")}} – ein Element, dessen Inhalt nicht von der CSS-Ebene erzeugt oder direkt verwaltet wird. Es verhält sich weitgehend wie ein gewöhnliches {{htmlelement("img")}}-Element, bietet aber zusätzlich die Funktionen eines [Absende-Buttons](/de/docs/Web/HTML/Reference/Elements/input/submit).

### Wesentliche Eigenschaften bildbasierter Eingabeelemente

Sehen wir uns ein einfaches Beispiel mit allen wesentlichen Eigenschaften an, die Sie benötigen. Diese funktionieren genauso wie beim `<img>`-Element:

```html
<input
  id="image"
  type="image"
  width="100"
  height="30"
  alt="Login"
  src="https://mdn.github.io/shared-assets/images/examples/login-button.png" />
```

{{ EmbedLiveSample('Essential_image_input_features', 600, 50) }}

- Mit dem [`src`](/de/docs/Web/HTML/Reference/Elements/input#src)-Attribut geben Sie den Pfad zu dem Bild an, das im Button angezeigt werden soll.
- Das [`alt`](/de/docs/Web/HTML/Reference/Elements/input#alt)-Attribut stellt einen Alternativtext für das Bild bereit, damit Personen, die einen Screenreader verwenden, den Zweck des Buttons besser erkennen können. Der Text wird auch angezeigt, wenn das Bild aus irgendeinem Grund nicht dargestellt werden kann, beispielsweise wegen eines falsch geschriebenen Pfads. Verwenden Sie nach Möglichkeit einen Text, der der Beschriftung eines gewöhnlichen Absende-Buttons entspricht.
- Mit den Attributen [`width`](/de/docs/Web/HTML/Reference/Elements/input#width) und [`height`](/de/docs/Web/HTML/Reference/Elements/input#height) legen Sie die Breite und Höhe fest, mit denen das Bild in Pixeln angezeigt werden soll. Der Button hat dieselbe Größe wie das Bild. Wenn die anklickbare Fläche des Buttons größer als das Bild sein soll, müssen Sie CSS verwenden, beispielsweise {{cssxref("padding")}}. Wenn Sie nur eine Abmessung angeben, wird die andere automatisch so angepasst, dass das ursprüngliche {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Bildes erhalten bleibt.

### Standardverhalten des Formulars überschreiben

`<input type="image">`-Elemente können – wie gewöhnliche [Absende-Buttons](/de/docs/Web/HTML/Reference/Elements/input/submit) – verschiedene Attribute verwenden, die das Standardverhalten des Formulars überschreiben:

- `formaction`
  - : Der URI eines Programms, das die vom Eingabeelement gesendeten Informationen verarbeitet. Überschreibt das [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut des zugehörigen Formulars.
- `formenctype`
  - : Gibt den Inhaltstyp an, der beim Senden des Formulars an den Server verwendet wird. Mögliche Werte sind:
    - `application/x-www-form-urlencoded`: Der Standardwert, wenn das Attribut nicht angegeben wird.
    - `text/plain`.

    Wenn dieses Attribut angegeben wird, überschreibt es das [`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype)-Attribut des zugehörigen Formulars.

- `formmethod`
  - : Gibt die HTTP-Methode an, die der Browser zum Senden des Formulars verwendet. Mögliche Werte sind:
    - `post`: Die Formulardaten werden in den Body der Anfrage aufgenommen und an den Server gesendet.
    - `get`: Die Formulardaten werden an den URI des **`form`**-Attributs angehängt, wobei ein „?“ als Trennzeichen dient. Der resultierende URI wird an den Server gesendet. Verwenden Sie diese Methode, wenn das Formular keine Seiteneffekte hat und nur ASCII-Zeichen enthält.

    Wenn dieses Attribut angegeben wird, überschreibt es das [`method`](/de/docs/Web/HTML/Reference/Elements/form#method)-Attribut des zugehörigen Formulars.

- `formnovalidate`
  - : Ein boolesches Attribut, das festlegt, dass das Formular beim Senden nicht validiert wird. Wenn dieses Attribut angegeben wird, überschreibt es das [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate)-Attribut des zugehörigen Formulars.
- `formtarget`
  - : Ein Name oder Schlüsselwort, das angibt, wo die nach dem Senden des Formulars empfangene Antwort angezeigt werden soll. Es bezeichnet einen _Browsing-Kontext_, beispielsweise einen Tab, ein Fenster oder einen Inlineframe. Wenn dieses Attribut angegeben wird, überschreibt es das [`target`](/de/docs/Web/HTML/Reference/Elements/form#target)-Attribut des zugehörigen Formulars. Die folgenden Schlüsselwörter haben besondere Bedeutungen:
    - `_self`: Lädt die Antwort in denselben Browsing-Kontext wie den aktuellen. Dies ist der Standardwert, wenn das Attribut nicht angegeben wird.
    - `_blank`: Lädt die Antwort in einen neuen, unbenannten Browsing-Kontext.
    - `_parent`: Lädt die Antwort in den übergeordneten Browsing-Kontext des aktuellen Kontexts. Wenn kein übergeordneter Kontext vorhanden ist, verhält sich diese Option wie `_self`.
    - `_top`: Lädt die Antwort in den obersten Browsing-Kontext, also einen Vorfahren des aktuellen Kontexts ohne übergeordneten Kontext. Wenn kein übergeordneter Kontext vorhanden ist, verhält sich diese Option wie `_self`.

### Die x- und y-Koordinaten verwenden

Wenn Sie ein Formular mit einem durch `<input type="image">` erstellten Button absenden, übermittelt der Browser automatisch zwei zusätzliche Datenpunkte an den Server: `x` und `y`. Wie das funktioniert, zeigt unser [Beispiel für X- und Y-Koordinaten](https://mdn.github.io/learning-area/html/forms/image-type-xy-coords/).

Wenn Sie auf das Bild klicken, um das Formular abzusenden, werden die Daten als Parameter an die URL angehängt, beispielsweise `?x=52&y=55`. Hat das bildbasierte Eingabeelement ein [`name`](/de/docs/Web/HTML/Reference/Elements/input#name)-Attribut, wird der angegebene Name mit einem Punkt als Trennzeichen vor den Namen jedes Koordinateneintrags gesetzt. Wenn `name` beispielsweise `position` lautet, werden die zurückgegebenen Koordinaten in der URL als `?position.x=52&position.y=55` formatiert.

Dies sind die X- und Y-Koordinaten der Stelle im Bild, auf die mit der Maus geklickt wurde, um das Formular abzusenden. Der Punkt (0,0) liegt oben links im Bild und wird als Standardwert verwendet, wenn das Formular ohne Klick auf das Bild abgesendet wird. Die Koordinaten sind nützlich, wenn es darauf ankommt, an welcher Stelle auf das Bild geklickt wurde. Beispielsweise könnte eine Karte beim Anklicken die Koordinaten der angeklickten Stelle an den Server senden. Serverseitiger Code ermittelt dann, welcher Ort angeklickt wurde, und gibt Informationen zu nahe gelegenen Orten zurück.

Im obigen Beispiel könnten wir serverseitigen Code schreiben, der anhand der übermittelten Koordinaten ermittelt, welche Farbe angeklickt wurde, und die Stimmen für die Lieblingsfarben zählt.

### Bildposition und Skalierungsverfahren anpassen

Mit der Eigenschaft {{cssxref("object-position")}} können Sie die Position des Bildes innerhalb des Rahmens des `<input>`-Elements anpassen. Mit {{cssxref("object-fit")}} steuern Sie, wie die Bildgröße an den Rahmen angepasst wird. So können Sie mithilfe der Attribute `width` und `height` einen Rahmen für das Bild festlegen und Platz im Layout reservieren. Anschließend können Sie bestimmen, wo sich das Bild innerhalb dieses Bereichs befindet und wie – oder ob – es skaliert wird, um den Bereich auszufüllen.

## Beispiele

### Ein Anmeldeformular

Das folgende Beispiel zeigt denselben Button wie zuvor, diesmal jedoch innerhalb eines typischen Anmeldeformulars.

#### HTML

```html
<form>
  <p>Login to your account</p>
  <div>
    <label for="userId">User ID</label>
    <input type="text" id="userId" name="userId" />
  </div>
  <div>
    <label for="pwd">Password</label>
    <input type="password" id="pwd" name="pwd" />
  </div>
  <div>
    <input
      id="image"
      type="image"
      src="https://mdn.github.io/shared-assets/images/examples/login-button.png"
      alt="Login"
      width="100" />
  </div>
</form>
```

```js hidden
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
});
```

#### CSS

Nun fügen wir etwas CSS hinzu, um die grundlegenden Elemente übersichtlicher anzuordnen:

```css
div {
  margin-bottom: 10px;
}

label {
  display: inline-block;
  width: 70px;
  text-align: right;
  padding-right: 10px;
}
```

#### Ergebnis

{{ EmbedLiveSample('A_login_form', 600, 170) }}

### Bildposition und Skalierung anpassen

In diesem Beispiel passen wir das vorherige Beispiel an: Wir reservieren mehr Platz für das Bild und ändern dann mit {{cssxref("object-fit")}} und {{cssxref("object-position")}} seine tatsächliche Größe und Position.

#### HTML

```html
<form>
  <p>Login to your account</p>
  <div>
    <label for="userId">User ID</label>
    <input type="text" id="userId" name="userId" />
  </div>
  <div>
    <label for="pwd">Password</label>
    <input type="password" id="pwd" name="pwd" />
  </div>
  <div>
    <input
      id="image"
      type="image"
      src="https://mdn.github.io/shared-assets/images/examples/login-button.png"
      alt="Login"
      width="100" />
  </div>
</form>
```

```js hidden
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
});
```

#### CSS

```css
div {
  margin-bottom: 10px;
}

label {
  display: inline-block;
  width: 70px;
  text-align: right;
  padding-right: 10px;
}

#image {
  object-position: right top;
  object-fit: contain;
  background-color: #dddddd;
}
```

#### Ergebnis

{{EmbedLiveSample("Adjusting_the_image_position_and_scaling", 600, 300)}}

Hier ist `object-position` so eingestellt, dass das Bild in der oberen rechten Ecke des Elements dargestellt wird. `object-fit` ist auf `contain` gesetzt. Dadurch wird das Bild so groß wie möglich dargestellt, ohne dass es über die Box des Elements hinausragt oder sich sein Seitenverhältnis ändert. Der graue Hintergrund des Elements bleibt in dem Bereich sichtbar, den das Bild nicht bedeckt.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>Keiner – das Attribut <code>value</code> sollte nicht angegeben werden.</td>
    </tr>
    <tr>
      <td><strong>Ereignisse</strong></td>
      <td>Keine.</td>
    </tr>
    <tr>
      <td><strong>Unterstützte allgemeine Attribute</strong></td>
      <td>
        <a href="/de/docs/Web/HTML/Reference/Elements/input#alt"><code>alt</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#src"><code>src</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#width"><code>width</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#height"><code>height</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#formaction"><code>formaction</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#formenctype"><code>formenctype</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#formmethod"><code>formmethod</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#formmethod"><code>formnovalidate</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#formtarget"><code>formtarget</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>IDL-Attribute</strong></td>
      <td>Keine.</td>
    </tr>
    <tr>
      <td><strong>DOM-Schnittstelle</strong></td>
      <td><p>[`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)</p></td>
    </tr>
    <tr>
      <td><strong>Implizite ARIA-Rolle</strong></td>
      <td><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role"><code>button</code></a></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("input")}} und die zugehörige [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle.
- Das HTML-Element {{HTMLElement("img")}}
- Positionierung und Größenanpassung des Bildes innerhalb des Rahmens des `<input>`-Elements: {{cssxref("object-position")}} und {{cssxref("object-fit")}}
