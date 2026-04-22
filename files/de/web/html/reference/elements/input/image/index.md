---
title: '`<input type="image">` HTML-Attributwert'
short-title: <input type="image">
slug: Web/HTML/Reference/Elements/input/image
l10n:
  sourceCommit: bf5017c389132af39b50106cf1763fa7106e87b4
---

{{HTMLElement("input")}} Elemente vom Typ **`image`** werden verwendet, um grafische Submit-Buttons zu erstellen, d.h. Submit-Buttons, die die Form eines Bildes annehmen, anstatt Text.

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

Zusätzlich zu den Attributen, die von allen {{HTMLElement("input")}}-Elementen geteilt werden, unterstützen `image`-Button-Eingaben die folgenden Attribute.

### alt

Das `alt`-Attribut bietet eine alternative Zeichenfolge, um sie als Bezeichnung des Buttons zu verwenden, falls das Bild nicht angezeigt werden kann (aufgrund eines Fehlers, eines {{Glossary("user_agent", "user agent")}}, der Bilder nicht anzeigen kann oder so konfiguriert ist, dass er keine Bilder anzeigt, oder wenn der Benutzer ein Bildschirmlesegerät verwendet). Falls bereitgestellt, muss es sich um eine nicht-leere Zeichenfolge handeln, die als Bezeichnung für den Button geeignet ist.

Zum Beispiel, wenn Sie einen grafischen Button haben, der ein Bild mit einem Symbol und/oder Bildtext "Jetzt anmelden" anzeigt, sollten Sie auch das `alt`-Attribut auf etwas wie `Jetzt anmelden` setzen.

> [!NOTE]
> Auch wenn das `alt`-Attribut technisch optional ist, sollten Sie immer eines einbeziehen, um die Benutzerfreundlichkeit Ihrer Inhalte zu maximieren.

Funktional arbeitet das `alt`-Attribut des `<input type="image">`-Elements genauso wie das [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt)-Attribut auf {{HTMLElement("img")}}-Elementen.

### formaction

Ein Zeichenfolgenwert, der die URL angibt, an die die Daten übermittelt werden sollen. Dies hat Vorrang vor dem [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut des {{HTMLElement("form")}}-Elements, das das {{HTMLElement("input")}} besitzt.

Dieses Attribut ist auch auf [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit) und {{HTMLElement("button")}}-Elementen verfügbar.

### formenctype

Eine Zeichenfolge, die die Kodierungsmethode identifiziert, die bei der Übermittlung der Formulardaten an den Server verwendet werden soll. Es gibt drei zulässige Werte:

- `application/x-www-form-urlencoded`
  - : Dies ist der Standardwert, der die Formulardaten als Zeichenfolge nach {{Glossary("Percent-encoding", "percent-encoding")}} mit einem Algorithmus wie {{jsxref("encodeURI", "encodeURI()")}} sendet.
- `multipart/form-data`
  - : Verwendet die [`FormData`](/de/docs/Web/API/FormData) API zur Verwaltung der Daten, was es ermöglicht, Dateien an den Server zu senden. Sie _müssen_ diesen Kodierungstyp verwenden, wenn Ihr Formular irgendwelche {{HTMLElement("input")}}-Elemente vom [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) `file` ([`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)) enthält.
- `text/plain`
  - : Klartext; meist nur zum Debuggen nützlich, damit Sie die Daten, die übermittelt werden sollen, leicht sehen können.

Falls angegeben, überschreibt der Wert des `formenctype`-Attributs das `enctype`-Attribut des Formulars, das das Element besitzt.

Dieses Attribut ist auch auf [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit) und {{HTMLElement("button")}}-Elementen verfügbar.

### formmethod

Eine Zeichenfolge, die die HTTP-Methode angibt, die bei der Übermittlung der Formulardaten verwendet werden soll; dieser Wert überschreibt jedes [`method`](/de/docs/Web/HTML/Reference/Elements/form#method)-Attribut, das auf dem besitzenden Formular angegeben ist. Zulässige Werte sind:

- `get`
  - : Eine URL wird erstellt, indem mit der URL begonnen wird, die durch das `formaction`- oder [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut angegeben ist, dann wird ein Fragezeichen ("?") hinzugefügt und schließlich die Formulardaten kodiert wie durch `formenctype` oder die `enctype` des Formulars ([`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype) beschrieben) angehängt. Diese URL wird dann mit einer HTTP-{{HTTPMethod("get")}}-Anfrage an den Server gesendet. Diese Methode funktioniert gut für Formulare, die nur {{Glossary("ASCII", "ASCII")}}-Zeichen enthalten und keine Nebeneffekte haben. Dies ist der Standardwert.
- `post`
  - : Die Daten des Formulars sind im Körper der Anfrage enthalten, die an die durch das `formaction`- oder [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut angegebene URL gesendet wird, und verwenden eine HTTP-{{HTTPMethod("post")}}-Anfrage. Diese Methode unterstützt komplexe Daten und Dateianhänge.
- `dialog`
  - : Diese Methode wird verwendet, um anzuzeigen, dass der Button den Dialog, mit dem das Eingabeformular verbunden ist, schließt und die Formulardaten überhaupt nicht überträgt.

Dieses Attribut ist auch auf [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit) und {{HTMLElement("button")}}-Elementen verfügbar.

### formnovalidate

Ein Boolean-Attribut, das, falls vorhanden, angibt, dass das Formular vor dem Übermitteln an den Server nicht validiert werden soll. Dies überschreibt den Wert des [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate)-Attributs des besitzenden Formulars des Elements.

Dieses Attribut ist auch auf [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit) und {{HTMLElement("button")}}-Elementen verfügbar.

### formtarget

Ein String, der einen Namen oder ein Schlüsselwort spezifiziert, das angibt, wo die Antwort angezeigt werden soll, die nach dem Senden des Formulars empfangen wird. Der String muss der Name eines **Browsing-Kontextes** (das heißt ein Tab, Fenster oder {{HTMLElement("iframe")}}) sein. Ein hier angegebener Wert überschreibt jedes Ziel, das durch das [`target`](/de/docs/Web/HTML/Reference/Elements/form#target)-Attribut des {{HTMLElement("form")}} angegeben ist, das diese Eingabe besitzt.

Zusätzlich zu den tatsächlichen Namen von Tabs, Fenstern oder Inline-Frames gibt es einige spezielle Schlüsselwörter, die verwendet werden können:

- `_self`
  - : Lädt die Antwort in denselben Browsing-Kontext wie den, der das Formular enthält. Dies ersetzt das aktuelle Dokument durch die empfangenen Daten. Dies ist der Standardwert, wenn keiner angegeben ist.
- `_blank`
  - : Lädt die Antwort in einen neuen, unbenannten Browsing-Kontext. Dies ist typischerweise ein neuer Tab im selben Fenster wie das aktuelle Dokument, kann aber je nach Konfiguration des {{Glossary("user_agent", "user agent")}} verschieden sein.
- `_parent`
  - : Lädt die Antwort in den übergeordneten Browsing-Kontext des aktuellen. Falls kein übergeordneter Kontext vorhanden ist, verhält sich dies wie `_self`.
- `_top`
  - : Lädt die Antwort in den obersten Browsing-Kontext; Dies ist der Browsing-Kontext, der der oberste Vorfahr des aktuellen Kontextes ist. Wenn der aktuelle Kontext der oberste Kontext ist, verhält sich dies wie `_self`.

Dieses Attribut ist auch auf [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit) und {{HTMLElement("button")}}-Elementen verfügbar.

### height

Eine Zahl, die die Höhe in CSS-Pixeln spezifiziert, in der das durch das `src`-Attribut angegebene Bild gezeichnet werden soll.

### src

Eine Zeichenfolge, die die URL der Bilddatei spezifiziert, die angezeigt werden soll, um den grafischen Submit-Button darzustellen. Wenn der Benutzer mit dem Bild interagiert, wird die Eingabe wie jede andere Button-Eingabe verarbeitet.

### width

Eine Zahl, die angibt, in welcher Breite das Bild in CSS-Pixeln dargestellt werden soll.

## Veraltete Attribute

Das folgende Attribut wurde in HTML 4 für `image`-Eingaben definiert, aber nicht von allen Browsern implementiert und ist seitdem veraltet.

### usemap

Falls `usemap` angegeben ist, muss es der Name eines Bildkartenelements sein, {{HTMLElement("map")}}, das eine Bildkarte zur Verwendung mit dem Bild definiert. Diese Verwendung ist veraltet; Sie sollten stattdessen das {{HTMLElement("img")}}-Element verwenden, wenn Sie Bildkarten verwenden möchten.

## Verwendung von Image-Eingaben

Das `<input type="image">`-Element ist ein {{Glossary("replaced_elements", "ersetztes Element")}} (ein Element, dessen Inhalt nicht von der CSS-Schicht generiert oder direkt verwaltet wird) und verhält sich ähnlich wie ein reguläres {{htmlelement("img")}}-Element, bietet aber die Funktionen eines [Submit-Buttons](/de/docs/Web/HTML/Reference/Elements/input/submit).

### Wichtige Image-Eingabe-Features

Werfen wir einen Blick auf ein einfaches Beispiel, das alle wesentlichen Funktionen enthält, die Sie verwenden müssen (Diese funktionieren genauso wie auf dem `<img>`-Element.):

```html
<input
  id="image"
  type="image"
  width="100"
  height="30"
  alt="Login"
  src="https://raw.githubusercontent.com/mdn/learning-area/master/html/forms/image-type-example/login.png" />
```

{{EmbedLiveSample('Essential_image_input_features', 600, 50)}}

- Das [`src`](/de/docs/Web/HTML/Reference/Elements/input#src)-Attribut wird verwendet, um den Pfad zum Bild anzugeben, das im Button angezeigt werden soll.
- Das [`alt`](/de/docs/Web/HTML/Reference/Elements/input#alt)-Attribut bietet Alternativtext für das Bild, sodass Benutzer eines Bildschirmlesegeräts besser verstehen können, wofür der Button verwendet wird. Es wird auch angezeigt, wenn das Bild aus irgendeinem Grund nicht angezeigt werden kann (zum Beispiel, wenn der Pfad falsch geschrieben ist). Wenn möglich, verwenden Sie einen Text, der mit der Bezeichnung übereinstimmt, die Sie verwenden würden, wenn Sie einen standardmäßigen Submit-Button verwenden würden.
- Die [`width`](/de/docs/Web/HTML/Reference/Elements/input#width)- und [`height`](/de/docs/Web/HTML/Reference/Elements/input#height)-Attribute werden verwendet, um die Breite und Höhe festzulegen, in der das Bild in Pixel angezeigt werden soll. Der Button hat die gleiche Größe wie das Bild; wenn Sie den Klickbereich des Buttons größer als das Bild machen müssen, müssen Sie CSS verwenden (z.B. {{cssxref("padding")}}). Wenn Sie nur eine Dimension angeben, wird die andere automatisch angepasst, sodass das Bild sein ursprüngliches {{Glossary("aspect_ratio", "Seitenverhältnis")}} beibehält.

### Überschreiben von Standardformulardefinitionen

`<input type="image">`-Elemente — wie reguläre [Submit-Buttons](/de/docs/Web/HTML/Reference/Elements/input/submit) — können eine Reihe von Attributen akzeptieren, die das Standardverhalten des Formulars überschreiben:

- `formaction`
  - : Die URI eines Programms, das die vom Eingabeelement übermittelten Informationen verarbeitet; überschreibt das [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut des Formulars, das das Element besitzt.
- `formenctype`
  - : Gibt den Inhaltstyp an, der zur Übermittlung des Formulars an den Server verwendet wird. Mögliche Werte sind:
    - `application/x-www-form-urlencoded`: Der Standardwert, wenn das Attribut nicht angegeben ist.
    - `text/plain`.

    Wenn dieses Attribut angegeben ist, überschreibt es das [`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype)-Attribut des Formulars, das das Element besitzt.

- `formmethod`
  - : Gibt die HTTP-Methode an, die der Browser zur Übermittlung des Formulars verwendet. Mögliche Werte sind:
    - `post`: Die Daten des Formulars sind im Körper des Formulars enthalten und werden an den Server gesendet.
    - `get`: Die Daten des Formulars werden an die **`form`**-Attribut-URI angehängt, mit einem '?' als Trennzeichen, und die resultierende URI wird an den Server gesendet. Verwenden Sie diese Methode, wenn das Formular keine Nebeneffekte hat und nur ASCII-Zeichen enthält.

    Wenn dieses Attribut angegeben ist, überschreibt es das [`method`](/de/docs/Web/HTML/Reference/Elements/form#method)-Attribut des Formulars, das das Element besitzt.

- `formnovalidate`
  - : Ein Boolean-Attribut, das angibt, dass das Formular nicht validiert werden soll, wenn es übermittelt wird. Wenn dieses Attribut angegeben ist, überschreibt es das [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate)-Attribut des Formulars, das das Element besitzt.
- `formtarget`
  - : Ein Name oder Schlüsselwort, das angibt, wo die Antwort angezeigt werden soll, die nach dem Senden des Formulars empfangen wird. Dies ist der Name eines Browsing-Kontextes (z.B. Tab, Fenster oder Inline-Frame). Wenn dieses Attribut angegeben ist, überschreibt es das [`target`](/de/docs/Web/HTML/Reference/Elements/form#target)-Attribut des Formulars, das das Element besitzt. Die folgenden Schlüsselwörter haben spezielle Bedeutungen:
    - `_self`: Lädt die Antwort in denselben Browsing-Kontext wie den aktuellen. Dieser Wert ist Standard, wenn das Attribut nicht angegeben ist.
    - `_blank`: Lädt die Antwort in einen neuen unbenannten Browsing-Kontext.
    - `_parent`: Lädt die Antwort in den übergeordneten Browsing-Kontext des aktuellen. Hat es keinen übergeordneten Kontext, verhält sich diese Option wie `_self`.
    - `_top`: Lädt die Antwort in den obersten Browsing-Kontext (das heißt, den Browsing-Kontext, der ein Vorfahre des aktuellen ist und keinen übergeordneten Kontext hat). Hat es keinen übergeordneten Kontext, verhält sich diese Option wie `_self`.

### Verwendung der x- und y-Datenpunkte

Wenn Sie ein Formular mit einem Button vom Typ `<input type="image">` absenden, übermittelt der Browser automatisch zwei zusätzliche Datenpunkte an den Server - `x` und `y`. Sie können dies in unserem [X Y-Koordinaten-Beispiel](https://mdn.github.io/learning-area/html/forms/image-type-example/xy-coordinates-example.html) in Aktion sehen.

Wenn Sie auf das Bild klicken, um das Formular zu senden, werden die Daten als Parameter an die URL angehängt, zum Beispiel `?x=52&y=55`. Wenn das Bild-Eingabeelement ein [`name`](/de/docs/Web/HTML/Reference/Elements/input#name)-Attribut hat, dann beachten Sie, dass der angegebene Name jedem Attribut vorangestellt wird. Wenn der `name` `position` ist, würden die zurückgegebenen Koordinaten in der URL als `?position.x=52&position.y=55` formatiert. Dies gilt natürlich auch für alle anderen Attribute.

Dies sind die X- und Y-Koordinaten des Bildes, auf das die Maus geklickt hat, um das Formular abzusenden, wobei (0,0) oben links im Bild ist und die Standardwerte, falls die Übermittlung ohne Klick auf das Bild erfolgt. Diese können verwendet werden, wenn die Position, auf die das Bild geklickt wurde, von Bedeutung ist. Zum Beispiel könnten Sie eine Karte haben, die bei einem Klick die Koordinaten an den Server sendet. Der serverseitige Code berechnet dann, welcher Ort angeklickt wurde, und gibt Informationen über nahegelegene Orte zurück.

In unserem obigen Beispiel könnten wir serverseitigen Code schreiben, der berechnet, welche Farbe durch die übermittelten Koordinaten angeklickt wurde, und eine Statistik über die Lieblingsfarben der Menschen führt.

### Anpassen der Position und Skalierung des Bildes

Sie können die {{cssxref("object-position")}}-Eigenschaft verwenden, um die Positionierung des Bildes innerhalb des Rahmens des `<input>`-Elements anzupassen, und die {{cssxref("object-fit")}}-Eigenschaft, um zu steuern, wie die Größe des Bildes angepasst wird, um innerhalb des Rahmens zu passen. Dies ermöglicht Ihnen, einen Rahmen für das Bild mit den `width`- und `height`-Attributen festzulegen, um Platz im Layout vorzusehen, und dann anzupassen, wo innerhalb dieses Bereichs sich das Bild befindet und wie (oder ob) es skaliert wird, um diesen Bereich zu besetzen.

## Beispiele

### Ein Anmeldeformular

Das folgende Beispiel zeigt denselben Button wie zuvor, jedoch im Kontext eines typischen Anmeldeformulars.

{{EmbedLiveSample('A_login_form', 600, 170)}}

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

Und jetzt etwas CSS, um die Basiselemente ordentlicher anzuordnen:

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

### Anpassen der Bildposition und Skalierung

In diesem Beispiel passen wir das vorherige Beispiel an, um mehr Platz für das Bild zu schaffen und dann die tatsächliche Bildgröße und -positionierung mithilfe von {{cssxref("object-fit")}} und {{cssxref("object-position")}} anzupassen.

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

Hier ist `object-position` so konfiguriert, dass das Bild in der oberen rechten Ecke des Elements gezeichnet wird, während `object-fit` auf `contain` gesetzt ist, was anzeigt, dass das Bild in der größten Größe gezeichnet werden sollte, die in den Rahmen des Elements passt, ohne das Seitenverhältnis zu ändern. Beachten Sie den sichtbaren grauen Hintergrund des Elements, der noch in dem Bereich sichtbar ist, der nicht vom Bild abgedeckt wird.

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
      <td><strong>Unterstützte gemeinsame Attribute</strong></td>
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
      <td><strong>Methoden</strong></td>
      <td>Keine.</td>
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

- {{HTMLElement("input")}} und die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle, die es implementiert.
- Das HTML {{HTMLElement("img")}}-Element
- Positionierung und Größeneinstellung des Bildes innerhalb des `<input>`-Elementrahmens: {{cssxref("object-position")}} und {{cssxref("object-fit")}}
