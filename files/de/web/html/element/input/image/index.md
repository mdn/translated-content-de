---
title: <input type="image">
slug: Web/HTML/Element/input/image
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente des Typs **`image`** werden verwendet, um grafische Absende-Buttons zu erstellen, d. h. Absende-Buttons, die in Form eines Bildes anstelle von Text erscheinen.

{{EmbedInteractiveExample("pages/tabbed/input-image.html", "tabbed-standard")}}

## Wert

`<input type="image">`-Elemente akzeptieren keine `value`-Attribute. Der Pfad zum anzuzeigenden Bild wird im `src`-Attribut angegeben.

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die von allen {{HTMLElement("input")}}-Elementen geteilt werden, unterstützen `image`-Button-Inputs die folgenden Attribute.

### alt

Das `alt`-Attribut bietet eine alternative Zeichenkette, die als Beschriftung des Buttons genutzt wird, falls das Bild nicht angezeigt werden kann (aufgrund eines Fehlers, eines {{Glossary("user_agent", "User Agents")}}, der Bilder nicht anzeigen kann oder so konfiguriert ist, dass er dies nicht tut, oder wenn der Benutzer ein Bildschirmlesegerät verwendet). Falls vorhanden, muss es eine nicht-leere Zeichenkette sein, die als Beschriftung für den Button geeignet ist.

Beispielsweise sollte bei einem grafischen Button, der ein Bild mit einem Symbol und/oder dem Bildtext "Login Now" zeigt, das `alt`-Attribut auf etwas wie `Login Now` gesetzt werden.

> [!NOTE]
> Auch wenn das `alt`-Attribut technisch optional ist, sollten Sie es immer einfügen, um die Nutzbarkeit Ihres Inhalts zu maximieren.

Funktionell arbeitet das `alt`-Attribut des `<input type="image">`-Elements genauso wie das [`alt`](/de/docs/Web/HTML/Element/img#alt)-Attribut auf {{HTMLElement("img")}}-Elementen.

### formaction

Ein String, der die URL angibt, an die die Daten gesendet werden sollen. Dies hat Vorrang vor dem [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut des {{HTMLElement("form")}}-Elements, das den {{HTMLElement("input")}} besitzt.

Dieses Attribut ist auch auf [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit)- und {{HTMLElement("button")}}-Elementen verfügbar.

### formenctype

Ein String, der die Kodierungsmethode angibt, die beim Senden der Formulardaten an den Server verwendet werden soll. Es gibt drei zulässige Werte:

- `application/x-www-form-urlencoded`
  - : Dies, der Standardwert, sendet die Formulardaten als Zeichenkette, nachdem der Text durch Algorithmen wie {{jsxref("encodeURI", "encodeURI()")}} {{Glossary("Percent-encoding", "prozentkodiert")}} wurde.
- `multipart/form-data`
  - : Verwendet die [`FormData`](/de/docs/Web/API/FormData)-API zur Verwaltung der Daten, die es ermöglicht, Dateien an den Server zu senden. Sie _müssen_ diesen Kodierungstyp verwenden, wenn Ihr Formular {{HTMLElement("input")}}-Elemente des Typs [`type`](/de/docs/Web/HTML/Element/input#type) `file` ([`<input type="file">`](/de/docs/Web/HTML/Element/input/file)) enthält.
- `text/plain`
  - : Nur einfacher Text; hauptsächlich nützlich zur Fehlersuche, da Sie die Daten, die gesendet werden sollen, leicht sehen können.

Falls angegeben, überschreibt der Wert des `formenctype`-Attributs das [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut des besitzenden Formulars.

Dieses Attribut ist ebenfalls auf [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit)- und {{HTMLElement("button")}}-Elementen verfügbar.

### formmethod

Ein String, der das HTTP-Verfahren angibt, das beim Senden der Formulardaten verwendet werden soll; dieser Wert überschreibt jedes auf dem besitzenden Formular angegebene [`method`](/de/docs/Web/HTML/Element/form#method)-Attribut. Zulässige Werte sind:

- `get`
  - : Eine URL wird erstellt, indem mit der URL begonnen wird, die durch das `formaction`- oder [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut angegeben wird. Danach wird ein Fragezeichen ("?") hinzugefügt, und dann die Formulardaten, kodiert wie durch `formenctype` oder das [`enctype`](/de/docs/Web/HTML/Element/form#enctype)-Attribut des Formulars beschrieben. Diese URL wird dann an den Server unter Verwendung einer HTTP {{HTTPMethod("get")}}-Anfrage gesendet. Diese Methode eignet sich gut für einfache Formulare, die nur {{Glossary("ASCII", "ASCII")}}-Zeichen enthalten und keine Seiteneffekte haben. Dies ist der Standardwert.
- `post`
  - : Die Formulardaten werden im Body der Anfrage enthalten, die an die durch das `formaction`- oder [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut angegebene URL unter Verwendung einer HTTP {{HTTPMethod("post")}}-Anfrage gesendet wird. Diese Methode unterstützt komplexe Daten und Dateianhänge.
- `dialog`
  - : Diese Methode wird verwendet, um anzugeben, dass der Button den Dialog schließt, mit dem die Eingabe verknüpft ist, und die Formulardaten überhaupt nicht überträgt.

Dieses Attribut ist ebenfalls auf [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit)- und {{HTMLElement("button")}}-Elementen verfügbar.

### formnovalidate

Ein Boolean-Attribut, das, falls vorhanden, spezifiziert, dass das Formular vor dem Senden an den Server nicht validiert werden soll. Dies überschreibt den Wert des [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate)-Attributs auf dem Element des besitzenden Formulars.

Dieses Attribut ist ebenfalls auf [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit)- und {{HTMLElement("button")}}-Elementen verfügbar.

### formtarget

Ein String, der einen Namen oder ein Schlüsselwort angibt, der oder das angibt, wo die Antwort, die nach dem Übermitteln des Formulars empfangen wird, angezeigt werden soll. Der String muss der Name eines **Browsing-Kontexts** sein (d. h. ein Tab, Fenster oder {{HTMLElement("iframe")}}). Ein hier angegebener Wert überschreibt jedes Ziel, das durch das [`target`](/de/docs/Web/HTML/Element/form#target)-Attribut des {HTMLElement("form")}}s angegeben wird, das diese Eingabe besitzt.

Zusätzlich zu den tatsächlichen Namen von Tabs, Fenstern oder Inline-Frames gibt es einige spezielle Schlüsselwörter, die verwendet werden können:

- `_self`
  - : Lädt die Antwort in denselben Browsing-Kontext, der das Formular enthält. Dies ersetzt das aktuelle Dokument durch die empfangenen Daten. Dies ist der Standardwert, wenn keiner angegeben ist.
- `_blank`
  - : Lädt die Antwort in einen neuen, unbenannten Browsing-Kontext. Dies ist typischerweise ein neuer Tab im selben Fenster wie das aktuelle Dokument, kann aber je nach Konfiguration des {{Glossary("user_agent", "User Agents")}} abweichen.
- `_parent`
  - : Lädt die Antwort in den übergeordneten Browsing-Kontext des aktuellen. Wenn es keinen übergeordneten Kontext gibt, verhält sich dies genauso wie `_self`.
- `_top`
  - : Lädt die Antwort in den obersten Browsing-Kontext; dies ist der oberste Vorfahr des aktuellen Kontextes. Wenn der aktuelle Kontext der oberste ist, verhält sich dies genauso wie `_self`.

Dieses Attribut ist ebenfalls auf [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit)- und {{HTMLElement("button")}}-Elementen verfügbar.

### height

Eine Zahl, die die Höhe in CSS-Pixeln angibt, in der das durch das `src`-Attribut festgelegte Bild gezeichnet werden soll.

### src

Ein String, der die URL der Bilddatei angibt, die zur Darstellung des grafischen Absende-Buttons angezeigt werden soll. Wenn der Benutzer mit dem Bild interagiert, wird die Eingabe wie jede andere Button-Eingabe behandelt.

### width

Eine Zahl, die angibt, wie breit das Bild in CSS-Pixeln gezeichnet werden soll.

## Veraltete Attribute

Das folgende Attribut wurde von HTML 4 für `image`-Eingaben definiert, wurde jedoch nicht von allen Browsern implementiert und ist seitdem veraltet.

### usemap

Wenn `usemap` angegeben ist, muss es der Name eines Bildkarten-Elements, {{HTMLElement("map")}}, sein, das eine Bildkarte definiert, die mit dem Bild verwendet werden soll. Diese Verwendung ist veraltet; Sie sollten zum {{HTMLElement("img")}}-Element wechseln, wenn Sie Bildkarten verwenden möchten.

## Verwendung von Bildeingaben

Das `<input type="image">`-Element ist ein [ersetztes Element](/de/docs/Web/CSS/Replaced_element) (ein Element, dessen Inhalt nicht von der CSS-Schicht generiert oder direkt verwaltet wird) und verhält sich ähnlich wie ein reguläres {{htmlelement("img")}}-Element, aber mit den Möglichkeiten eines [Absende-Buttons](/de/docs/Web/HTML/Element/input/submit).

### Wesentliche Funktionen von Bildeingaben

Schauen wir uns ein einfaches Beispiel an, das alle wesentlichen Funktionen enthält, die Sie verwenden müssten (Diese funktionieren genau so wie beim `<img>`-Element.):

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

- Das [`src`](/de/docs/Web/HTML/Element/input#src)-Attribut wird verwendet, um den Pfad zu dem Bild anzugeben, das im Button angezeigt werden soll.
- Das [`alt`](/de/docs/Web/HTML/Element/input#alt)-Attribut bietet Alternativtext für das Bild, sodass Bildschirmleser-Nutzer eine bessere Vorstellung davon bekommen, wofür der Button verwendet wird. Es wird auch angezeigt, wenn das Bild aus irgendeinem Grund nicht gezeigt werden kann (z. B. wenn der Pfad falsch geschrieben ist). Verwenden Sie nach Möglichkeit einen Text, der mit dem Etikett übereinstimmt, das Sie verwenden würden, wenn Sie einen Standard-Absende-Button verwenden würden.
- Die [`width`](/de/docs/Web/HTML/Element/input#width)- und [`height`](/de/docs/Web/HTML/Element/input#height)-Attribute werden verwendet, um die Breite und Höhe anzugeben, in der das Bild angezeigt werden soll, in Pixeln. Der Button ist genauso groß wie das Bild; wenn Sie möchten, dass die Trefferspanne des Buttons größer als das Bild ist, müssen Sie CSS verwenden (z. B. {{cssxref("padding")}}). Wenn Sie nur eine Dimension angeben, wird die andere automatisch angepasst, damit das Bild sein ursprüngliches {{Glossary("aspect_ratio", "Seitenverhältnis")}} beibehält.

### Übersteuern von Standardformularverhalten

`<input type="image">`-Elemente — ähnlich wie reguläre [Absende-Buttons](/de/docs/Web/HTML/Element/input/submit) — können eine Anzahl von Attributen akzeptieren, die das Standardformularverhalten überschreiben:

- `formaction`
  - : Die URI eines Programms, das die vom Input-Element übermittelten Informationen verarbeitet; überschreibt das [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut des besitzenden Formulars.
- `formenctype`

  - : Gibt den Inhaltstyp an, der zum Übermitteln des Formulars an den Server verwendet wird. Mögliche Werte sind:

    - `application/x-www-form-urlencoded`: Der Standardwert, wenn das Attribut nicht angegeben ist.
    - `text/plain`.

    Wenn dieses Attribut angegeben ist, überschreibt es das [`enctype`](/de/docs/Web/HTML/Element/form#enctype)-Attribut des besitzenden Formulars.

- `formmethod`

  - : Gibt die HTTP-Methode an, die der Browser verwendet, um das Formular zu übermitteln. Mögliche Werte sind:

    - `post`: Die Daten des Formulars sind im Body des Formulars enthalten und werden an den Server gesendet.
    - `get`: Die Daten des Formulars werden an die **`form`**-Attribut-URI angehängt, mit einem '?' als Separator, und die resultierende URI wird an den Server gesendet. Verwenden Sie diese Methode, wenn das Formular keine Seiteneffekte hat und nur ASCII-Zeichen enthält.

    Wenn angegeben, überschreibt dieses Attribut das [`method`](/de/docs/Web/HTML/Element/form#method)-Attribut des besitzenden Formulars.

- `formnovalidate`
  - : Ein Boolean-Attribut, das angibt, dass das Formular beim Absenden nicht validiert werden soll. Wenn dieses Attribut angegeben ist, überschreibt es das [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate)-Attribut des besitzenden Formulars.
- `formtarget`

  - : Ein Name oder Schlüsselwort, das angibt, wo die Antwort angezeigt werden soll, die nach dem Absenden des Formulars empfangen wird. Dies ist der Name oder das Schlüsselwort für einen _Browsing-Kontext_ (zum Beispiel Tab, Fenster oder Inline-Frame). Wenn dieses Attribut angegeben ist, überschreibt es das [`target`](/de/docs/Web/HTML/Element/form#target)-Attribut des besitzenden Formulars. Die folgenden Schlüsselwörter haben spezielle Bedeutungen:

    - `_self`: Läd die Antwort in denselben Browsing-Kontext wie den aktuellen. Dieser Wert ist der Standard, wenn das Attribut nicht angegeben ist.
    - `_blank`: Läd die Antwort in einen neuen, unbenannten Browsing-Kontext.
    - `_parent`: Läd die Antwort in den übergeordneten Browsing-Kontext des aktuellen. Wenn es keinen übergeordneten Kontext gibt, verhält sich diese Option genau wie `_self`.
    - `_top`: Läd die Antwort in den obersten Browsing-Kontext (d. h. den Browsing-Kontext, der ein Vorfahre des aktuellen ist und keinen Eltern hat). Wenn es keinen Eltern gibt, verhält sich diese Option genauso wie `_self`.

### Verwendung der x- und y-Datenpunkte

Wenn Sie ein Formular mit einem Button übermitteln, der mit `<input type="image">` erstellt wurde, sendet der Browser automatisch zwei zusätzliche Datenpunkte an den Server — `x` und `y`. Sie können dies in unserem [X-Y-Koordinatenbeispiel](https://mdn.github.io/learning-area/html/forms/image-type-example/xy-coordinates-example.html) in Aktion sehen.

Wenn Sie auf das Bild klicken, um das Formular zu übermitteln, sehen Sie die Daten als Parameter an die URL angehängt, zum Beispiel `?x=52&y=55`. Wenn die Bildeingabe ein [`name`](/de/docs/Web/HTML/Element/input#name)-Attribut hat, dann wird der angegebene Name jedem Attribut vorangestellt, sodass die zurückgegebenen Koordinaten, wenn der `name` `position` ist, in der URL als `?position.x=52&position.y=55` formatiert wären. Dies gilt natürlich auch für alle anderen Attribute.

Dies sind die X- und Y-Koordinaten des Bildes, auf das die Maus geklickt hat, um das Formular abzusenden, wobei (0,0) die obere linke Ecke des Bildes ist und der Standard, falls die Absendung ohne einen Klick auf das Bild erfolgt. Diese können verwendet werden, wenn die Position, auf die das Bild geklickt wurde, signifikant ist. Beispielsweise könnten Sie eine Karte haben, die bei einem Klick die angeklickten Koordinaten an den Server sendet. Der Servercode ermittelt dann, welcher Ort angeklickt wurde und gibt Informationen über nahegelegene Orte zurück.

In unserem obigen Beispiel könnten wir Server-Code schreiben, der ermittelt, welche Farbe durch die übermittelten Koordinaten angeklickt wurde, und eine Statistik über die Lieblingsfarben erstellen, für die die Leute abgestimmt haben.

### Anpassung der Position und des Skalierungsalgorithmus des Bildes

Sie können die {{cssxref("object-position")}}-Eigenschaft verwenden, um die Positionierung des Bildes innerhalb des Rahmens des `<input>`-Elements anzupassen, und die {{cssxref("object-fit")}}-Eigenschaft, um zu kontrollieren, wie die Größe des Bildes angepasst wird, um innerhalb des Rahmens zu passen. Dies ermöglicht es Ihnen, einen Rahmen für das Bild mithilfe der `width`- und `height`-Attribute festzulegen, um im Layout Platz zu schaffen und dann zu bestimmen, wo innerhalb dieses Raumes das Bild positioniert ist und wie (oder ob) es skaliert wird, um diesen Raum zu füllen.

## Beispiele

### Ein Login-Formular

Das folgende Beispiel zeigt denselben Button wie zuvor, jedoch im Kontext eines typischen Login-Formulars eingebunden.

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

Und nun etwas CSS, um die grundlegenden Elemente ordentlicher zu gestalten:

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

In diesem Beispiel passen wir das vorherige Beispiel an, um mehr Platz für das Bild bereitzustellen und dann die tatsächliche Bildgröße und -positionierung mithilfe von {{cssxref("object-fit")}} und {{cssxref("object-position")}} anzupassen.

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

Hier ist `object-position` so konfiguriert, dass das Bild in der oberen rechten Ecke des Elements gezeichnet wird, während `object-fit` auf `contain` eingestellt ist, was angibt, dass das Bild in der größten Größe gezeichnet werden soll, die innerhalb des Rahmens passt, ohne das Seitenverhältnis zu verändern. Beachten Sie, dass der sichtbare graue Hintergrund des Elements in dem Bereich, der nicht vom Bild abgedeckt wird, weiterhin sichtbar ist.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>Keine — das <code>value</code>-Attribut sollte nicht angegeben werden.</td>
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
      <td><a href="/de/docs/Web/Accessibility/ARIA/Roles/button_role"><code>button</code></a></td>
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
- Positionierung und Größenanpassung des Bildes innerhalb des `<input>`-Rahmens: {{cssxref("object-position")}} und {{cssxref("object-fit")}}
