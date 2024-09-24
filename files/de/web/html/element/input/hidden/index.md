---
title: <input type="hidden">
slug: Web/HTML/Element/input/hidden
l10n:
  sourceCommit: b7955e77cd4293adf45ef23686df50b0305f02ad
---

{{HTMLSidebar}}

{{HTMLElement("input")}} Elemente vom Typ **`hidden`** ermöglichen es Webentwicklern, Daten einzubeziehen, die für Benutzer unsichtbar und nicht bearbeitbar sind, wenn ein Formular abgesendet wird. Zum Beispiel die ID des Inhalts, der gerade bestellt oder bearbeitet wird, oder ein einzigartiges Sicherheitstoken. Verborgene Eingaben sind vollständig unsichtbar auf der gerenderten Seite, und es gibt keine Möglichkeit, sie im Inhalt der Seite sichtbar zu machen.

> [!NOTE]
> Die Ereignisse {{domxref("Element/input_event", "input")}} und {{domxref("HTMLElement/change_event", "change")}} gelten nicht für diesen Eingabetyp. Verborgene Eingaben können nicht fokussiert werden, selbst mit JavaScript (z. B. `hiddenInput.focus()`).

## Wert

Das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut des {{HTMLElement("input")}}-Elements enthält einen String, der die verborgenen Daten enthält, die beim Absenden des Formulars an den Server übermittelt werden sollen. Dieser Wert kann über die Benutzeroberfläche weder bearbeitet noch eingesehen werden, obwohl man ihn über die Entwicklertools des Browsers bearbeiten könnte.

> [!WARNING]
> Obwohl der Wert dem Benutzer nicht im Seiteninhalt angezeigt wird, ist er sichtbar und kann mit den Entwicklertools oder der Funktion "Quelltext anzeigen" eines Browsers bearbeitet werden. Verlassen Sie sich nicht auf `hidden` Eingaben als eine Form der Sicherheit.

## Zusätzliche Attribute

Zusätzlich zu den gemeinsamen Attributen aller {{HTMLElement("input")}} Elemente bieten `hidden` Eingaben die folgenden Attribute.

### name

Dies ist eigentlich eines der gemeinsamen Attribute, hat aber eine spezielle Bedeutung für verborgene Eingaben. Normalerweise funktioniert das [`name`](/de/docs/Web/HTML/Element/input#name)-Attribut bei verborgenen Eingaben genauso wie bei jeder anderen Eingabe. Wird jedoch das Formular gesendet, wird eine verborgene Eingabe, deren `name` auf `_charset_` gesetzt ist, automatisch mit dem Wert des zur Formularübertragung verwendeten Zeichensatzes gemeldet.

## Verwendung von verborgenen Eingaben

Wie oben erwähnt, können verborgene Eingaben überall dort verwendet werden, wo Sie Daten einschließen möchten, die der Benutzer nicht sehen oder bearbeiten kann, wenn das Formular an den Server gesendet wird. Schauen wir uns einige Beispiele an, die deren Verwendung veranschaulichen.

### Nachverfolgen bearbeiteter Inhalte

Eine der häufigsten Anwendungen für verborgene Eingaben ist die Nachverfolgung, welches Datenbankeintrag aktualisiert werden muss, wenn ein Bearbeitungsformular abgesendet wird. Ein typischer Arbeitsablauf sieht so aus:

1. Der Benutzer entscheidet sich, einige Inhalte zu bearbeiten, über die er Kontrolle hat, z. B. einen Blogbeitrag oder einen Produkteintrag. Er beginnt, indem er die Schaltfläche Bearbeiten drückt.
2. Der zu bearbeitende Inhalt wird aus der Datenbank entnommen und in ein HTML-Formular geladen, damit der Benutzer Änderungen vornehmen kann.
3. Nach der Bearbeitung sendet der Benutzer das Formular ab, und die aktualisierten Daten werden zurück an den Server gesendet, um in die Datenbank übernommen zu werden.

Die Idee hierbei ist, dass während Schritt 2 die ID des zu aktualisierenden Datensatzes in einer verborgenen Eingabe gespeichert wird. Wenn das Formular in Schritt 3 abgesendet wird, wird die ID automatisch zusammen mit dem Inhalt des Datensatzes an den Server gesendet. Die ID informiert die serverseitige Komponente der Website darüber, welcher Datensatz mit den übermittelten Daten aktualisiert werden muss.

Ein vollständiges Beispiel, wie dies aussehen könnte, finden Sie im Abschnitt [Beispiele](#beispiele) unten.

### Verbesserung der Website-Sicherheit

Verborgene Eingaben werden auch verwendet, um Sicherheitstoken oder _Geheimnisse_ zu speichern und einzureichen, um die Sicherheit von Websites zu verbessern. Die Grundidee ist, dass, wenn ein Benutzer ein sensibles Formular ausfüllt, wie ein Formular auf seiner Bank-Website, um Geld auf ein anderes Konto zu überweisen, das Geheimnis, das ihm bereitgestellt wird, beweist, dass er derjenige ist, der er vorgibt zu sein, und dass er das richtige Formular benutzt, um die Überweisungsanfrage einzureichen.

Dies würde einen bösartigen Benutzer davon abhalten, ein gefälschtes Formular zu erstellen, das vorgibt, eine Bank zu sein, und das Formular an ahnungslose Benutzer zu senden, um sie zu täuschen, Geld an den falschen Ort zu überweisen. Diese Art von Angriff wird als [Cross Site Request Forgery (CSRF)](/de/docs/Learn/Server-side/First_steps/Website_security#cross-site_request_forgery_csrf) bezeichnet. So gut wie jedes seriöse serverseitige Framework verwendet verborgene Geheimnisse, um solche Angriffe zu verhindern.

> [!NOTE]
> Das Platzieren des Geheimnisses in einer verborgenen Eingabe macht es nicht von Natur aus sicher. Die Zusammensetzung und Codierung des Schlüssels würden das tun. Der Wert der verborgenen Eingabe besteht darin, das Geheimnis mit den Daten zu verknüpfen und es automatisch einzuschließen, wenn das Formular an den Server gesendet wird. Sie müssen gut gestaltete Geheimnisse verwenden, um Ihre Website tatsächlich zu sichern.

## Validierung

Verborgene Eingaben nehmen nicht an der Einschränkungsvalidierung teil; sie haben keinen echten Wert, der eingeschränkt werden könnte.

## Beispiele

Schauen wir uns an, wie wir vielleicht eine einfache Version des Bearbeitungsformulars umsetzen könnten, das wir zuvor beschrieben haben (siehe [Nachverfolgen bearbeiteter Inhalte](#nachverfolgen_bearbeiteter_inhalte)), indem wir eine verborgene Eingabe verwenden, um die ID des bearbeiteten Datensatzes zu speichern.

Das HTML des Bearbeitungsformulars könnte ungefähr so aussehen:

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

Lassen Sie uns auch einige einfache CSS hinzufügen:

```css
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

Der Server würde den Wert der verborgenen Eingabe mit der ID "`postID`" auf die ID des Beitrags in seiner Datenbank setzen, bevor das Formular an den Browser des Benutzers gesendet wird, und diese Information verwenden, wenn das Formular zurückgesendet wird, um zu wissen, welcher Datenbankeintrag mit den geänderten Informationen aktualisiert werden soll. Kein Skript ist im Inhalt erforderlich, um dies zu handhaben.

Die Ausgabe sieht wie folgt aus:

{{ EmbedLiveSample('Examples', '100%', 200) }}

> [!NOTE]
> Sie können das Beispiel auch auf GitHub finden (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/hidden-input-example/index.html), und auch [sehen Sie es live laufen](https://mdn.github.io/learning-area/html/forms/hidden-input-example/index.html)).

Wenn es übermittelt wird, werden die Formulardaten, die an den Server gesendet werden, ungefähr so aussehen:

`title=My+excellent+blog+post&content=This+is+the+content+of+my+excellent+blog+post.+I+hope+you+enjoy+it!&postId=34657`

Selbst wenn die verborgene Eingabe überhaupt nicht sichtbar ist, werden ihre Daten trotzdem übermittelt.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Eine Zeichenkette, die den Wert der verborgenen
        Daten repräsentiert, die Sie an den Server senden möchten.
      </td>
    </tr>
    <tr>
      <td><strong>Ereignisse</strong></td>
      <td>Keine.</td>
    </tr>
    <tr>
      <td><strong>Unterstützte allgemeine Attribute</strong></td>
      <td><a href="/de/docs/Web/HTML/Element/input#autocomplete"><code>autocomplete</code></a></td>
    </tr>
    <tr>
      <td><strong>IDL-Attribute</strong></td>
      <td><code>value</code></td>
    </tr>
    <tr>
      <td><strong>DOM-Schnittstelle</strong></td>
      <td><p>{{domxref("HTMLInputElement")}}</p></td>
    </tr>
    <tr>
      <td><strong>Methoden</strong></td>
      <td>Keine.</td>
    </tr>
    <tr>
      <td><strong>Implizite ARIA-Rolle</strong></td>
      <td><a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">keine entsprechende Rolle</a></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTML Formulare Handbuch](/de/docs/Learn/Forms)
- {{HTMLElement("input")}} und die darauf basierende {{domxref("HTMLInputElement")}} Schnittstelle
