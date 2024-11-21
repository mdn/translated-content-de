---
title: <input type="image">
slug: Web/HTML/Element/input/image
l10n:
  sourceCommit: f10015d1752d5668d8fe0de29f9d9807de475d58
---

{{HTMLSidebar}}

{{HTMLElement("input")}} Elemente vom Typ **`image`** werden verwendet, um grafische Absende-Schaltflächen zu erstellen, d.h. Absende-Schaltflächen, die in Form eines Bildes anstelle von Text erscheinen.

{{EmbedInteractiveExample("pages/tabbed/input-image.html", "tabbed-standard")}}

## Wert

`<input type="image">` Elemente akzeptieren keine `value` Attribute. Der Pfad zu dem anzuzeigenden Bild wird im `src` Attribut spezifiziert.

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die alle {{HTMLElement("input")}} Elemente gemeinsam haben, unterstützen `image` Schaltflächen-Eingaben die folgenden Attribute.

### alt

Das `alt` Attribut bietet eine alternative Zeichenkette als Bezeichnung der Schaltfläche, falls das Bild nicht angezeigt werden kann (aufgrund eines Fehlers, eines {{Glossary("user_agent", "Benutzeragenten")}}, der keine Bilder anzeigen kann oder so konfiguriert ist, dass er sie nicht anzeigt, oder bei Verwendung eines Bildschirmlesegeräts durch den Benutzer). Wenn angegeben, muss es sich um eine nicht-leere Zeichenkette handeln, die als Bezeichnung für die Schaltfläche geeignet ist.

Zum Beispiel, wenn Sie eine grafische Schaltfläche mit einem Bild haben, das ein Symbol und/oder Bildtext "Login Now" zeigt, sollten Sie auch das `alt` Attribut auf etwas wie `Login Now` setzen.

> [!NOTE]
> Obwohl das `alt` Attribut technisch optional ist, sollten Sie es immer einfügen, um die Benutzerfreundlichkeit Ihrer Inhalte zu maximieren.

Funktional arbeitet das `alt` Attribut des `<input type="image">` Elements genauso wie das [`alt`](/de/docs/Web/HTML/Element/img#alt) Attribut bei {{HTMLElement("img")}} Elementen.

### formaction

Ein String, der die URL angibt, an die die Daten gesendet werden sollen. Dies hat Vorrang vor dem [`action`](/de/docs/Web/HTML/Element/form#action) Attribut des {{HTMLElement("form")}} Elements, das das {{HTMLElement("input")}} besitzt.

Dieses Attribut ist auch bei [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) und {{HTMLElement("button")}} Elementen verfügbar.

### formenctype

Ein String, der die Kodierungsmethode zur Übermittlung der Formulardaten an den Server identifiziert. Es gibt drei erlaubte Werte:

- `application/x-www-form-urlencoded`
  - : Dies, der Standardwert, sendet die Formulardaten als Zeichenfolge nach {{Glossary("Percent-encoding", "Prozent-Kodierung")}} des Textes mithilfe eines Algorithmus wie {{jsxref("encodeURI", "encodeURI()")}}.
- `multipart/form-data`
  - : Verwendet die [`FormData`](/de/docs/Web/API/FormData) API zur Verwaltung der Daten, sodass Dateien an den Server gesendet werden können. Sie _müssen_ diesen Kodierungstyp verwenden, wenn Ihr Formular irgendwelche {{HTMLElement("input")}} Elemente vom Typ [`file`](/de/docs/Web/HTML/Element/input#type) enthält ([`<input type="file">`](/de/docs/Web/HTML/Element/input/file)).
- `text/plain`
  - : Klartext; hauptsächlich nützlich zum Debuggen, damit Sie die zu übermittelnden Daten leicht sehen können.

Falls angegeben, überschreibt der Wert des `formenctype` Attributs das `enctype` Attribut des Besitzformulars.

Dieses Attribut ist auch bei [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) und {{HTMLElement("button")}} Elementen verfügbar.

### formmethod

Ein String, der die HTTP-Methode angibt, die zur Übermittlung der Formulardaten verwendet werden soll; dieser Wert überschreibt jedes [`method`](/de/docs/Web/HTML/Element/form#method) Attribut, das beim Besitzformular angegeben ist. Erlaubte Werte sind:

- `get`
  - : Eine URL wird erstellt, indem mit der URL begonnen wird, die im `formaction` oder [`action`](/de/docs/Web/HTML/Element/form#action) Attribut angegeben ist, ein Fragezeichen ("?") hinzugefügt und daran anschließend die Daten des Formulars angehängt werden, die entsprechend dem `formenctype` oder dem `enctype` Attribut des Formulars kodiert sind. Diese URL wird dann an den Server mit einer HTTP {{HTTPMethod("get")}} Anfrage gesendet. Diese Methode eignet sich gut für einfache Formulare, die nur {{Glossary("ASCII", "ASCII")}} Zeichen enthalten und keine Nebeneffekte haben. Dies ist der Standardwert.
- `post`
  - : Die Daten des Formulars werden im Körper der Anfrage enthalten, die an die im `formaction` oder [`action`](/de/docs/Web/HTML/Element/form#action) Attribut angegebene URL gesendet wird, mithilfe einer HTTP {{HTTPMethod("post")}} Anfrage. Diese Methode unterstützt komplexe Daten und Datei-Anhänge.
- `dialog`
  - : Diese Methode wird verwendet, um anzugeben, dass die Schaltfläche den Dialog schließt, dem die Eingabe zugeordnet ist, und die Formulardaten überhaupt nicht überträgt.

Dieses Attribut ist auch bei [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) und {{HTMLElement("button")}} Elementen verfügbar.

### formnovalidate

Ein Boolean Attribut, das, falls vorhanden, angibt, dass das Formular nicht validiert werden soll, bevor es an den Server gesendet wird. Dies überschreibt den Wert des [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate) Attributs des Besitzformulars.

Dieses Attribut ist auch bei [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) und {{HTMLElement("button")}} Elementen verfügbar.

### formtarget

Ein String, der einen Namen oder ein Schlüsselwort angibt, das anzeigt, wo die Antwort nach dem Absenden des Formulars angezeigt werden soll. Der String muss der Name eines **Betrachtungszusammenhangs** sein (d.h. ein Tab, Fenster oder {{HTMLElement("iframe")}}. Ein hier angegebener Wert überschreibt jedes Ziel, das im [`target`](/de/docs/Web/HTML/Element/form#target) Attribut des {{HTMLElement("form")}} angegeben ist, das diese Eingabe besitzt.

Zusätzlich zu den tatsächlichen Namen von Tabs, Fenstern oder Inline-Frames gibt es einige spezielle Schlüsselwörter, die verwendet werden können:

- `_self`
  - : Lädt die Antwort in denselben Betrachtungszusammenhang, der das Formular enthält. Dies ersetzt das aktuelle Dokument durch die empfangenen Daten. Dies ist der Standardwert, der benutzt wird, wenn keiner angegeben ist.
- `_blank`
  - : Lädt die Antwort in einen neuen, unbenannten Betrachtungszusammenhang. Dies ist typischerweise ein neuer Tab im selben Fenster wie das aktuelle Dokument, kann jedoch je nach Konfiguration des {{Glossary("user_agent", "Benutzeragenten")}} abweichen.
- `_parent`
  - : Lädt die Antwort in den übergeordneten Betrachtungszusammenhang des aktuellen. Falls es keinen übergeordneten Zusammenhang gibt, verhält sich dies wie `_self`.
- `_top`
  - : Lädt die Antwort in den obersten Betrachtungszusammenhang; dies ist der Betrachtungszusammenhang, der der oberste Vorfahre des aktuellen ist. Falls der aktuelle Kontext bereits der oberste ist, verhält sich dies wie `_self`.

Dieses Attribut ist auch bei [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) und {{HTMLElement("button")}} Elementen verfügbar.

### height

Eine Zahl, die die Höhe in CSS-Pixels angibt, in der das von dem `src` Attribut spezifizierte Bild gezeichnet werden soll.

### src

Ein String, der die URL der Bilddatei angibt, die zur Darstellung der grafischen Absende-Schaltfläche angezeigt werden soll. Wenn der Benutzer mit dem Bild interagiert, wird die Eingabe wie jede andere Schaltflächeneingabe behandelt.

### width

Eine Zahl, die die Breite angibt, in der das Bild in CSS-Pixels gezeichnet werden soll.

## Veraltete Attribute

Das folgende Attribut wurde von HTML 4 für `image` Eingaben definiert, jedoch nicht von allen Browsern implementiert und ist seitdem veraltet.

### usemap

Falls `usemap` angegeben ist, muss es der Name eines Bildzuordnungselements sein, {{HTMLElement("map")}}, das eine Bildkarte definiert, die mit dem Bild verwendet wird. Diese Verwendung ist veraltet; Sie sollten zum {{HTMLElement("img")}} Element wechseln, wenn Sie Bildkarten verwenden möchten.

## Verwendung von Bild-Eingaben

Das `<input type="image">` Element ist ein [ersetztes Element](/de/docs/Web/CSS/Replaced_element) (ein Element, dessen Inhalt nicht von der CSS-Schicht erzeugt oder direkt verwaltet wird) und verhält sich ähnlich wie ein reguläres {{htmlelement("img")}} Element, jedoch mit den Möglichkeiten einer [Absende-Schaltfläche](/de/docs/Web/HTML/Element/input/submit).

### Wesentliche Funktionen der Bild-Eingabe

Sehen wir uns ein einfaches Beispiel an, das alle wesentlichen Funktionen umfasst, die Sie benötigen könnten (Diese funktionieren genauso wie beim `<img>` Element.):

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

- Das [`src`](/de/docs/Web/HTML/Element/input#src) Attribut wird verwendet, um den Pfad zu dem Bild anzugeben, das in der Schaltfläche angezeigt werden soll.
- Das [`alt`](/de/docs/Web/HTML/Element/input#alt) Attribut bietet Alternativtext für das Bild, sodass Bildschirmleser-Benutzer eine bessere Vorstellung davon bekommen, wofür die Schaltfläche verwendet wird. Es wird auch angezeigt, wenn das Bild aus irgendeinem Grund nicht angezeigt werden kann (zum Beispiel, wenn der Pfad falsch geschrieben ist). Wenn möglich, verwenden Sie Text, der dem Label entspricht, das Sie verwenden würden, wenn Sie eine Standard-Absende-Schaltfläche verwenden.
- Die [`width`](/de/docs/Web/HTML/Element/input#width) und [`height`](/de/docs/Web/HTML/Element/input#height) Attribute werden verwendet, um die Breite und Höhe anzugeben, in der das Bild angezeigt werden soll, in Pixels. Die Schaltfläche ist so groß wie das Bild; wenn Sie den Trefferbereich der Schaltfläche größer als das Bild benötigen, müssen Sie CSS verwenden (z.B. {{cssxref("padding")}}). Außerdem, wenn Sie nur eine Dimension angeben, wird die andere automatisch angepasst, sodass das Bild sein ursprüngliches {{Glossary("aspect_ratio", "Seitenverhältnis")}} beibehält.

### Überschreiben der Standardverhalten von Formularen

`<input type="image">` Elemente — ähnlich wie reguläre [Absende-Schaltflächen](/de/docs/Web/HTML/Element/input/submit) — können eine Reihe von Attributen akzeptieren, die das Standardverhalten des Formulars überschreiben:

- `formaction`
  - : Die URI eines Programms, das die durch das Eingabeelement übermittelten Informationen verarbeitet; überschreibt das [`action`](/de/docs/Web/HTML/Element/form#action) Attribut des Formularbesitzers des Elements.
- `formenctype`

  - : Gibt den Inhaltstyp an, der verwendet wird, um das Formular an den Server zu senden. Mögliche Werte sind:

    - `application/x-www-form-urlencoded`: Der Standardwert, wenn das Attribut nicht spezifiziert wurde.
    - `text/plain`.

    Falls dieses Attribut spezifiziert ist, überschreibt es das [`enctype`](/de/docs/Web/HTML/Element/form#enctype) Attribut des Formularbesitzers des Elements.

- `formmethod`

  - : Gibt die HTTP-Methode an, die der Browser zum Senden des Formulars verwendet. Mögliche Werte sind:

    - `post`: Die Daten aus dem Formular werden im Körper des Formulars enthalten und an den Server gesendet.
    - `get`: Die Daten werden der **`form`** Attribut-URI angefügt, mit einem '?' als Trennzeichen, und die resultierende URI wird an den Server gesendet. Verwenden Sie diese Methode, wenn das Formular keine Nebeneffekte hat und nur ASCII-Zeichen enthält.

    Falls spezifiziert, überschreibt dieses Attribut das [`method`](/de/docs/Web/HTML/Element/form#method) Attribut des Formularbesitzers des Elements.

- `formnovalidate`
  - : Ein Boolean Attribut, das angibt, dass das Formular bei der Übermittlung nicht validiert werden soll. Falls dieses Attribut angegeben ist, überschreibt es das [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate) Attribut des Formularbesitzers des Elements.
- `formtarget`

  - : Ein Name oder Schlüsselwort, das angibt, wo die empfangene Antwort nach dem Absenden des Formulars angezeigt werden soll. Dies ist der Name eines oder ein Schlüsselwort für einen _Betrachtungszusammenhang_ (z.B. Tab, Fenster oder Inline-Frame). Falls dieses Attribut angegeben ist, überschreibt es das [`target`](/de/docs/Web/HTML/Element/form#target) Attribut des Formularbesitzers des Elements. Die folgenden Schlüsselwörter haben spezielle Bedeutungen:

    - `_self`: Laden Sie die Antwort in denselben Betrachtungszusammenhang, wie den aktuellen. Dieser Wert ist der Standardwert, wenn das Attribut nicht spezifiziert wurde.
    - `_blank`: Laden Sie die Antwort in einen neuen unbenannten Betrachtungszusammenhang.
    - `_parent`: Laden Sie die Antwort in den übergeordneten Betrachtungszusammenhang des aktuellen. Falls es keinen Eltern gibt, verhält sich diese Option wie `_self`.
    - `_top`: Laden Sie die Antwort in den obersten Betrachtungszusammenhang (d.h. der Betrachtungszusammenhang, der ein Vorfahre des aktuellen ist und keinen Eltern hat). Falls es keinen Eltern gibt, verhält sich diese Option wie `_self`.

### Verwendung der x- und y-Datenpunkte

Wenn Sie ein Formular mit einer Schaltfläche erstellt mit `<input type="image">` übermitteln, werden automatisch vom Browser zwei zusätzliche Datenpunkte an den Server gesendet — `x` und `y`. Sie können dies in Aktion in unserem [X Y Koordinaten Beispiel](https://mdn.github.io/learning-area/html/forms/image-type-example/xy-coordinates-example.html) sehen.

Wenn Sie auf das Bild klicken, um das Formular abzusenden, sehen Sie die Daten angehängt an die URL als Parameter, zum Beispiel `?x=52&y=55`. Wenn die Bild-Eingabe ein [`name`](/de/docs/Web/HTML/Element/input#name) Attribut hat, beachten Sie, dass der angegebene Name jedem Attribut vorangestellt ist, sodass das zurückgegebene Koordinaten, falls der `name` `position` ist, in der URL formatiert wäre als `?position.x=52&position.y=55`. Natürlich gilt dies auch für alle anderen Attribute.

Dies sind die X- und Y-Koordinaten des Bildes, auf das die Maus geklickt hat, um das Formular abzusenden, wobei (0,0) die linke obere Ecke des Bildes ist und der Standard, falls die Übermittlung ohne Klick auf das Bild erfolgt. Diese können verwendet werden, wenn die Position, auf die das Bild geklickt wurde, von Bedeutung ist, z.B. wenn Sie eine Karte haben, die beim Klicken die Koordinaten zum Server sendet. Der serverseitige Code ermittelt dann, auf welchen Ort geklickt wurde, und gibt Informationen über nahegelegene Orte zurück.

In unserem obigen Beispiel könnten wir serverseitigen Code schreiben, der ermittelt, auf welche Farbe durch die übermittelten Koordinaten geklickt wurde, und eine Aufzählung der Lieblingsfarben führt, für die die Leute abgestimmt haben.

### Anpassung der Bildposition und des Skalierungsalgorithmus

Sie können die {{cssxref("object-position")}} Eigenschaft verwenden, um die Positionierung des Bildes innerhalb des `<input>` Elementrahmens anzupassen, und die {{cssxref("object-fit")}} Eigenschaft, um zu steuern, wie die Bildgröße angepasst wird, um in den Rahmen zu passen. Dies ermöglicht es Ihnen, einen Rahmen für das Bild mithilfe der `width` und `height` Attribute festzulegen, um im Layout Platz freizugeben, und dann festzulegen, wo sich das Bild innerhalb dieses Platzes befindet und wie (oder ob) es skaliert wird, um diesen Platz zu belegen.

## Beispiele

### Ein Login-Formular

Das folgende Beispiel zeigt dieselbe Schaltfläche wie zuvor, jedoch im Kontext eines typischen Login-Formulars.

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

Und nun etwas CSS, um die Basiselemente ordentlicher darzustellen:

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

In diesem Beispiel passen wir das vorhergehende Beispiel an, um mehr Platz für das Bild bereitzustellen und dann die tatsächliche Bildgröße und -positionierung mithilfe von {{cssxref("object-fit")}} und {{cssxref("object-position")}} zu justieren.

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

Hier ist `object-position` so konfiguriert, dass das Bild in der oberen rechten Ecke des Elements gezeichnet wird, während `object-fit` auf `contain` gesetzt ist, was anzeigt, dass das Bild in der größten Größe gezeichnet werden sollte, die in den Elementrahmen passt, ohne das Seitenverhältnis zu verändern. Beachten Sie den sichtbaren grauen Hintergrund des Elements, der im Bereich sichtbar ist, der nicht vom Bild abgedeckt wird.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>Keiner — das <code>value</code> Attribut sollte nicht angegeben werden.</td>
    </tr>
    <tr>
      <td><strong>Ereignisse</strong></td>
      <td>Keine.</td>
    </tr>
    <tr>
      <td><strong>Unterstützte Standardattribute</strong></td>
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
      <td><strong>Implizierte ARIA Rolle</strong></td>
      <td><a href="/de/docs/Web/Accessibility/ARIA/Roles/button_role"><code>button</code></a></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("input")}} und die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Schnittstelle, die es implementiert.
- Das HTML {{HTMLElement("img")}} Element
- Positionierung und Größenänderung des Bildes innerhalb des `<input>` Elementrahmens: {{cssxref("object-position")}} und {{cssxref("object-fit")}}
- [Kompatibilität der CSS-Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
