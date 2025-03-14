---
title: <input type="image">
slug: Web/HTML/Element/input/image
l10n:
  sourceCommit: c8ff2398fa61950fe46f2d9155a105c125bfea83
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente vom Typ **`image`** werden verwendet, um grafische Absende-Buttons zu erstellen, d.h. Absende-Buttons, die in Form eines Bildes anstelle von Text angezeigt werden.

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

Neben den Attributen, die alle {{HTMLElement("input")}}-Elemente teilen, unterstützen `image`-Button-Eingaben die folgenden Attribute.

### alt

Das `alt`-Attribut liefert eine alternative Zeichenkette als Label für den Button, falls das Bild nicht angezeigt werden kann (aufgrund eines Fehlers, einem {{Glossary("user_agent", "Benutzeragent")}}, der keine Bilder anzeigen kann oder so konfiguriert ist, dass er sie nicht zeigt, oder wenn der Benutzer ein Bildschirmlesegerät benutzt). Wenn angegeben, muss es eine nicht-leere Zeichenkette sein, die als Label für den Button geeignet ist.

Zum Beispiel, wenn Sie einen grafischen Button haben, der ein Bild mit einem Symbol und/oder Text zeigt, wie "Jetzt einloggen", sollten Sie auch das `alt`-Attribut auf etwas wie `Jetzt einloggen` setzen.

> [!NOTE]
> Obwohl das `alt`-Attribut technisch optional ist, sollten Sie immer eines einfügen, um die Benutzerfreundlichkeit Ihres Inhalts zu maximieren.

Funktional funktioniert das `alt`-Attribut des `<input type="image">`-Elements genauso wie das [`alt`](/de/docs/Web/HTML/Element/img#alt)-Attribut auf {{HTMLElement("img")}}-Elementen.

### formaction

Eine Zeichenkette, die die URL angibt, an die die Daten gesendet werden sollen. Diese hat Vorrang vor dem [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut des {{HTMLElement("form")}}-Elements, das das {{HTMLElement("input")}}-Element besitzt.

Dieses Attribut ist auch auf [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) und {{HTMLElement("button")}}-Elementen verfügbar.

### formenctype

Eine Zeichenkette, die die Codierungsmethode identifiziert, die beim Senden der Formulardaten an den Server verwendet werden soll. Es gibt drei zulässige Werte:

- `application/x-www-form-urlencoded`
  - : Dies, der Standardwert, sendet die Formulardaten als Zeichenkette nach {{Glossary("Percent-encoding", "Percent-Encoding")}} des Textes mit einem Algorithmus wie {{jsxref("encodeURI", "encodeURI()")}}.
- `multipart/form-data`
  - : Verwendet die [`FormData`](/de/docs/Web/API/FormData)-API zur Verwaltung der Daten, was das Hochladen von Dateien auf den Server ermöglicht. Sie _müssen_ diesen Codierungstyp verwenden, wenn Ihr Formular irgendwelche {{HTMLElement("input")}}-Elemente vom [`type`](/de/docs/Web/HTML/Element/input#type) `file` ([`<input type="file">`](/de/docs/Web/HTML/Element/input/file)) enthält.
- `text/plain`
  - : Nur-Text; hauptsächlich nützlich zum Debuggen, damit Sie die zu sendenden Daten leicht sehen können.

Wenn angegeben, überschreibt der Wert des `formenctype`-Attributs das [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut des Formulars, dem das Element gehört.

Dieses Attribut ist auch auf [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) und {{HTMLElement("button")}}-Elementen verfügbar.

### formmethod

Eine Zeichenkette, die die HTTP-Methode angibt, die beim Senden der Formulardaten verwendet werden soll; dieser Wert überschreibt jedes [`method`](/de/docs/Web/HTML/Element/form#method)-Attribut, das dem Besitz des Formulars gegeben wird. Zulässige Werte sind:

- `get`
  - : Eine URL wird konstruiert, indem mit der URL begonnen wird, die vom `formaction`- oder [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut angegeben wird, ein Fragezeichen ("?") angefügt wird, und dann die Daten des Formulars angefügt werden, die durch `formenctype` oder das [`enctype`](/de/docs/Web/HTML/Element/form#enctype)-Attribut des Formulars beschrieben werden. Diese URL wird dann an den Server unter Verwendung einer HTTP {{HTTPMethod("get")}}-Anfrage gesendet. Diese Methode funktioniert gut für Formulare, die nur {{Glossary("ASCII", "ASCII")}}-Zeichen enthalten und keine Nebeneffekte haben. Dies ist der Standardwert.
- `post`
  - : Die Daten des Formulars sind im Hauptteil der Anfrage enthalten, die an die vom `formaction`- oder [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut angegebene URL unter Verwendung einer HTTP {{HTTPMethod("post")}}-Anfrage gesendet wird. Diese Methode unterstützt komplexe Daten und Dateianhänge.
- `dialog`
  - : Diese Methode wird verwendet, um anzugeben, dass der Button den Dialog schließt, mit dem die Eingabe verknüpft ist, und die Formulardaten überhaupt nicht überträgt.

Dieses Attribut ist auch auf [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) und {{HTMLElement("button")}}-Elementen verfügbar.

### formnovalidate

Ein Boolesches Attribut, das angibt, dass das Formular vor dem Senden an den Server nicht validiert werden soll. Dies überschreibt den Wert des [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate)-Attributs des Besitzformulars des Elements.

Dieses Attribut ist auch auf [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) und {{HTMLElement("button")}}-Elementen verfügbar.

### formtarget

Eine Zeichenkette, die einen Namen oder ein Schlüsselwort angibt, das angibt, wo die Antwort ausgegeben werden soll, die nach dem Senden des Formulars empfangen wird. Die Zeichenkette muss der Name eines **Browsing-Kontexts** sein (d.h. eines Tabs, Fensters oder {{HTMLElement("iframe")}}. Ein hier angegebener Wert überschreibt jedes Ziel, das vom [`target`](/de/docs/Web/HTML/Element/form#target)-Attribut im {{HTMLElement("form")}} des Besitzes dieses Inputs angegeben wird.

Zusätzlich zu den tatsächlichen Namen von Tabs, Fenstern oder Inline-Frames gibt es einige spezielle Schlüsselwörter, die verwendet werden können:

- `_self`
  - : Lädt die Antwort in denselben Browsing-Kontext, der das Formular enthält. Dies ersetzt das aktuelle Dokument durch die empfangenen Daten. Dies ist der Standardwert, wenn keiner angegeben ist.
- `_blank`
  - : Lädt die Antwort in einen neuen, unbenannten Browsing-Kontext. Dies ist typischerweise ein neuer Tab im selben Fenster wie das aktuelle Dokument, kann jedoch je nach Konfiguration des {{Glossary("user_agent", "Benutzeragent")}} variieren.
- `_parent`
  - : Lädt die Antwort in den übergeordneten Browsing-Kontext des aktuellen. Wenn es keinen übergeordneten Kontext gibt, verhält es sich genauso wie `_self`.
- `_top`
  - : Lädt die Antwort in den Browsing-Kontext auf höchster Ebene; dies ist der Browsing-Kontext, der der oberste Vorfahr des aktuellen Kontexts ist. Wenn der aktuelle Kontext der oberste Kontext ist, verhält es sich genauso wie `_self`.

Dieses Attribut ist auch auf [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) und {{HTMLElement("button")}}-Elementen verfügbar.

### height

Eine Zahl, die die Höhe in CSS-Pixeln angibt, in der das durch das `src`-Attribut spezifizierte Bild gezeichnet werden soll.

### src

Eine Zeichenkette, die die URL der Bilddatei angibt, die angezeigt werden soll, um den grafischen Absende-Button darzustellen. Wenn der Benutzer mit dem Bild interagiert, wird die Eingabe wie jede andere Button-Eingabe behandelt.

### width

Eine Zahl, die angibt, in welcher Breite das Bild in CSS-Pixeln gezeichnet werden soll.

## Veraltete Attribute

Das folgende Attribut wurde von HTML 4 für `image`-Inputs definiert, war jedoch nicht von allen Browsern implementiert und ist seitdem veraltet.

### usemap

Wenn `usemap` angegeben ist, muss es der Name eines Bildkarten-Elements, {{HTMLElement("map")}}, sein, das eine Bildkarte definiert, die mit dem Bild verwendet werden soll. Diese Verwendung ist obsolet; Sie sollten zu {{HTMLElement("img")}}-Elementen wechseln, wenn Sie Bildkarten verwenden möchten.

## Verwendung von Bild-Inputs

Das `<input type="image">`-Element ist ein {{Glossary("replaced_elements", "ersetztes Element")}} (ein Element, dessen Inhalt nicht von der CSS-Schicht erzeugt oder direkt verwaltet wird) und verhält sich ähnlich wie ein reguläres {{htmlelement("img")}}-Element, jedoch mit den Fähigkeiten eines [Absende-Buttons](/de/docs/Web/HTML/Element/input/submit).

### Wesentliche Funktionen von Bild-Inputs

Schauen wir uns ein einfaches Beispiel an, das alle wesentlichen Funktionen enthält, die Sie verwenden müssten (Diese funktionieren genau so, wie sie es beim `<img>`-Element tun.):

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

- Das [`src`](/de/docs/Web/HTML/Element/input#src)-Attribut wird verwendet, um den Pfad zu dem Bild zu spezifizieren, das im Button angezeigt werden soll.
- Das [`alt`](/de/docs/Web/HTML/Element/input#alt)-Attribut bietet Alternativtext für das Bild, sodass Benutzer des Bildschirmlesers eine bessere Vorstellung davon erhalten, wofür der Button verwendet wird. Es wird auch angezeigt, wenn das Bild aus irgendeinem Grund nicht angezeigt werden kann (zum Beispiel wenn der Pfad falsch geschrieben ist). Wenn möglich, verwenden Sie Text, der zum Label passt, das Sie verwenden würden, wenn Sie einen Standard-Absende-Button verwenden würden.
- Die [`width`](/de/docs/Web/HTML/Element/input#width)- und [`height`](/de/docs/Web/HTML/Element/input#height)-Attribute werden verwendet, um die Breite und Höhe zu spezifizieren, in der das Bild angezeigt werden soll, in Pixeln. Der Button hat dieselbe Größe wie das Bild; wenn Sie die Trefferfläche des Buttons größer als das Bild machen müssen, müssen Sie CSS verwenden (z.B. {{cssxref("padding")}}). Außerdem, wenn Sie nur eine Dimension angeben, wird die andere automatisch so angepasst, dass das Bild sein ursprüngliches {{Glossary("aspect_ratio", "Seitenverhältnis")}} beibehält.

### Überschreiben von Standardformular-Verhalten

`<input type="image">`-Elemente – ähnlich wie reguläre [Absende-Buttons](/de/docs/Web/HTML/Element/input/submit) – können eine Reihe von Attributen akzeptieren, die das Standardformular-Verhalten überschreiben:

- `formaction`
  - : Die URI eines Programms, das die Informationen verarbeitet, die vom Eingabeelement gesendet werden; überschreibt das [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut des Formularelements, dem es gehört.
- `formenctype`

  - : Gibt den Datentyp an, der verwendet wird, um das Formular an den Server zu senden. Mögliche Werte sind:

    - `application/x-www-form-urlencoded`: Der Standardwert, wenn das Attribut nicht angegeben ist.
    - `text/plain`.

    Wenn dieses Attribut angegeben ist, überschreibt es das [`enctype`](/de/docs/Web/HTML/Element/form#enctype)-Attribut des Formularelements, dem es gehört.

- `formmethod`

  - : Gibt die HTTP-Methode an, die der Browser verwendet, um das Formular zu senden. Mögliche Werte sind:

    - `post`: Die Formulardaten werden im Hauptteil des Formulars enthalten und an den Server gesendet.
    - `get`: Die Formulardaten werden der **`form`**-Attribut-URI angehängt, mit einem '?' als Trennzeichen, und die resultierende URI wird an den Server gesendet. Verwenden Sie diese Methode, wenn das Formular keine Nebeneffekte hat und nur ASCII-Zeichen enthält.

    Wenn angegeben, überschreibt dieses Attribut das [`method`](/de/docs/Web/HTML/Element/form#method)-Attribut des Formularelements, dem es gehört.

- `formnovalidate`
  - : Ein Boolesches Attribut, das angibt, dass das Formular nicht validiert werden soll, wenn es gesendet wird. Wenn dieses Attribut angegeben ist, überschreibt es das [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate)-Attribut des Formularelements, dem es gehört.
- `formtarget`

  - : Ein Name oder Schlüsselwort, das angibt, wo die Antwort angezeigt werden soll, die nach dem Absenden des Formulars empfangen wird. Dies ist ein Name oder Schlüsselwort für einen _Browsing-Kontext_ (zum Beispiel Tab, Fenster oder Inline-Frame). Wenn dieses Attribut angegeben ist, überschreibt es das [`target`](/de/docs/Web/HTML/Element/form#target)-Attribut des Formularelements, dem es gehört. Die folgenden Schlüsselwörter haben spezielle Bedeutungen:

    - `_self`: Lädt die Antwort in denselben Browsing-Kontext wie den aktuellen. Dieser Wert ist der Standard, wenn das Attribut nicht angegeben ist.
    - `_blank`: Lädt die Antwort in einen neuen unbenannten Browsing-Kontext.
    - `_parent`: Lädt die Antwort in den übergeordneten Browsing-Kontext des aktuellen. Wenn es keinen übergeordneten gibt, verhält sich diese Option genauso wie `_self`.
    - `_top`: Lädt die Antwort in den obersten Browsing-Kontext (d.h. den Browsing-Kontext, der ein Vorfahr des aktuellen ist und keinen Elternkontext hat). Wenn es keinen Elternkontext gibt, verhält sich diese Option genauso wie `_self`.

### Verwendung der x- und y-Datenpunkte

Wenn Sie ein Formular mit einem über `<input type="image">` erstellten Button absenden, werden zwei zusätzliche Datenpunkte automatisch vom Browser an den Server übergeben – `x` und `y`. Sie können dies in unserem [X Y-Koordinatenbeispiel](https://mdn.github.io/learning-area/html/forms/image-type-example/xy-coordinates-example.html) in Aktion sehen.

Wenn Sie auf das Bild klicken, um das Formular abzusenden, werden Sie sehen, dass die Daten als Parameter an die URL angehängt werden, zum Beispiel `?x=52&y=55`. Wenn das Bildinput ein [`name`](/de/docs/Web/HTML/Element/input#name)-Attribut hat, dann wird der angegebene Name jedem Attribut vorangestellt, sodass wenn der `name` `position` ist, dann werden die zurückgegebenen Koordinaten in der URL als `?position.x=52&position.y=55` formatiert. Dies gilt natürlich auch für alle anderen Attribute.

Dies sind die X- und Y-Koordinaten des Bildes, auf das die Maus geklickt hat, um das Formular abzusenden, wobei (0,0) die obere linke Ecke des Bildes ist und der Standard, falls die Übermittlung ohne Klick auf das Bild erfolgt. Diese können verwendet werden, wenn die Position, auf die das Bild geklickt wurde, von Bedeutung ist. Zum Beispiel könnten Sie eine Karte haben, die beim Anklicken die Koordinaten an den Server sendet, die angeklickt wurden. Der Servercode ermittelt dann, welcher Ort angeklickt wurde, und gibt Informationen über Orte in der Nähe zurück.

In unserem obigen Beispiel könnten wir Servercode schreiben, der ermittelt, welche Farbe durch die eingereichten Koordinaten angeklickt wurde, und eine Liste der Lieblingsfarben führt, für die die Leute gestimmt haben.

### Anpassen der Position und des Skalierungsalgorithmus des Bildes

Sie können die {{cssxref("object-position")}}-Eigenschaft verwenden, um die Positionierung des Bildes innerhalb des `<input>`-Rahmens anzupassen, und die {{cssxref("object-fit")}}-Eigenschaft, um zu kontrollieren, wie die Größe des Bildes angepasst wird, um in den Rahmen zu passen. Dies ermöglicht es Ihnen, einen Rahmen für das Bild mit den `width`- und `height`-Attributen zu spezifizieren, um Platz im Layout bereitzustellen und dann zu bestimmen, wo innerhalb dieses Platzes sich das Bild befindet und wie (oder ob) es skaliert wird, um diesen Platz zu belegen.

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

Und jetzt etwas CSS, um die grundlegenden Elemente ordentlicher anzuordnen:

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

### Anpassen der Position und Skalierung des Bildes

In diesem Beispiel passen wir das vorherige Beispiel an, um mehr Platz für das Bild bereitzustellen und dann die tatsächliche Bildgröße und -position mit {{cssxref("object-fit")}} und {{cssxref("object-position")}} anzupassen.

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
  background-color: #ddd;
}
```

Hier ist `object-position` so konfiguriert, dass das Bild in der oberen rechten Ecke des Elements gezeichnet wird, während `object-fit` auf `contain` gesetzt ist, was angibt, dass das Bild in der größten Größe gezeichnet werden soll, die in den Rahmen des Elements passt, ohne sein Seitenverhältnis zu ändern. Beachten Sie den sichtbaren grauen Hintergrund des Elements, der immer noch in dem Bereich sichtbar ist, der nicht vom Bild bedeckt ist.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>Keiner — das <code>value</code>-Attribut darf nicht angegeben werden.</td>
    </tr>
    <tr>
      <td><strong>Ereignisse</strong></td>
      <td>Keine.</td>
    </tr>
    <tr>
      <td><strong>Unterstützte allgemeine Attribute</strong></td>
      <td>
        <a href="/de/docs/Web/HTML/Element/input#alt"><code>alt</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#src"><code>src</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#width"><code>width</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#height"><code>height</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#formaction"><code>formaction</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#formenctype"><code>formenctype</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#formmethod"><code>formmethod</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#formmethod"><code>formnovalidate</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#formtarget"><code>formtarget</code></a>
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
- Positionierung und Größe des Bildes innerhalb des `<input>`-Rahmens: {{cssxref("object-position")}} und {{cssxref("object-fit")}}
