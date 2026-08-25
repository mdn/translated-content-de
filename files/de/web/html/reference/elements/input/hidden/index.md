---
title: '`<input type="hidden">` HTML-Attributwert'
short-title: <input type="hidden">
slug: Web/HTML/Reference/Elements/input/hidden
l10n:
  sourceCommit: 2066cc916dfdcbb782340bf0ce562b230e947cba
---

{{HTMLElement("input")}}-Elemente des Typs **`hidden`** ermöglichen es Webentwicklern, Daten in ein Formular einzufügen, die für Benutzer nicht sichtbar sind, wenn ein Formular übermittelt wird. Zum Beispiel die ID des Inhalts, der gerade bestellt oder bearbeitet wird, oder ein einzigartiges Sicherheitstoken. Verborgene Eingaben sind auf der gerenderten Seite vollständig unsichtbar, werden jedoch wie jede andere Formulareingabe übermittelt. Während die Daten den Benutzern im gerenderten Inhalt nicht präsentiert werden, sind sie dennoch im HTML-Ausgabe sichtbar und können von Benutzern mit Werkzeugen wie den [Entwicklerwerkzeugen des Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) bearbeitet werden.

> [!NOTE]
> Die [`input`](/de/docs/Web/API/Element/input_event) und [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignisse gelten nicht für diesen Eingabetyp. Verborgene Eingaben können nicht einmal mit JavaScript fokussiert werden (z.B. `hiddenInput.focus()`).

## Wert

Das Attribut [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) des {{HTMLElement("input")}}-Elements enthält eine Zeichenfolge, die die versteckten Daten enthält, die Sie beim Absenden des Formulars an den Server übermitteln möchten. Dieser Wert wird dem Benutzer über die Benutzeroberfläche nicht angezeigt.

> [!WARNING]
> Obwohl der Wert dem Benutzer im Seiteninhalt nicht angezeigt wird, ist er sichtbar und kann mit den Entwicklerwerkzeugen des Browsers oder der "Quelltext anzeigen"-Funktionalität bearbeitet werden. Verlassen Sie sich nicht darauf, dass `hidden` Eingaben eine Form der Sicherheit darstellen.

## Zusätzliche Attribute

Zusätzlich zu den gemeinsamen Attributen aller {{HTMLElement("input")}}-Elemente bieten `hidden` Eingaben die folgenden Attribute.

### name

Dies ist eigentlich eines der allgemeinen Attribute, aber es hat eine spezielle Bedeutung, die für verborgene Eingaben verfügbar ist. Normalerweise funktioniert das [`name`](/de/docs/Web/HTML/Reference/Elements/input#name)-Attribut bei verborgenen Eingaben genauso wie bei jeder anderen Eingabe. Wenn das Formular jedoch übermittelt wird, wird eine versteckte Eingabe, deren `name` auf `_charset_` gesetzt ist, automatisch mit dem Wert des Zeichencodierung übermittelt, der zur Übermittlung des Formulars verwendet wird.

## Verwendung von versteckten Eingaben

Wie bereits erwähnt, können verborgene Eingaben überall dort verwendet werden, wo Sie Daten einfügen möchten, die der Benutzer nicht sehen kann, wenn sie zusammen mit dem Formular an den Server übermittelt werden. Lassen Sie uns einige Beispiele ansehen, die ihre Verwendung veranschaulichen.

### Nachverfolgung bearbeiteter Inhalte

Eine der häufigsten Verwendungen für versteckte Eingaben ist die Verfolgung, welcher Datenbankeintrag aktualisiert werden muss, wenn ein Bearbeitungsformular übermittelt wird. Ein typischer Arbeitsablauf sieht so aus:

1. Der Benutzer entscheidet sich, Inhalte zu bearbeiten, über die er die Kontrolle hat, wie z.B. einen Blogbeitrag oder einen Produkteintrag. Er beginnt, indem er die Bearbeitungstaste drückt.
2. Der zu bearbeitende Inhalt wird aus der Datenbank entnommen und in ein HTML-Formular geladen, damit der Benutzer Änderungen vornehmen kann.
3. Nach der Bearbeitung sendet der Benutzer das Formular ab, und die aktualisierten Daten werden zurück an den Server gesendet, um in der Datenbank aktualisiert zu werden.

Die Idee hier ist, dass während Schritt 2 die ID des zu aktualisierenden Datensatzes in einer versteckten Eingabe gehalten wird. Wenn das Formular in Schritt 3 übermittelt wird, wird die ID automatisch mit dem Datensatzinhalt zurück an den Server gesendet. Die ID informiert die Server-Komponente der Website genau darüber, welcher Datensatz mit den übermittelten Daten aktualisiert werden muss.

Ein vollständiges Beispiel, wie dies aussehen könnte, finden Sie im Abschnitt [Beispiele](#beispiele) weiter unten.

### Verbesserung der Website-Sicherheit

Ein häufiger Gebrauch von versteckten Eingabefeldern ist das Speichern von Cross-Site Request Forgery (CSRF) Tokens, die helfen, Websites vor [CSRF-Angriffen](/de/docs/Web/Security/Attacks/CSRF) zu schützen.

> [!NOTE]
> Daten, die in eine versteckte Eingabe eingefügt werden, sind nicht von Natur aus gesichert. Ihr Wert ist immer noch für den Endbenutzer sichtbar. Sie müssen gut gestaltete Geheimnisse verwenden, um Ihre Website tatsächlich zu sichern.

## Validierung

Verborgene Eingaben nehmen nicht an der Einschränkungsvalidierung teil; sie haben keinen wirklichen Wert, der eingeschränkt werden könnte.

## Beispiele

### Verwendung einer versteckten Datensatz-ID

Lassen Sie uns ansehen, wie wir eine Version des bearbeiteten Formulars implementieren könnten, das wir zuvor beschrieben haben (siehe [Nachverfolgung bearbeiteter Inhalte](#nachverfolgung_bearbeiteter_inhalte)), indem wir eine versteckte Eingabe verwenden, um die ID des bearbeiteten Datensatzes zu merken.

#### HTML

Das HTML des Bearbeitungsformulars sieht folgendermaßen aus:

```html
<form>
  <div>
    <label for="title">Post title:</label>
    <input type="text" id="title" name="title" value="My excellent blog post" />
  </div>
  <div>
    <label for="content">Post content:</label>
    <textarea id="content" name="content" cols="60" rows="5">
This is the content of my excellent blog post. I hope you enjoy it!
    </textarea>
  </div>
  <div>
    <button type="submit">Update post</button>
  </div>
  <input type="hidden" id="postId" name="postId" value="34657" />
</form>
```

```css hidden
html {
  font-family: sans-serif;
}

form {
  width: 500px;
}

div {
  display: flex;
  margin-bottom: 10px;
}

label {
  flex: 2;
  line-height: 2;
  text-align: right;
  padding-right: 20px;
}

input,
textarea {
  flex: 7;
  font-family: sans-serif;
  font-size: 1.1rem;
  padding: 5px;
}

textarea {
  height: 60px;
}
```

```js hidden
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
```

Der Server würde den Wert der versteckten Eingabe mit der ID `postID` auf die ID des Beitrags in seiner Datenbank setzen, bevor er das Formular an den Browser des Benutzers sendet und würde diese Informationen verwenden, wenn das Formular zurückgesendet wird, um zu wissen, welcher Datenbankeintrag mit den geänderten Informationen aktualisiert werden soll. Kein Skript ist im Inhalt erforderlich, um dies zu handhaben.

#### Ergebnis

{{ EmbedLiveSample('Examples', '100%', 200) }}

Wenn das Formular übermittelt wird, sehen die an den Server gesendeten Formulardaten etwa so aus:

`title=My+excellent+blog+post&content=This+is+the+content+of+my+excellent+blog+post.+I+hope+you+enjoy+it!&postId=34657`

Obwohl die versteckte Eingabe im Formular nicht sichtbar ist, werden ihre Daten dennoch übermittelt.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Ein String, der den Wert der verborgenen
        Daten darstellt, die Sie an den Server zurücksenden möchten.
      </td>
    </tr>
    <tr>
      <td><strong>Ereignisse</strong></td>
      <td>Keine.</td>
    </tr>
    <tr>
      <td><strong>Unterstützte gemeinsame Attribute</strong></td>
      <td><a href="/de/docs/Web/HTML/Reference/Elements/input#autocomplete"><code>autocomplete</code></a></td>
    </tr>
    <tr>
      <td><strong>IDL-Attribute</strong></td>
      <td><code>value</code></td>
    </tr>
    <tr>
      <td><strong>DOM-Schnittstelle</strong></td>
      <td><p>[`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)</p></td>
    </tr>
    <tr>
      <td><strong>Implizite ARIA-Rolle</strong></td>
      <td><a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">keine entsprechende Rolle</a></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTML-Formulare Leitfaden](/de/docs/Learn_web_development/Extensions/Forms)
- {{HTMLElement("input")}} und die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Schnittstelle, auf der es basiert
