---
title: <input type="hidden">
slug: Web/HTML/Element/input/hidden
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente des Typs **`hidden`** ermöglichen es Webentwicklern, Daten einzuschließen, die beim Absenden eines Formulars weder gesehen noch von Benutzern modifiziert werden können. Zum Beispiel die ID der Inhalte, die gerade bestellt oder bearbeitet werden, oder ein einzigartiger Sicherheitstoken. Versteckte Eingaben sind auf der gerenderten Seite vollständig unsichtbar, und es gibt keine Möglichkeit, sie im Seiteninhalt sichtbar zu machen.

> [!NOTE]
> Die [`input`](/de/docs/Web/API/Element/input_event)- und [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignisse gelten nicht für diesen Eingabetyp. Versteckte Eingaben können nicht fokussiert werden, auch nicht mit JavaScript (z.B. `hiddenInput.focus()`).

## Wert

Das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut des {{HTMLElement("input")}}-Elements enthält eine Zeichenkette, die die versteckten Daten enthält, die beim Absenden des Formulars an den Server übermittelt werden sollen. Diese können vom Benutzer über die Benutzeroberfläche nicht bearbeitet oder gesehen werden, obwohl Sie den Wert über die Entwicklerwerkzeuge des Browsers bearbeiten könnten.

> [!WARNING]
> Auch wenn der Wert dem Benutzer im Seiteninhalt nicht angezeigt wird, ist er dennoch sichtbar und kann mit den Entwicklertools oder der "Quelltext anzeigen"-Funktionalität eines jeden Browsers bearbeitet werden. Verlassen Sie sich nicht auf `hidden` Eingaben als eine Form der Sicherheit.

## Zusätzliche Attribute

Neben den gemeinsamen Attributen aller {{HTMLElement("input")}}-Elemente bieten `hidden` Eingaben die folgenden Attribute.

### name

Dies ist eigentlich eines der gemeinsamen Attribute, aber es hat eine spezielle Bedeutung für versteckte Eingaben. Normalerweise funktioniert das [`name`](/de/docs/Web/HTML/Element/input#name)-Attribut bei versteckten Eingaben wie bei jeder anderen Eingabe. Wenn das Formular jedoch abgeschickt wird, wird eine versteckte Eingabe mit dem `name`-Attribut `_charset_` automatisch mit dem Wert des Zeichensatzes des Formulars übermittelt.

## Verwendung von versteckten Eingaben

Wie oben erwähnt, können versteckte Eingaben überall dort verwendet werden, wo Sie Daten einschließen möchten, die der Benutzer nicht sehen oder bearbeiten kann, im Zusammenhang mit dem Formular, wenn es an den Server gesendet wird. Lassen Sie uns einige Beispiele ansehen, die ihre Verwendung veranschaulichen.

### Verfolgung bearbeiteter Inhalte

Eine der häufigsten Anwendungen für versteckte Eingaben ist das Nachverfolgen, welcher Datenbankeintrag aktualisiert werden muss, wenn ein Bearbeitungsformular abgeschickt wird. Ein typischer Workflow sieht folgendermaßen aus:

1. Der Benutzer entscheidet sich, einige Inhalte zu bearbeiten, die er kontrolliert, wie einen Blogbeitrag oder einen Produkteintrag. Er beginnt, indem er die Bearbeitungstaste drückt.
2. Der zu bearbeitende Inhalt wird aus der Datenbank entnommen und in ein HTML-Formular geladen, damit der Benutzer Änderungen vornehmen kann.
3. Nach der Bearbeitung schickt der Benutzer das Formular ab, und die aktualisierten Daten werden zurück an den Server gesendet, um in der Datenbank aktualisiert zu werden.

Die Idee dabei ist, dass in Schritt 2 die ID des zu aktualisierenden Datensatzes in einer versteckten Eingabe gespeichert wird. Wenn das Formular in Schritt 3 abgeschickt wird, wird die ID automatisch zusammen mit dem Datensatzinhalt an den Server gesendet. Die ID ermöglicht es der serverseitigen Komponente der Website, genau zu wissen, welcher Datensatz mit den übermittelten Daten aktualisiert werden muss.

Ein vollständiges Beispiel, wie dies aussehen könnte, finden Sie im Abschnitt [Beispiele](#beispiele).

### Verbesserung der Sicherheit der Website

Versteckte Eingaben werden auch verwendet, um Sicherheitstoken oder _Secrets_ zu speichern und abzugeben, zum Zwecke der Verbesserung der Sicherheit der Website. Die Grundidee ist, dass wenn ein Benutzer ein sensibles Formular ausfüllt, wie zum Beispiel ein Formular auf seiner Bank-Website, um Geld auf ein anderes Konto zu überweisen, das ihnen bereitgestellte Secret beweist, dass sie tatsächlich die Person sind, die sie vorgeben zu sein, und dass sie das richtige Formular verwenden, um die Überweisungsanfrage durchzuführen.

Dies würde einen böswilligen Benutzer davon abhalten, ein gefälschtes Formular zu erstellen, das vorgibt, eine Bank zu sein, und das Formular ahnungslosen Benutzern zuzusenden, um sie zu täuschen, Geld an die falsche Stelle zu senden. Diese Art von Angriff nennt man [Cross Site Request Forgery (CSRF)](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security#cross-site_request_forgery_csrf); praktisch jedes seriöse serverseitige Framework verwendet versteckte Secrets, um solche Angriffe zu verhindern.

> [!NOTE]
> Das Platzieren des Secrets in einer versteckten Eingabe macht es nicht von selbst sicher. Die Zusammensetzung und Kodierung des Schlüssels würden das machen. Der Vorteil der versteckten Eingabe besteht darin, dass das Secret mit den Daten verknüpft bleibt und automatisch enthalten ist, wenn das Formular an den Server gesendet wird. Sie müssen gut gestaltete Secrets verwenden, um Ihre Website tatsächlich zu sichern.

## Validierung

Versteckte Eingaben nehmen nicht an der Einschränkungsvalidierung teil; sie haben keinen echten Wert, der eingeschränkt werden könnte.

## Beispiele

Sehen wir uns an, wie wir eine Version des zuvor beschriebenen Bearbeitungsformulars implementieren könnten (siehe [Verfolgung bearbeiteter Inhalte](#verfolgung_bearbeiteter_inhalte)), indem wir eine versteckte Eingabe verwenden, um die ID des bearbeiteten Datensatzes zu speichern.

Das HTML des Bearbeitungsformulars könnte wie folgt aussehen:

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

Lassen Sie uns auch etwas CSS hinzufügen:

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

Der Server würde den Wert der versteckten Eingabe mit der ID `postID` auf die ID des Beitrags in seiner Datenbank setzen, bevor das Formular an den Browser des Benutzers gesendet wird, und diese Information verwenden, wenn das Formular zurückgesendet wird, um zu wissen, welcher Datensatz mit den geänderten Informationen aktualisiert werden soll. Im Inhalt ist kein Skripting erforderlich, um dies zu handhaben.

Das Ergebnis sieht folgendermaßen aus:

{{ EmbedLiveSample('Examples', '100%', 200) }}

> [!NOTE]
> Sie können das Beispiel auch auf GitHub finden (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/hidden-input-example/index.html), und auch [live ansehen](https://mdn.github.io/learning-area/html/forms/hidden-input-example/index.html)).

Bei der Übermittlung wird die an den Server gesendete Formular-Daten etwa so aussehen:

`title=My+excellent+blog+post&content=This+is+the+content+of+my+excellent+blog+post.+I+hope+you+enjoy+it!&postId=34657`

Obwohl die versteckte Eingabe überhaupt nicht sichtbar ist, werden ihre Daten dennoch übermittelt.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Eine Zeichenkette, die den Wert der versteckten
        Daten darstellt, die Sie an den Server übermitteln möchten.
      </td>
    </tr>
    <tr>
      <td><strong>Ereignisse</strong></td>
      <td>Keine.</td>
    </tr>
    <tr>
      <td><strong>Unterstützte gemeinsame Attribute</strong></td>
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

- [Leitfaden für HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms)
- {{HTMLElement("input")}} und die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle, auf der es basiert
