---
title: <input type="image">
slug: Web/HTML/Element/input/image
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente des Typs **`image`** werden verwendet, um grafische Absende-Buttons zu erstellen, d.h. Absende-Buttons, die die Form eines Bildes annehmen, anstatt eines Textes.

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

`<input type="image">`-Elemente akzeptieren keine `value`-Attribute. Der Pfad zum darzustellenden Bild wird im `src`-Attribut angegeben.

## Zusätzliche Attribute

Zusätzlich zu den von allen {{HTMLElement("input")}}-Elementen geteilten Attributen unterstützen `image`-Button-Inputs die folgenden Attribute.

### alt

Das `alt`-Attribut bietet einen alternativen Text, der als Button-Beschriftung verwendet wird, falls das Bild nicht angezeigt werden kann (aufgrund eines Fehlers, eines {{Glossary("user_agent", "User-Agents")}}, der Bilder nicht anzeigen kann oder so konfiguriert ist, dass er keine Bilder zeigt, oder wenn der Benutzer ein Bildschirmlesegerät benutzt). Wenn angegeben, muss es sich um einen nicht leeren String handeln, der als Beschriftung für den Button geeignet ist.

Beispielsweise sollten Sie, wenn Sie einen grafischen Button mit einem Icon oder Bildtext "Jetzt anmelden" haben, auch das `alt`-Attribut auf etwas wie `Jetzt anmelden` setzen.

> [!NOTE]
> Obwohl das `alt`-Attribut technisch optional ist, sollten Sie immer eines angeben, um die Benutzerfreundlichkeit Ihres Inhalts zu maximieren.

Funktional funktioniert das `alt`-Attribut des `<input type="image">`-Elements genauso wie das [`alt`](/de/docs/Web/HTML/Element/img#alt)-Attribut bei {{HTMLElement("img")}}-Elementen.

### formaction

Ein String, der die URL angibt, an die die Daten gesendet werden sollen. Dies hat Vorrang vor dem [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut des die {{HTMLElement("input")}} besitzenden Formulars.

Dieses Attribut ist auch bei [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) und {{HTMLElement("button")}}-Elementen verfügbar.

### formenctype

Ein String, der die Kodierungsmethode identifiziert, die beim Senden der Formulardaten an den Server verwendet werden soll. Es gibt drei zulässige Werte:

- `application/x-www-form-urlencoded`
  - : Dies, der Standardwert, sendet die Formulardaten als String, nachdem der Text unter Verwendung eines Algorithmus wie {{jsxref("encodeURI", "encodeURI()")}} {{Glossary("Percent-encoding", "prozent-codiert")}} wurde.
- `multipart/form-data`
  - : Verwendet die [`FormData`](/de/docs/Web/API/FormData)-API zur Verwaltung der Daten und ermöglicht das Senden von Dateien an den Server. Sie _müssen_ diesen Kodierungstyp verwenden, wenn Ihre Formularelemente vom [`type`](/de/docs/Web/HTML/Element/input#type) `file` ([`<input type="file">`](/de/docs/Web/HTML/Element/input/file)) enthalten.
- `text/plain`
  - : Klartext; hauptsächlich nur für das Debugging nützlich, damit Sie die zu übermittelnden Daten leicht sehen können.

Wenn angegeben, überschreibt der Wert des `formenctype`-Attributs das [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut des besitzenden Formulars.

Dieses Attribut ist auch bei [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) und {{HTMLElement("button")}}-Elementen verfügbar.

### formmethod

Ein String, der die HTTP-Methode angibt, die beim Senden der Formulardaten verwendet werden soll; dieser Wert überschreibt das [`method`](/de/docs/Web/HTML/Element/form#method)-Attribut des besitzenden Formulars. Zulässige Werte sind:

- `get`
  - : Eine URL wird erstellt, indem mit der URL begonnen wird, die vom `formaction`- oder [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut angegeben ist, ein Fragezeichen ("?")-Zeichen angehängt und dann die Formulardaten, codiert wie durch `formenctype` oder das [`enctype`](/de/docs/Web/HTML/Element/form#enctype)-Attribut des Formulars beschrieben, angehängt werden. Diese URL wird dann unter Verwendung einer HTTP-{{HTTPMethod("get")}}-Anfrage an den Server gesendet. Diese Methode funktioniert gut für Formulare, die nur {{Glossary("ASCII", "ASCII")}}-Zeichen enthalten und keine Nebenwirkungen haben. Dies ist der Standardwert.
- `post`
  - : Die Formulardaten sind im Körper der Anforderung enthalten, die an die vom `formaction`- oder [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut angegebene URL gesendet wird, unter Verwendung einer HTTP-{{HTTPMethod("post")}}-Anfrage. Diese Methode unterstützt komplexe Daten und Dateianhänge.
- `dialog`
  - : Diese Methode wird verwendet, um anzuzeigen, dass der Button den Dialog schließt, mit dem die Eingabe verknüpft ist, und übermittelt die Formulardaten überhaupt nicht.

Dieses Attribut ist auch bei [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) und {{HTMLElement("button")}}-Elementen verfügbar.

### formnovalidate

Ein boolesches Attribut, das, wenn vorhanden, angibt, dass das Formular vor dem Senden an den Server nicht validiert werden soll. Dies überschreibt das [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate)-Attribut des besitzenden Formulars.

Dieses Attribut ist auch bei [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) und {{HTMLElement("button")}}-Elementen verfügbar.

### formtarget

Ein String, der einen Namen oder ein Schlüsselwort angibt, welches anzeigt, wo die Antwort angezeigt werden soll, die nach dem Absenden des Formulars empfangen wurde. Der String muss der Name eines **Browsing-Kontexts** sein (d.h. ein Tab, Fenster oder {{HTMLElement("iframe")}}). Ein hier angegebener Wert überschreibt jedes Ziel, das durch das [`target`](/de/docs/Web/HTML/Element/form#target)-Attribut des das Eingabeelement besitzenden {{HTMLElement("form")}}-Elements angegeben ist.

Zusätzlich zu den tatsächlichen Namen von Tabs, Fenstern oder Inline-Frames gibt es einige spezielle Schlüsselwörter, die verwendet werden können:

- `_self`
  - : Lädt die Antwort in den gleichen Browsing-Kontext wie den, der das Formular enthält. Dies ersetzt das aktuelle Dokument mit den empfangenen Daten. Dies ist der Standardwert, der verwendet wird, wenn keiner angegeben ist.
- `_blank`
  - : Lädt die Antwort in einen neuen, unbenannten Browsing-Kontext. Dies ist normalerweise ein neuer Tab im selben Fenster wie das aktuelle Dokument, kann jedoch je nach Konfiguration des {{Glossary("user_agent", "User-Agents")}} unterschiedlich sein.
- `_parent`
  - : Lädt die Antwort in den übergeordneten Browsing-Kontext des aktuellen. Wenn es keinen übergeordneten Kontext gibt, verhält sich dies genauso wie `_self`.
- `_top`
  - : Lädt die Antwort in den obersten Browsing-Kontext; das ist der Browsing-Kontext, der der oberste Vorfahr des aktuellen Kontexts ist. Wenn der aktuelle Kontext der oberste Kontext ist, verhält sich dies genauso wie `_self`.

Dieses Attribut ist auch bei [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) und {{HTMLElement("button")}}-Elementen verfügbar.

### height

Eine Zahl, die die Höhe in CSS-Pixeln angibt, in der das durch das `src`-Attribut angegebene Bild gezeichnet werden soll.

### src

Ein String, der die URL der anzzeigenden Bilddatei angibt, um den grafischen Absende-Button darzustellen. Wenn der Benutzer mit dem Bild interagiert, wird die Eingabe wie bei jedem anderen Button-Input behandelt.

### width

Eine Zahl, die die Breite angibt, in der das Bild in CSS-Pixeln gezeichnet werden soll.

## Veraltete Attribute

Das folgende Attribut wurde von HTML 4 für `image`-Inputs definiert, aber nicht von allen Browsern implementiert und ist mittlerweile veraltet.

### usemap

Wenn `usemap` angegeben ist, muss es der Name eines Image-Map-Elements, {{HTMLElement("map")}}, sein, das eine Bildkarte definiert, die mit dem Bild verwendet werden soll. Diese Verwendung ist obsolet; Sie sollten auf die Verwendung des {{HTMLElement("img")}}-Elements umsteigen, wenn Sie Bildkarten verwenden möchten.

## Verwendung von Bild-Inputs

Das `<input type="image">`-Element ist ein {{Glossary("replaced_elements", "ersetztes Element")}} (ein Element, dessen Inhalt nicht von der CSS-Schicht generiert oder direkt verwaltet wird) und verhält sich ähnlich wie ein reguläres {{htmlelement("img")}}-Element, aber mit den Fähigkeiten eines [Absende-Buttons](/de/docs/Web/HTML/Element/input/submit).

### Wesentliche Funktionen von Bild-Inputs

Betrachten wir ein einfaches Beispiel, das alle wesentlichen Funktionen enthält, die Sie verwenden müssten (diese funktionieren genauso wie beim `<img>`-Element):

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

- Das [`src`](/de/docs/Web/HTML/Element/input#src)-Attribut wird verwendet, um den Pfad zum Bild anzugeben, das im Button angezeigt werden soll.
- Das [`alt`](/de/docs/Web/HTML/Element/input#alt)-Attribut bietet alternativen Text für das Bild, damit Bildschirmlesegeräte einen besseren Eindruck davon bekommen, wofür der Button verwendet wird. Es wird auch angezeigt, wenn das Bild aus irgendeinem Grund nicht angezeigt werden kann (zum Beispiel, wenn der Pfad falsch geschrieben ist). Wenn möglich, verwenden Sie Text, der mit dem Label übereinstimmt, das Sie verwenden würden, wenn Sie einen Standard-Absende-Button verwenden würden.
- Die [`width`](/de/docs/Web/HTML/Element/input#width)- und [`height`](/de/docs/Web/HTML/Element/input#height)-Attribute werden verwendet, um die Breite und Höhe anzugeben, in der das Bild angezeigt werden soll, in Pixeln. Der Button ist genauso groß wie das Bild; wenn Sie die Schlagfläche des Buttons größer als das Bild benötigen, müssen Sie CSS verwenden (z.B. {{cssxref("padding")}}). Wenn Sie nur eine Dimension angeben, wird die andere automatisch angepasst, sodass das Bild sein ursprüngliches {{Glossary("aspect_ratio", "Seitenverhältnis")}} beibehält.

### Überschreibung von Standardformularverhalten

`<input type="image">`-Elemente — wie reguläre [Absende-Buttons](/de/docs/Web/HTML/Element/input/submit) — können eine Reihe von Attributen akzeptieren, die das Standardformularverhalten überschreiben:

- `formaction`
  - : Die URI eines Programms, das die vom Eingabeelement übermittelten Informationen verarbeitet; überschreibt das [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut des Formularbesitzers.
- `formenctype`

  - : Gibt den Inhaltstyp an, der verwendet wird, um das Formular an den Server zu senden. Mögliche Werte sind:

    - `application/x-www-form-urlencoded`: Der Standardwert, wenn das Attribut nicht angegeben ist.
    - `text/plain`.

    Wenn dieses Attribut angegeben ist, überschreibt es das [`enctype`](/de/docs/Web/HTML/Element/form#enctype)-Attribut des Formularbesitzers.

- `formmethod`

  - : Gibt die HTTP-Methode an, die der Browser verwendet, um das Formular zu senden. Mögliche Werte sind:

    - `post`: Die Daten des Formulars sind im Körper des Formulars enthalten und werden an den Server gesendet.
    - `get`: Die Daten des Formulars werden an die **`form`**-Attribut-URI angehängt, mit einem '?' als Trennzeichen, und die resultierende URI wird an den Server gesendet. Verwenden Sie diese Methode, wenn das Formular keine Nebeneffekte hat und nur ASCII-Zeichen enthält.

    Wenn angegeben, überschreibt dieses Attribut das [`method`](/de/docs/Web/HTML/Element/form#method)-Attribut des Formularbesitzers.

- `formnovalidate`
  - : Ein boolesches Attribut, das angibt, dass das Formular nicht validiert werden soll, wenn es übermittelt wird. Wenn dieses Attribut angegeben ist, überschreibt es das [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate)-Attribut des Formularbesitzers.
- `formtarget`

  - : Ein Name oder Schlüsselwort, das angibt, wo die nach dem Absenden des Formulars empfangene Antwort angezeigt werden soll. Dies ist ein Name oder ein Schlüsselwort für einen _Browsing-Kontext_ (zum Beispiel Tab, Fenster oder Inline-Frame). Wenn dieses Attribut angegeben ist, überschreibt es das [`target`](/de/docs/Web/HTML/Element/form#target)-Attribut des Formularbesitzers. Die folgenden Schlüsselwörter haben eine besondere Bedeutung:

    - `_self`: Laden Sie die Antwort in denselben Browsing-Kontext wie den aktuellen. Wenn das Attribut nicht angegeben ist, ist dies der Standardwert.
    - `_blank`: Laden Sie die Antwort in einen neuen unbenannten Browsing-Kontext.
    - `_parent`: Laden Sie die Antwort in den übergeordneten Browsing-Kontext des aktuellen. Wenn es keinen übergeordneten Kontext gibt, verhält sich diese Option genauso wie `_self`.
    - `_top`: Laden Sie die Antwort in den obersten Browsing-Kontext (das heißt, der Browsing-Kontext, der ein Vorfahre des aktuellen ist und keinen übergeordneten hat). Wenn es keinen übergeordneten gibt, verhält sich diese Option genauso wie `_self`.

### Verwendung der x- und y-Datenpunkte

Wenn Sie ein Formular mit einem Button erstellen, der mit `<input type="image">` erstellt wurde, werden automatisch zwei zusätzliche Datenpunkte von der Browser an den Server übermittelt — `x` und `y`. Sie können dies in unserem [X Y Koordinaten-Beispiel](https://mdn.github.io/learning-area/html/forms/image-type-example/xy-coordinates-example.html) sehen.

Wenn Sie auf das Bild klicken, um das Formular zu senden, sehen Sie die Daten als Parameter an die URL angehängt, zum Beispiel `?x=52&y=55`. Wenn das Bild-Input ein [`name`](/de/docs/Web/HTML/Element/input#name)-Attribut hat, beachten Sie, dass der angegebene Name jedem Attribut vorangestellt wird; wenn der `name` `position` ist, wären die zurückgegebenen Koordinaten in der URL als `?position.x=52&position.y=55` formatiert. Dies gilt natürlich auch für alle anderen Attribute.

Dies sind die X- und Y-Koordinaten des Bildes, auf das die Maus geklickt hat, um das Formular zu übermitteln, wobei (0,0) die obere linke Ecke des Bildes ist und der Standard, falls die Übermittlung ohne Klick auf das Bild erfolgt. Diese können verwendet werden, wenn der Punkt, auf den das Bild geklickt wurde, von Bedeutung ist; beispielsweise könnten Sie eine Karte haben, die beim Klicken die Koordinaten an den Server sendet. Der serverseitige Code ermittelt dann, welcher Ort angeklickt wurde, und gibt Informationen über nahegelegene Orte zurück.

In unserem obigen Beispiel könnten wir serverseitige Programmierung schreiben, die ermittelt, welche Farbe durch die übermittelten Koordinaten angeklickt wurde, und eine Zählung über die bevorzugten Farben führen, für die die Leute gestimmt haben.

### Anpassung der Position und Skalierung des Bildes

Sie können die {{cssxref("object-position")}}-Eigenschaft verwenden, um die Positionierung des Bildes innerhalb des `<input>`-Elementrahmens anzupassen, und die {{cssxref("object-fit")}}-Eigenschaft, um zu steuern, wie die Bildgröße angepasst wird, um in den Rahmen zu passen. Damit können Sie einen Rahmen für das Bild festlegen, indem Sie die `width`- und `height`-Attribute verwenden, um Platz im Layout zu reservieren, und dann anpassen, wo im zugewiesenen Platz das Bild platziert wird und wie (oder ob) es skaliert wird, um diesen Platz zu füllen.

## Beispiele

### Ein Login-Formular

Im folgenden Beispiel wird derselbe Button wie zuvor gezeigt, jedoch im Kontext eines typischen Login-Formulars.

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

### Anpassung der Bildposition und Skalierung

In diesem Beispiel passen wir das vorherige Beispiel an, um mehr Platz für das Bild zu reservieren und die tatsächliche Bildgröße und -positionierung mit {{cssxref("object-fit")}} und {{cssxref("object-position")}} anzupassen.

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

Hier ist `object-position` so konfiguriert, dass das Bild in der oberen rechten Ecke des Elements gezeichnet wird, während `object-fit` auf `contain` eingestellt ist, was bedeutet, dass das Bild in der größten Größe gezeichnet werden soll, die innerhalb des Elementrahmens passt, ohne sein Seitenverhältnis zu ändern. Beachten Sie den sichtbaren grauen Hintergrund des Elements, der noch im Bereich sichtbar ist, der nicht vom Bild bedeckt ist.

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
        <a href="/de/docs/Web/HTML/Element/input#alt"><code>alt</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#src"><code>src</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#width"><code>width</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#height"><code>height</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#formaction"><code>formaction</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#formenctype"><code>formenctype</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#formmethod"><code>formmethod</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#formnovalidate"><code>formnovalidate</code></a>,
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
      <td><strong>Implizierte ARIA-Rolle</strong></td>
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
- Das HTML-{{HTMLElement("img")}}-Element
- Positionierung und Größenänderung des Bildes innerhalb des `<input>`-Elementrahmens: {{cssxref("object-position")}} und {{cssxref("object-fit")}}
