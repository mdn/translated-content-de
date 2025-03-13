---
title: <input type="image">
slug: Web/HTML/Element/input/image
l10n:
  sourceCommit: c9dfe0dcc81a7414922637600bf318156bf83387
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente vom Typ **`image`** werden verwendet, um grafische Absende-Schaltflächen zu erstellen, d. h. Absende-Schaltflächen, die in Form eines Bildes anstelle von Text erscheinen.

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

Zusätzlich zu den Attributen, die allen {{HTMLElement("input")}}-Elementen gemeinsam sind, unterstützen `image`-Button-Eingaben die folgenden Attribute.

### alt

Das `alt`-Attribut bietet eine alternative Zeichenkette, die als Beschriftung der Schaltfläche verwendet werden kann, wenn das Bild nicht angezeigt werden kann (aufgrund eines Fehlers, eines {{Glossary("user_agent", "User-Agent")}}, der Bilder nicht anzeigen kann oder so konfiguriert ist, dass Bilder nicht angezeigt werden, oder wenn der Benutzer ein Screenreader-Gerät verwendet). Wenn es angegeben ist, muss es eine nicht leere Zeichenkette sein, die als Beschriftung der Schaltfläche geeignet ist.

Zum Beispiel, wenn Sie eine grafische Schaltfläche haben, die ein Bild mit einem Symbol und/oder Bildtext „Jetzt anmelden“ zeigt, sollten Sie auch das `alt`-Attribut auf etwas wie `Jetzt anmelden` setzen.

> [!NOTE]
> Obwohl das `alt`-Attribut technisch optional ist, sollten Sie es immer einfügen, um die Benutzerfreundlichkeit Ihres Inhalts zu maximieren.

Funktional arbeitet das `alt`-Attribut des `<input type="image">`-Elements genauso wie das [`alt`](/de/docs/Web/HTML/Element/img#alt)-Attribut bei {{HTMLElement("img")}}-Elementen.

### formaction

Ein String, der die URL angibt, an die die Daten gesendet werden sollen. Dies hat Vorrang vor dem [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut des {{HTMLElement("form")}}-Elements, das das {{HTMLElement("input")}} besitzt.

Dieses Attribut ist auch bei [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) und {{HTMLElement("button")}}-Elementen verfügbar.

### formenctype

Ein String, der die Kodiermethode identifiziert, die beim Senden der Formulardaten an den Server verwendet werden soll. Es gibt drei zulässige Werte:

- `application/x-www-form-urlencoded`
  - : Dies, der Standardwert, sendet die Formulardaten als Zeichenfolge nach {{Glossary("Percent-encoding", "percent-encoding")}} des Textes mit einem Algorithmus wie {{jsxref("encodeURI", "encodeURI()")}}.
- `multipart/form-data`
  - : Verwendet die [`FormData`](/de/docs/Web/API/FormData)-API zur Verwaltung der Daten und ermöglicht das Einreichen von Dateien an den Server. Sie _müssen_ diesen Kodierungstyp verwenden, wenn Ihr Formular {{HTMLElement("input")}}-Elemente vom [`type`](/de/docs/Web/HTML/Element/input#type) `file` ([`<input type="file">`](/de/docs/Web/HTML/Element/input/file)) enthält.
- `text/plain`
  - : Klartext; hauptsächlich nützlich zum Debuggen, damit Sie die Daten, die übermittelt werden sollen, einfach sehen können.

Falls angegeben, überschreibt der Wert des `formenctype`-Attributs das [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut der besitzenden Form.

Dieses Attribut ist auch bei [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) und {{HTMLElement("button")}}-Elementen verfügbar.

### formmethod

Ein String, der die HTTP-Methode angibt, die beim Übermitteln der Formulardaten verwendet werden soll; dieser Wert überschreibt jedes [`method`](/de/docs/Web/HTML/Element/form#method)-Attribut des besitzenden Formulars. Zulässige Werte sind:

- `get`
  - : Eine URL wird konstruiert, indem mit der durch das `formaction`- oder [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut angegebenen URL begonnen wird, ein Fragezeichen ("?") angehängt und danach die Formulardaten angehängt, die vom `formenctype`- oder `enctype`](/de/docs/Web/HTML/Element/form#enctype)-Attribut des Formulars kodiert sind. Diese URL wird dann an den Server mit einer HTTP-{{HTTPMethod("get")}}-Anfrage gesendet. Diese Methode funktioniert gut für Formulare, die nur {{Glossary("ASCII", "ASCII")}}-Zeichen enthalten und keine Nebeneffekte haben. Dies ist der Standardwert.
- `post`
  - : Die Formulardaten werden im Body der an die durch das `formaction`- oder [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut angegebenen URL gesendeten Anfrage unter Verwendung einer HTTP-{{HTTPMethod("post")}}-Anfrage aufgenommen. Diese Methode unterstützt komplexe Daten und Dateianhänge.
- `dialog`
  - : Diese Methode zeigt an, dass die Schaltfläche den Dialog schließt, mit dem die Eingabe verbunden ist, und die Formulardaten gar nicht überträgt.

Dieses Attribut ist auch bei [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) und {{HTMLElement("button")}}-Elementen verfügbar.

### formnovalidate

Ein Boolean-Attribut, das, falls vorhanden, angibt, dass das Formular vor dem Senden an den Server nicht validiert werden soll. Dies überschreibt den Wert des [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate)-Attributs des besitzenden Formulars.

Dieses Attribut ist auch bei [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) und {{HTMLElement("button")}}-Elementen verfügbar.

### formtarget

Ein String, der einen Namen oder ein Schlüsselwort angibt, das angibt, wo die Antwort angezeigt wird, die nach dem Absenden des Formulars empfangen wird. Der String muss der Name eines **Browsing-Kontextes** sein (d. h. eines Tabs, Fensters oder {{HTMLElement("iframe")}}. Ein hier angegebener Wert überschreibt jedes `target`-Attribut, das von der {{HTMLElement("form")}} übergeben wird, die dieses Eingabeelement besitzt.

Zusätzlich zu den tatsächlichen Namen von Tabs, Fenstern oder Inline-Frames gibt es einige spezielle Schlüsselwörter, die verwendet werden können:

- `_self`
  - : Lädt die Antwort in denselben Browsing-Kontext wie den, der das Formular enthält. Dies ersetzt das aktuelle Dokument durch die empfangenen Daten. Dies ist der Standardwert, wenn keiner angegeben ist.
- `_blank`
  - : Lädt die Antwort in einen neuen, unbenannten Browsing-Kontext. Dies ist typischerweise ein neuer Tab im selben Fenster wie das aktuelle Dokument, kann jedoch je nach Konfiguration des {{Glossary("user_agent", "User-Agents")}} unterschiedlich sein.
- `_parent`
  - : Lädt die Antwort in den übergeordneten Browsing-Kontext des aktuellen. Wenn kein übergeordneter Kontext vorhanden ist, verhält sich dies genauso wie `_self`.
- `_top`
  - : Lädt die Antwort in den übergeordneten Browsing-Kontext; dies ist der Browsing-Kontext, der der oberste Vorfahre des aktuellen Kontexts ist. Wenn der aktuelle Kontext der oberste Kontext ist, verhält sich dies genauso wie `_self`.

Dieses Attribut ist auch bei [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) und {{HTMLElement("button")}}-Elementen verfügbar.

### height

Eine Zahl, die die Höhe in CSS-Pixeln angibt, in der das durch das `src`-Attribut angegebene Bild gezeichnet werden soll.

### src

Ein String, der die URL der Bilddatei angibt, die zur Darstellung der grafischen Absende-Schaltfläche angezeigt werden soll. Wenn der Benutzer mit dem Bild interagiert, wird die Eingabe wie jede andere Schaltflächeneingabe behandelt.

### width

Eine Zahl, die die Breite angibt, in der das Bild in CSS-Pixeln gezeichnet werden soll.

## Obsolete Attribute

Das folgende Attribut wurde von HTML 4 für `image`-Eingaben definiert, wurde jedoch nicht von allen Browsern implementiert und ist inzwischen veraltet.

### usemap

Wenn `usemap` angegeben ist, muss es der Name eines Image-Map-Elements, {{HTMLElement("map")}}, sein, das eine Image-Map definiert, die mit dem Bild verwendet werden soll. Diese Verwendung ist veraltet; Sie sollten zum {{HTMLElement("img")}}-Element wechseln, wenn Sie Image-Maps verwenden möchten.

## Verwendung von Bild-Eingaben

Das `<input type="image">`-Element ist ein [ersetztes Element](/de/docs/Web/CSS/Replaced_element) (ein Element, dessen Inhalt nicht vom CSS-Layer generiert oder direkt verwaltet wird) und verhält sich weitgehend wie ein reguläres {{htmlelement("img")}}-Element, jedoch mit den Fähigkeiten einer [Absende-Schaltfläche](/de/docs/Web/HTML/Element/input/submit).

### Wesentliche Merkmale der Bild-Eingabe

Schauen wir uns ein einfaches Beispiel an, das alle wesentlichen Merkmale enthält, die Sie verwenden müssten (diese funktionieren genauso wie beim `<img>`-Element):

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

- Das [`src`](/de/docs/Web/HTML/Element/input#src)-Attribut wird verwendet, um den Pfad zu dem Bild anzugeben, das Sie in der Schaltfläche anzeigen möchten.
- Das [`alt`](/de/docs/Web/HTML/Element/input#alt)-Attribut bietet Alt-Text für das Bild, damit Benutzer von Screenreadern eine bessere Vorstellung davon bekommen, wofür die Schaltfläche verwendet wird. Es wird auch angezeigt, wenn das Bild aus irgendeinem Grund nicht angezeigt werden kann (zum Beispiel, wenn der Pfad falsch geschrieben ist). Wenn möglich, verwenden Sie einen Text, der mit dem Etikett übereinstimmt, das Sie verwenden würden, wenn Sie eine Standard-Absende-Schaltfläche verwenden würden.
- Die [`width`](/de/docs/Web/HTML/Element/input#width)- und [`height`](/de/docs/Web/HTML/Element/input#height)-Attribute werden verwendet, um die Breite und Höhe anzugeben, in der das Bild angezeigt werden soll, in Pixeln. Die Schaltfläche ist genauso groß wie das Bild; wenn Sie den Trefferbereich der Schaltfläche größer als das Bild machen müssen, müssen Sie CSS verwenden (z. B. {{cssxref("padding")}}). Wenn Sie nur eine Dimension angeben, wird die andere automatisch so angepasst, dass das Bild sein ursprüngliches {{Glossary("aspect_ratio", "Seitenverhältnis")}} beibehält.

### Überschreiben von Standardverhalten von Formularen

`<input type="image">`-Elemente – wie reguläre [Absende-Schaltflächen](/de/docs/Web/HTML/Element/input/submit) – können eine Reihe von Attributen akzeptieren, die das Standardverhalten von Formularen überschreiben:

- `formaction`
  - : Die URI eines Programms, das die von der Eingabeelement übermittelten Informationen verarbeitet; überschreibt das [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut des Formularelements, das der Eigentümer des Elements ist.
- `formenctype`

  - : Gibt den Typ von Inhalt an, der verwendet wird, um das Formular an den Server zu senden. Mögliche Werte sind:

    - `application/x-www-form-urlencoded`: Der Standardwert, wenn das Attribut nicht angegeben ist.
    - `text/plain`.

    Wenn dieses Attribut angegeben ist, überschreibt es das [`enctype`](/de/docs/Web/HTML/Element/form#enctype)-Attribut des Formulars, das der Eigentümer des Elements ist.

- `formmethod`

  - : Gibt die HTTP-Methode an, die der Browser verwendet, um das Formular zu übermitteln. Mögliche Werte sind:

    - `post`: Die Daten aus dem Formular werden in den Body des Formulars aufgenommen und an den Server gesendet.
    - `get`: Die Daten aus dem Formular werden an die **`form`**-Attribut-URI angehängt, mit einem '?' als Trennzeichen, und die resultierende URI wird an den Server gesendet. Verwenden Sie diese Methode, wenn das Formular keine Nebeneffekte hat und nur ASCII-Zeichen enthält.

    Wenn angegeben, überschreibt dieses Attribut das [`method`](/de/docs/Web/HTML/Element/form#method)-Attribut des Formulars, das der Eigentümer des Elements ist.

- `formnovalidate`
  - : Ein Boolean-Attribut, das angibt, dass das Formular nicht validiert werden soll, wenn es gesendet wird. Wenn dieses Attribut angegeben ist, überschreibt es das [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate)-Attribut des Formulars, das der Eigentümer des Elements ist.
- `formtarget`

  - : Ein Name oder ein Schlüsselwort, das angibt, wo die Antwort angezeigt wird, die nach dem Senden des Formulars empfangen wird. Dies ist der Name eines Browsing-Kontextes (zum Beispiel ein Tab, ein Fenster oder ein Inline-Frame). Wenn dieses Attribut angegeben ist, überschreibt es das [`target`](/de/docs/Web/HTML/Element/form#target)-Attribut des Formulars, das der Eigentümer des Elements ist. Die folgenden Schlüsselwörter haben besondere Bedeutungen:

    - `_self`: Laden Sie die Antwort in denselben Browsing-Kontext wie die aktuelle. Dieser Wert ist der Standard, wenn das Attribut nicht angegeben ist.
    - `_blank`: Laden Sie die Antwort in einen neuen unbenannten Browsing-Kontext.
    - `_parent`: Laden Sie die Antwort in den übergeordneten Browsing-Kontext des aktuellen. Wenn es keinen Elternteil gibt, verhält sich diese Option wie `_self`.
    - `_top`: Laden Sie die Antwort in den obersten Browsing-Kontext (d. h. der Browsing-Kontext, der ein Vorfahre des aktuellen ist und keinen Elternteil hat). Wenn es keinen Elternteil gibt, verhält sich diese Option wie `_self`.

### Verwenden der x- und y-Datenpunkte

Wenn Sie ein Formular mit einer Schaltfläche einreichen, die mit `<input type="image">` erstellt wurde, werden dem Server automatisch zwei zusätzliche Datenpunkte von dem Browser übermittelt — `x` und `y`. Sie können dies in unserem [X Y-Koordinaten-Beispiel](https://mdn.github.io/learning-area/html/forms/image-type-example/xy-coordinates-example.html) sehen.

Wenn Sie auf das Bild klicken, um das Formular einzureichen, sehen Sie, dass die Daten als Parameter an die URL angehängt werden, zum Beispiel `?x=52&y=55`. Wenn die Bildeingabe ein [`name`](/de/docs/Web/HTML/Element/input#name)-Attribut hat, beachten Sie bitte, dass der angegebene Name jedem Attribut vorangestellt wird, so dass, wenn der `name` `position` ist, die zurückgegebenen Koordinaten in der URL als `?position.x=52&position.y=55` formatiert werden. Dies gilt natürlich auch für alle anderen Attribute.

Dies sind die X- und Y-Koordinaten des Bildes, auf das die Maus geklickt hat, um das Formular einzureichen, wobei (0,0) oben links im Bild ist, und das ist der Standard, wenn die Einreichung ohne einen Klick auf das Bild erfolgt. Diese können verwendet werden, wenn die Position, an der das Bild angeklickt wurde, signifikant ist, zum Beispiel könnten Sie eine Karte haben, die, wenn darauf geklickt wird, die angeklickten Koordinaten an den Server sendet. Der serverseitige Code ermittelt dann, welcher Standort angeklickt wurde, und gibt Informationen über nahegelegene Orte zurück.

In unserem oben genannten Beispiel könnten wir serverseitigen Code schreiben, der ermittelt, welche Farbe durch die eingereichten Koordinaten angeklickt wurde, und eine Abstimmung über die Lieblingsfarben der Leute aufrechterhält.

### Positionierungs- und Skalierungsalgorithmus des Bildes anpassen

Sie können die {{cssxref("object-position")}}-Eigenschaft verwenden, um die Positionierung des Bildes innerhalb des `<input>`-Rahmens anzupassen, und die {{cssxref("object-fit")}}-Eigenschaft, um zu steuern, wie die Größe des Bildes angepasst wird, um innerhalb des Rahmens zu passen. Dies ermöglicht es Ihnen, einen Rahmen für das Bild mit den `width`- und `height`-Attributen zu spezifizieren, um im Layout Platz zu reservieren, und dann anzugeben, wo innerhalb dieses Raums das Bild positioniert ist und wie (oder ob) es skaliert wird, um diesen Raum zu belegen.

## Beispiele

### Ein Anmeldeformular

Das folgende Beispiel zeigt dieselbe Schaltfläche wie zuvor, jedoch im Kontext eines typischen Anmeldeformulars.

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

### Positionierung des Bildes und Skalierung anpassen

In diesem Beispiel passen wir das vorherige Beispiel an, um mehr Platz für das Bild zu reservieren und dann die tatsächliche Bildgröße und -positionierung mit {{cssxref("object-fit")}} und {{cssxref("object-position")}} anzupassen.

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

Hier wird `object-position` so konfiguriert, dass das Bild in der oberen rechten Ecke des Elements gezeichnet wird, während `object-fit` auf `contain` gesetzt ist, was anzeigt, dass das Bild in der größten Größe gezeichnet werden sollte, die innerhalb des Elementrahmens passt, ohne das Seitenverhältnis zu ändern. Beachten Sie den sichtbaren grauen Hintergrund des Elements, der in dem Bereich sichtbar bleibt, der nicht vom Bild abgedeckt ist.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>Keiner — das <code>value</code>-Attribut sollte nicht angegeben werden.</td>
    </tr>
    <tr>
      <td><strong>Events</strong></td>
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
- Platzierung und Größenanpassung des Bildes innerhalb des `<input>`-Rahmens: {{cssxref("object-position")}} und {{cssxref("object-fit")}}
