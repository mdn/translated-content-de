---
title: <input type="hidden">
slug: Web/HTML/Element/input/hidden
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente des Typs **`hidden`** ermöglichen es Webentwicklern, Daten einzuschließen, die von den Benutzern beim Absenden eines Formulars nicht gesehen oder bearbeitet werden können. Zum Beispiel die ID des Inhalts, der gerade bestellt oder bearbeitet wird, oder ein einzigartiges Sicherheitstoken. Verborgene Eingaben sind auf der gerenderten Seite völlig unsichtbar, und es gibt keine Möglichkeit, sie im Seiteninhalt sichtbar zu machen.

> [!NOTE]
> Die [`input`](/de/docs/Web/API/Element/input_event) und [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignisse gelten nicht für diesen Eingabetyp. Verborgene Eingaben können nicht fokussiert werden, nicht einmal mithilfe von JavaScript (z. B. `hiddenInput.focus()`).

## Wert

Das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut des {{HTMLElement("input")}}-Elements enthält eine Zeichenfolge, die die versteckten Daten enthält, die Sie einschließen möchten, wenn das Formular an den Server gesendet wird. Dieses kann speziell nicht über die Benutzeroberfläche bearbeitet oder gesehen werden, obwohl Sie den Wert über die Entwicklerwerkzeuge des Browsers bearbeiten könnten.

> [!WARNING]
> Obwohl der Wert den Benutzern im Inhalt der Seite nicht angezeigt wird, ist er sichtbar und kann mit den Entwicklerwerkzeugen oder der "Quellcode anzeigen"-Funktionalität eines Browsers bearbeitet werden. Verlassen Sie sich nicht auf `hidden`-Eingaben als eine Form der Sicherheit.

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die allen {{HTMLElement("input")}}-Elementen gemeinsam sind, bieten `hidden`-Eingaben die folgenden Attribute.

### name

Dies ist tatsächlich eines der gemeinsamen Attribute, aber es hat eine spezielle Bedeutung, die für verborgene Eingaben verfügbar ist. Normalerweise funktioniert das [`name`](/de/docs/Web/HTML/Element/input#name)-Attribut auf versteckten Eingaben wie auf jeder anderen Eingabe. Jedoch wird beim Absenden des Formulars eine versteckte Eingabe, deren `name` auf `_charset_` gesetzt ist, automatisch mit dem Wert des Zeichensatzes, der zum Übermitteln des Formulars verwendet wird, gemeldet.

## Verwendung von versteckten Eingaben

Wie oben erwähnt, können versteckte Eingaben überall verwendet werden, wo Sie Daten einschließen möchten, die der Benutzer nicht sehen oder bearbeiten kann, wenn das Formular an den Server übermittelt wird. Schauen wir uns einige Beispiele an, die ihre Verwendung veranschaulichen.

### Nachverfolgung bearbeiteter Inhalte

Eine der häufigsten Verwendungen für versteckte Eingaben besteht darin, nachzuverfolgen, welcher Datenbankeintrag aktualisiert werden muss, wenn ein Bearbeitungsformular abgesendet wird. Ein typischer Arbeitsablauf sieht wie folgt aus:

1. Der Benutzer entscheidet sich, einige Inhalte, über die er die Kontrolle hat, wie einen Blog-Beitrag oder einen Produkteintrag, zu bearbeiten. Er beginnt, indem er auf die Schaltfläche "Bearbeiten" klickt.
2. Der zu bearbeitende Inhalt wird aus der Datenbank entnommen und in ein HTML-Formular geladen, um dem Benutzer die Möglichkeit zu geben, Änderungen vorzunehmen.
3. Nach dem Bearbeiten übermittelt der Benutzer das Formular, und die aktualisierten Daten werden zurück an den Server gesendet, um in der Datenbank aktualisiert zu werden.

Die Idee ist, dass während des Schritts 2 die ID des Datensatzes, der aktualisiert wird, in einem versteckten Eingabefeld aufbewahrt wird. Wenn das Formular in Schritt 3 abgesendet wird, wird die ID automatisch zusammen mit dem Datensatzinhalt an den Server zurückgesendet. Die ID informiert die serverseitige Komponente der Website genau darüber, welcher Datensatz mit den übermittelten Daten aktualisiert werden muss.

Ein vollständiges Beispiel, wie dies aussehen könnte, finden Sie im Abschnitt [Beispiele](#beispiele) unten.

### Verbesserung der Websicherheit

Verborgene Eingaben werden auch verwendet, um Sicherheitstoken oder _Geheimnisse_ zu speichern und zu übermitteln, um die Sicherheit der Website zu verbessern. Die grundlegende Idee ist, dass wenn ein Benutzer ein sensibles Formular ausfüllt, wie z. B. ein Formular auf seiner Bankwebsite, um Geld auf ein anderes Konto zu überweisen, das ihm bereitgestellte Geheimnis beweisen würde, dass er tatsächlich die Person ist, die er vorgibt zu sein, und dass er das richtige Formular verwendet, um den Überweisungsantrag zu übermitteln.

Dies würde einen bösartigen Benutzer davon abhalten, ein gefälschtes Formular zu erstellen, das sich als Bank ausgibt, und das Formular an ahnungslose Benutzer zu senden, um sie zu täuschen, Geld an den falschen Ort zu überweisen. Diese Art von Angriff nennt man eine [Cross Site Request Forgery (CSRF)](/de/docs/Learn/Server-side/First_steps/Website_security#cross-site_request_forgery_csrf); fast jedes seriöse serverseitige Framework verwendet versteckte Geheimnisse, um solche Angriffe zu verhindern.

> [!NOTE]
> Das Platzieren des Geheimnisses in einer verborgenen Eingabe macht es nicht von selbst sicher. Die Zusammensetzung und Kodierung des Schlüssels würde das tun. Der Wert der verborgenen Eingabe besteht darin, dass das Geheimnis mit den Daten verbunden bleibt und automatisch enthalten wird, wenn das Formular an den Server gesendet wird. Sie müssen gut gestaltete Geheimnisse verwenden, um Ihre Website tatsächlich zu sichern.

## Validierung

Verborgene Eingaben beteiligen sich nicht an der Constraint-Validierung; sie haben keinen echten Wert, der eingeschränkt werden könnte.

## Beispiele

Schauen wir uns an, wie wir eine einfache Version des Bearbeitungsformulars implementieren könnten, das wir zuvor beschrieben haben (siehe [Nachverfolgung bearbeiteter Inhalte](#nachverfolgung_bearbeiteter_inhalte)), indem wir eine verborgene Eingabe verwenden, um die ID des bearbeiteten Datensatzes zu speichern.

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

Fügen wir auch etwas einfaches CSS hinzu:

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

Der Server würde den Wert der verborgenen Eingabe mit der ID `postID` auf die ID des Beitrags in seiner Datenbank setzen, bevor das Formular an den Browser des Benutzers gesendet wird, und diese Informationen verwenden, wenn das Formular zurückgesendet wird, um zu wissen, welcher Datenbankeintrag mit den geänderten Informationen aktualisiert werden soll. Kein Skript im Inhalt ist für die Handhabung erforderlich.

Die Ausgabe sieht folgendermaßen aus:

{{ EmbedLiveSample('Examples', '100%', 200) }}

> [!NOTE]
> Sie finden das Beispiel auch auf GitHub (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/hidden-input-example/index.html), und auch [sehen Sie es live](https://mdn.github.io/learning-area/html/forms/hidden-input-example/index.html)).

Beim Absenden werden die Formulardaten, die an den Server gesendet werden, ungefähr so aussehen:

`title=My+excellent+blog+post&content=This+is+the+content+of+my+excellent+blog+post.+I+hope+you+enjoy+it!&postId=34657`

Auch wenn die verborgene Eingabe überhaupt nicht sichtbar ist, werden ihre Daten trotzdem übermittelt.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Eine Zeichenkette, die den Wert der versteckten
        Daten darstellt, die Sie an den Server übergeben möchten.
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
      <td><p>[`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)</p></td>
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

- [Leitfaden für HTML-Formulare](/de/docs/Learn/Forms)
- {{HTMLElement("input")}} und die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle, auf der es basiert.
