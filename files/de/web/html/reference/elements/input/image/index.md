---
title: '`<input type="image">` HTML-Attributwert'
short-title: <input type="image">
slug: Web/HTML/Reference/Elements/input/image
l10n:
  sourceCommit: 3944506d4afeeed774687cf3fd950878c6229bbc
---

{{HTMLElement("input")}}-Elemente vom Typ **`image`** werden verwendet, um grafische Absenden-Buttons zu erstellen, d.h. Absenden-Buttons, die die Form eines Bildes annehmen, anstatt Text.

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

`<input type="image">`-Elemente akzeptieren keine `value`-Attribute. Der Pfad zu dem anzuzeigenden Bild wird im `src`-Attribut angegeben.

## Zusätzliche Attribute

Zusätzlich zu den von allen {{HTMLElement("input")}}-Elementen geteilten Attributen unterstützen `image`-Button-Inputs die folgenden Attribute.

### alt

Das `alt`-Attribut bietet eine alternative Zeichenkette, die als Beschriftung des Buttons verwendet wird, falls das Bild nicht angezeigt werden kann (aufgrund eines Fehlers, eines {{Glossary("user_agent", "Benutzeragenten")}}, der Bilder nicht anzeigen kann oder so konfiguriert ist, dass er dies nicht tut, oder wenn der Benutzer ein Bildschirmlesegerät verwendet). Wenn angegeben, muss es sich um eine nicht leere Zeichenkette handeln, die als Beschriftung für den Button geeignet ist.

Zum Beispiel, wenn Sie einen grafischen Button haben, der ein Bild mit einem Icon und/oder Bildtext "Jetzt einloggen" zeigt, sollten Sie auch das `alt`-Attribut auf etwas wie `Jetzt einloggen` setzen.

> [!NOTE]
> Obwohl das `alt`-Attribut technisch optional ist, sollten Sie immer eines einschließen, um die Benutzerfreundlichkeit Ihrer Inhalte zu maximieren.

Funktional arbeitet das `alt`-Attribut des `<input type="image">`-Elements genauso wie das [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt)-Attribut auf {{HTMLElement("img")}}-Elementen.

### formaction

Eine Zeichenkette, die die URL angibt, an die die Daten übermittelt werden sollen. Dies hat Vorrang vor dem [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut des das {{HTMLElement("form")}}-Element besitzenden Formulars.

Dieses Attribut ist auch auf [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit) und {{HTMLElement("button")}}-Elementen verfügbar.

### formenctype

Eine Zeichenkette, die die Kodierungsmethode angibt, die beim Übermitteln der Formulardaten an den Server verwendet werden soll. Es gibt drei erlaubte Werte:

- `application/x-www-form-urlencoded`
  - : Dies, der Standardwert, sendet die Formulardaten als eine Zeichenkette nach {{Glossary("Percent-encoding", "Percent-Encoding")}} des Textes mit einem Algorithmus wie {{jsxref("encodeURI", "encodeURI()")}}.
- `multipart/form-data`
  - : Verwendet die [`FormData`](/de/docs/Web/API/FormData)-API zur Verwaltung der Daten, was ermöglicht, dass Dateien an den Server übermittelt werden. Sie _müssen_ diesen Codierungstyp verwenden, wenn Ihr Formular irgendein {{HTMLElement("input")}}-Element vom [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) `file` ([`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)) enthält.
- `text/plain`
  - : Klartext; größtenteils nur zur Fehlersuche nützlich, da Sie die Daten, die übermittelt werden sollen, leicht sehen können.

Falls angegeben, überschreibt der Wert des `formenctype`-Attributs das `[`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype)`-Attribut des Formulars, das das Element besitzt.

Dieses Attribut ist auch auf [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit) und {{HTMLElement("button")}}-Elementen verfügbar.

### formmethod

Eine Zeichenkette, die die HTTP-Methode angibt, die beim Übermitteln der Formulardaten verwendet werden soll; dieser Wert überschreibt jedes [`method`](/de/docs/Web/HTML/Reference/Elements/form#method)-Attribut des das Element besitzenden Formulars. Erlaubte Werte sind:

- `get`
  - : Eine URL wird erstellt, beginnend mit der URL, die durch das `formaction` oder [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut angegeben ist, gefolgt von einem Fragezeichen ("?"), dann werden die Formulardaten angehängt, codiert, wie durch `formenctype` oder das `[`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype)`-Attribut des Formulars beschrieben. Diese URL wird dann unter Verwendung einer HTTP-{{HTTPMethod("get")}}-Anfrage an den Server gesendet. Diese Methode funktioniert gut für Formulare, die nur {{Glossary("ASCII", "ASCII")}}-Zeichen enthalten und keine Nebenwirkungen haben. Dies ist der Standardwert.
- `post`
  - : Die Formulardaten werden in den Körper der Anfrage aufgenommen, die an die durch das `formaction` oder [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut angegebene URL mit einer HTTP-{{HTTPMethod("post")}}-Anfrage gesendet wird. Diese Methode unterstützt komplexe Daten und Dateianhänge.
- `dialog`
  - : Diese Methode wird verwendet, um anzuzeigen, dass der Button den Dialog schließt, mit dem der Input verknüpft ist, und übermittelt die Formulardaten überhaupt nicht.

Dieses Attribut ist auch auf [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit) und {{HTMLElement("button")}}-Elementen verfügbar.

### formnovalidate

Ein boolesches Attribut, das, wenn vorhanden, angibt, dass das Formular vor der Übermittlung an den Server nicht validiert werden sollte. Dies überschreibt den Wert des `[`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate)`-Attributs des das Element besitzenden Formulars.

Dieses Attribut ist auch auf [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit) und {{HTMLElement("button")}}-Elementen verfügbar.

### formtarget

Eine Zeichenkette, die einen Namen oder ein Schlüsselwort angibt, das angibt, wo die Antwort angezeigt wird, die nach dem Absenden des Formulars empfangen wird. Die Zeichenkette muss der Name eines **Browsing-Kontextes** sein (d.h. ein Tab, Fenster oder {{HTMLElement("iframe")}}. Ein hier angegebener Wert überschreibt jeden Zielwert, der durch das [`target`](/de/docs/Web/HTML/Reference/Elements/form#target)-Attribut des das Element besitzenden Formulars angegeben ist.

Zusätzlich zu den tatsächlichen Namen der Tabs, Fenster oder Inline-Frames gibt es einige spezielle Schlüsselwörter, die verwendet werden können:

- `_self`
  - : Lädt die Antwort in denselben Browsing-Kontext, der das Formular enthält. Dies ersetzt das aktuelle Dokument mit den empfangenen Daten. Dies ist der Standardwert, wenn keiner angegeben ist.
- `_blank`
  - : Lädt die Antwort in einen neuen, unbenannten Browsing-Kontext. Dies ist typischerweise ein neuer Tab im selben Fenster wie das aktuelle Dokument, kann aber je nach Konfiguration des {{Glossary("user_agent", "Benutzeragenten")}} unterschiedlich sein.
- `_parent`
  - : Lädt die Antwort in den übergeordneten Browsing-Kontext des aktuellen. Wenn kein übergeordneter Kontext vorhanden ist, verhält sich dies genauso wie `_self`.
- `_top`
  - : Lädt die Antwort in den obersten Browsing-Kontext; dies ist der Browsing-Kontext, der der oberste Vorfahr des aktuellen Kontexts ist. Wenn der aktuelle Kontext der oberste Kontext ist, verhält sich dies genauso wie `_self`.

Dieses Attribut ist auch auf [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit) und {{HTMLElement("button")}}-Elementen verfügbar.

### height

Eine Zahl, die die Höhe in CSS-Pixeln angibt, in der das durch das `src`-Attribut angegebene Bild gezeichnet werden soll.

### src

Eine Zeichenkette, die die URL der Bilddatei angibt, die angezeigt werden soll, um den grafischen Absenden-Button darzustellen. Wenn der Benutzer mit dem Bild interagiert, wird der Input wie jeder andere Button-Input behandelt.

### width

Eine Zahl, die die Breite angibt, in der das Bild gezeichnet werden soll, in CSS-Pixeln.

## Veraltete Attribute

Das folgende Attribut wurde von HTML 4 für `image`-Inputs definiert, aber nicht von allen Browsern implementiert und ist seitdem veraltet.

### usemap

Falls `usemap` angegeben ist, muss dies der Name eines Bildkartenelements, {{HTMLElement("map")}}, sein, das eine Bildkarte definiert, die mit dem Bild verwendet werden soll. Diese Verwendung ist veraltet; Sie sollten auf das {{HTMLElement("img")}}-Element umsteigen, wenn Sie Bildkarten verwenden möchten.

## Verwendung von Bild-Inputs

Das `<input type="image">`-Element ist ein {{Glossary("replaced_elements", "Ersetzungselement")}} (ein Element, dessen Inhalt nicht von der CSS-Schicht erzeugt oder direkt verwaltet wird), das sich ähnlich verhält wie ein normales {{htmlelement("img")}}-Element, aber mit den Fähigkeiten eines [Absenden-Buttons](/de/docs/Web/HTML/Reference/Elements/input/submit).

### Wesentliche Funktionen von Bild-Inputs

Betrachten wir ein einfaches Beispiel, das alle wesentlichen Merkmale enthält, die Sie verwenden müssten (diese funktionieren genauso wie beim `<img>`-Element.):

```html
<input
  id="image"
  type="image"
  width="100"
  height="30"
  alt="Login"
  src="https://raw.githubusercontent.com/mdn/learning-area/master/html/forms/image-type-example/login.png" />
```

{{ EmbedLiveSample('Essential_image_input_features', 600, 50) }}

- Das [`src`](/de/docs/Web/HTML/Reference/Elements/input#src)-Attribut wird verwendet, um den Pfad zu dem anzuzeigenden Bild im Button anzugeben.
- Das [`alt`](/de/docs/Web/HTML/Reference/Elements/input#alt)-Attribut bietet Alt-Text für das Bild, damit Bildschirmleser-Benutzer eine bessere Vorstellung davon bekommen, wofür der Button verwendet wird. Es wird auch angezeigt, wenn das Bild aus irgendeinem Grund nicht angezeigt werden kann (zum Beispiel, wenn der Pfad falsch geschrieben ist). Wenn möglich, verwenden Sie Texte, die dem Label entsprechen, das Sie verwenden würden, wenn Sie einen Standard-Absenden-Button verwenden würden.
- Die [`width`](/de/docs/Web/HTML/Reference/Elements/input#width)- und [`height`](/de/docs/Web/HTML/Reference/Elements/input#height)-Attribute werden verwendet, um die Breite und Höhe anzugeben, in der das Bild angezeigt werden soll, in Pixeln. Der Button ist so groß wie das Bild; wenn Sie die Klickfläche des Buttons größer als das Bild benötigen, müssen Sie CSS verwenden (z.B. {{cssxref("padding")}}). Außerdem, wenn Sie nur eine Dimension angeben, wird die andere automatisch angepasst, so dass das Bild sein ursprüngliches {{Glossary("aspect_ratio", "Seitenverhältnis")}} beibehält.

### Standardverhalten von Formularen überschreiben

`<input type="image">`-Elemente — wie normale [Absende-Buttons](/de/docs/Web/HTML/Reference/Elements/input/submit) — können eine Reihe von Attributen akzeptieren, die das Standardverhalten des Formulars überschreiben:

- `formaction`
  - : Die URI eines Programms, das die vom Input-Element übermittelten Informationen verarbeitet; überschreibt das [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut des das Formular besitzenden Elements.
- `formenctype`
  - : Gibt den Typ des Inhalts an, der verwendet wird, um das Formular an den Server zu übermitteln. Mögliche Werte sind:
    - `application/x-www-form-urlencoded`: Der Standardwert, wenn das Attribut nicht angegeben ist.
    - `text/plain`.

    Wenn dieses Attribut angegeben wird, überschreibt es das `[`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype)`-Attribut des Formulars, das das Element besitzt.

- `formmethod`
  - : Gibt die HTTP-Methode an, die der Browser zum Absenden des Formulars verwendet. Mögliche Werte sind:
    - `post`: Die Daten aus dem Formular werden in den Körper des Formulars aufgenommen und an den Server gesendet.
    - `get`: Die Daten aus dem Formular werden an die **`form`**-Attribut-URI angehängt, mit einem '?' als Trennzeichen, und die resultierende URI wird an den Server gesendet. Verwenden Sie diese Methode, wenn das Formular keine Nebenwirkungen hat und nur ASCII-Zeichen enthält.

    Falls angegeben, überschreibt dieses Attribut das `[`method`](/de/docs/Web/HTML/Reference/Elements/form#method)`-Attribut des das Element besitzenden Formulars.

- `formnovalidate`
  - : Ein boolesches Attribut, das angibt, dass das Formular nicht validiert werden soll, wenn es abgesendet wird. Wenn dieses Attribut angegeben wird, überschreibt es das `[`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate)`-Attribut des das Element besitzenden Formulars.
- `formtarget`
  - : Ein Name oder Schlüsselwort, das angibt, wo die Antwort angezeigt werden soll, die nach dem Absenden des Formulars empfangen wird. Dies ist ein Name oder Schlüsselwort für einen _Browsing-Kontext_ (zum Beispiel Tab, Fenster oder Inline-Frame). Wenn dieses Attribut angegeben wird, überschreibt es das `[`target`](/de/docs/Web/HTML/Reference/Elements/form#target)`-Attribut des das Element besitzenden Formulars. Die folgenden Schlüsselwörter haben besondere Bedeutungen:
    - `_self`: Lädt die Antwort in denselben Browsing-Kontext wie den aktuellen. Dieser Wert ist der Standard, wenn das Attribut nicht angegeben ist.
    - `_blank`: Lädt die Antwort in einen neuen, unbenannten Browsing-Kontext.
    - `_parent`: Lädt die Antwort in den übergeordneten Browsing-Kontext des aktuellen. Wenn kein übergeordneter Kontext vorhanden ist, verhält sich diese Option genauso wie `_self`.
    - `_top`: Lädt die Antwort in den obersten Browsing-Kontext (d.h. den Browsing-Kontext, der ein Vorfahr des aktuellen ist und keinen Elternkontext hat). Wenn kein Elternkontext vorhanden ist, verhält sich diese Option genauso wie `_self`.

### Verwendung der x- und y-Datenpunkte

Wenn Sie ein Formular mit einem Button übermitteln, der mit `<input type="image">` erstellt wurde, werden zwei zusätzliche Datenpunkte automatisch vom Browser an den Server übermittelt — `x` und `y`. Sie können dies in unserem [X Y-Koordinaten-Beispiel](https://mdn.github.io/learning-area/html/forms/image-type-example/xy-coordinates-example.html) in Aktion sehen.

Wenn Sie auf das Bild klicken, um das Formular abzusenden, sehen Sie die Daten als Parameter an die URL angehängt, z.B. `?x=52&y=55`. Wenn das Bild-Input ein [`name`](/de/docs/Web/HTML/Reference/Elements/input#name)-Attribut hat, denken Sie daran, dass der angegebene Name jedem Attribut vorangestellt ist, sodass die zurückgegebenen Koordinaten, falls der `name` `position` ist, in der URL als `?position.x=52&position.y=55` formatiert würden. Natürlich gilt dies auch für alle anderen Attribute.

Dies sind die X- und Y-Koordinaten des Bildes, auf das geklickt wurde, um das Formular abzusenden, wobei (0,0) die obere linke Ecke des Bildes ist und der Standard, falls die Übermittlung ohne einen Klick auf dem Bild erfolgt. Diese können verwendet werden, wenn die Position, an der auf das Bild geklickt wurde, bedeutend ist, zum Beispiel wenn Sie eine Karte haben, die beim Klicken die geklickten Koordinaten an den Server sendet. Der serverseitige Code ermittelt dann, welcher Ort angeklickt wurde, und gibt Informationen über nahegelegene Orte zurück.

In unserem obigen Beispiel könnten wir serverseitigen Code schreiben, der ermittelt, welche Farbe durch die übermittelten Koordinaten angeklickt wurde, und eine Bilanz der beliebtesten Farben führt, für die die Menschen abgestimmt haben.

### Anpassung der Position und des Skalierungsalgorithmus des Bildes

Sie können die {{cssxref("object-position")}}-Eigenschaft verwenden, um die Positionierung des Bildes innerhalb des Rahmens des `<input>`-Elements anzupassen, und die {{cssxref("object-fit")}}-Eigenschaft, um zu steuern, wie die Größe des Bildes innerhalb des Rahmens angepasst wird. Dies ermöglicht es Ihnen, einen Rahmen für das Bild unter Verwendung der `width`- und `height`-Attribute zu spezifizieren, um Platz im Layout zu reservieren, dann anzupassen, wo innerhalb dieses Platzes sich das Bild befindet und wie (oder ob) es auf diese Fläche skaliert wird.

## Beispiele

### Ein Anmeldeformular

Das folgende Beispiel zeigt denselben Button wie zuvor, jedoch im Kontext eines typischen Anmeldeformulars enthalten.

{{ EmbedLiveSample('A_login_form', 600, 170) }}

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
      src="https://raw.githubusercontent.com/mdn/learning-area/master/html/forms/image-type-example/login.png"
      alt="Login"
      width="100" />
  </div>
</form>
```

#### CSS

Und nun etwas CSS, um die grundlegenden Elemente ordentlicher anzuordnen:

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

### Anpassung der Bildposition und Skalierung

In diesem Beispiel passen wir das vorherige Beispiel an, um mehr Platz für das Bild zu reservieren und dann die tatsächliche Größe und Positionierung des Bildes mit {{cssxref("object-fit")}} und {{cssxref("object-position")}} anzupassen.

{{EmbedLiveSample("Adjusting_the_image_position_and_scaling", 600, 300)}}

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
      src="https://raw.githubusercontent.com/mdn/learning-area/master/html/forms/image-type-example/login.png"
      alt="Login"
      width="200"
      height="100" />
  </div>
</form>
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

Hier ist `object-position` so konfiguriert, dass das Bild in der oberen rechten Ecke des Elements gezeichnet wird, während `object-fit` auf `contain` gesetzt ist, was bedeutet, dass das Bild in der größten Größe gezeichnet werden soll, die innerhalb der Box des Elements passt, ohne sein Seitenverhältnis zu ändern. Beachten Sie die sichtbare graue Hintergrundfläche des Elements, die noch im Bereich sichtbar ist, der nicht vom Bild bedeckt wird.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>Keiner — das <code>value</code>-Attribut sollte nicht angegeben werden.</td>
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

- {{HTMLElement("input")}} und die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle, die dies implementiert.
- Das HTML {{HTMLElement("img")}}-Element
- Positionierung und Größenanpassung des Bildes innerhalb des Rahmens des `<input>`-Elements: {{cssxref("object-position")}} und {{cssxref("object-fit")}}
