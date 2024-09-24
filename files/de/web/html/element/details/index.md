---
title: "<details>: Das Details-Erfassen-Element"
slug: Web/HTML/Element/details
l10n:
  sourceCommit: 9c09b183a5ce844a75c2f22e909d03f71ca329fc
---

{{HTMLSidebar}}

Das **`<details>`** [HTML](/de/docs/Web/HTML) Element erstellt ein Erfassungs-Widget, bei dem Informationen nur sichtbar sind, wenn das Widget in den "offenen" Zustand umgeschaltet wird. Eine Zusammenfassung oder ein Label muss mit dem {{HTMLElement("summary")}}-Element bereitgestellt werden.

Ein Erfassungs-Widget wird typischerweise auf dem Bildschirm mit einem kleinen Dreieck dargestellt, das sich dreht (oder dreht), um den offenen/geschlossenen Status anzuzeigen, mit einem Label neben dem Dreieck. Der Inhalt des `<summary>`-Elements wird als Label für das Erfassungs-Widget verwendet. Der Inhalt des `<details>` bietet die {{glossary("accessible description")}} für das `<summary>`.

{{EmbedInteractiveExample("pages/tabbed/details.html", "tabbed-shorter")}}

Ein `<details>`-Widget kann sich in einem von zwei Zuständen befinden. Der standardmäßige _geschlossene_ Zustand zeigt nur das Dreieck und das Label innerhalb von `<summary>` an (oder einen vom {{Glossary("user agent")}} definierten Standardtext, wenn kein `<summary>` vorhanden ist).

Wenn der Benutzer auf das Widget klickt oder es fokussiert und dann die Leertaste drückt, "dreht" es sich und zeigt seinen Inhalt an. Die allgemeine Verwendung eines Dreiecks, das sich dreht oder dreht, um das Öffnen oder Schließen des Widgets darzustellen, ist der Grund, warum sie manchmal als "Twisty" bezeichnet werden.

Sie können CSS verwenden, um das Erfassungs-Widget zu gestalten, und Sie können das Widget programmatisch öffnen und schließen, indem Sie sein [`open`](#open)-Attribut setzen/entfernen. Leider gibt es derzeit keine eingebaute Möglichkeit, den Übergang zwischen geöffnet und geschlossen zu animieren.

Standardmäßig, wenn geschlossen, ist das Widget nur so hoch, dass das Erfassungsdreieck und die Zusammenfassung angezeigt werden. Wenn es geöffnet ist, erweitert es sich, um die darin enthaltenen Details anzuzeigen.

Vollständig standardkonforme Implementierungen wenden automatisch die CSS-Eigenschaft `{{cssxref("display")}}: list-item` auf das {{HTMLElement("summary")}}-Element an. Sie können dies verwenden, um sein Aussehen weiter anzupassen. Weitere Details finden Sie unter [Anpassen des Erfassungs-Widgets](#anpassung_des_erfassungs-widgets).

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `open`

  - : Dieses boolesche Attribut gibt an, ob die Details – also der Inhalt des `<details>`-Elements – derzeit sichtbar sind. Die Details werden angezeigt, wenn dieses Attribut existiert, oder ausgeblendet, wenn dieses Attribut fehlt. Standardmäßig fehlt dieses Attribut, was bedeutet, dass die Details nicht sichtbar sind.

    > [!NOTE]
    > Sie müssen dieses Attribut vollständig entfernen, um die Details auszublenden. `open="false"` macht die Details sichtbar, da dieses Attribut boolesch ist.

- `name`

  - : Dieses Attribut ermöglicht es mehreren `<details>`-Elementen, verbunden zu werden, wobei jeweils nur eines zur gleichen Zeit geöffnet sein kann. Dies ermöglicht es Entwicklern, UI-Features wie Akkordeons ohne Scripting einfach zu erstellen.

    Das `name`-Attribut spezifiziert einen Gruppennamen — geben Sie mehreren `<details>`-Elementen denselben `name`-Wert, um sie zu gruppieren. Nur eines der gruppierten `<details>`-Elemente kann gleichzeitig geöffnet sein — das Öffnen eines wird dazu führen, dass ein anderes geschlossen wird. Wenn mehreren gruppierten `<details>`-Elementen das `open`-Attribut gegeben wird, wird nur das erste in der Quellreihenfolge im geöffneten Zustand gerendert.

    > **Hinweis:** `<details>`-Elemente müssen nicht benachbart zueinander im Quellcode stehen, um Teil derselben Gruppe zu sein.

## Ereignisse

Zusätzlich zu den üblichen von HTML-Elementen unterstützten Ereignissen unterstützt das `<details>`-Element das {{domxref("HTMLDetailsElement/toggle_event", "toggle")}}-Ereignis, das dem `<details>`-Element immer dann zugewiesen wird, wenn sich sein Zustand zwischen offen und geschlossen ändert. Es wird nach der Änderung des Zustands gesendet, obwohl, wenn sich der Zustand mehrmals ändert, bevor der Browser das Ereignis zuweisen kann, die Ereignisse zusammengefasst werden, sodass nur eines gesendet wird.

Sie können einen Ereignis-Listener für das `toggle`-Ereignis verwenden, um zu erkennen, wann das Widget den Zustand ändert:

```js
details.addEventListener("toggle", (event) => {
  if (details.open) {
    /* das Element wurde geöffnet */
  } else {
    /* das Element wurde geschlossen */
  }
});
```

## Beispiele

### Ein einfaches Erfassungsbeispiel

Dieses Beispiel zeigt ein einfaches `<details>`-Element mit einem `<summary>`.

```html
<details>
  <summary>Systemanforderungen</summary>
  <p>
    Erfordert einen Computer, der ein Betriebssystem ausführt. Der Computer muss
    über einen gewissen Speicher und idealerweise eine Art Langzeitspeicher
    verfügen. Ein Eingabegerät sowie eine Art Ausgabegerät wird empfohlen.
  </p>
</details>
```

#### Ergebnis

{{EmbedLiveSample("A_simple_disclosure_example", 650, 150)}}

### Erstellen einer geöffneten Erfassungsbox

Um die `<details>`-Box im offenen Zustand zu starten, fügen Sie das boolesche `open`-Attribut hinzu:

```html
<details open>
  <summary>Systemanforderungen</summary>
  <p>
    Erfordert einen Computer, der ein Betriebssystem ausführt. Der Computer muss
    über einen gewissen Speicher und idealerweise eine Art Langzeitspeicher
    verfügen. Ein Eingabegerät sowie eine Art Ausgabegerät wird empfohlen.
  </p>
</details>
```

#### Ergebnis

{{EmbedLiveSample("Creating_an_open_disclosure_box", 650, 150)}}

### Mehrere benannte Erfassungsboxen

Wir fügen mehrere `<details>`-Boxen hinzu, alle mit demselben Namen, sodass jeweils nur eine geöffnet sein kann:

```html
<details name="reqs">
  <summary>Abschlussanforderungen</summary>
  <p>
    Erfordert 40 Leistungspunkte, einschließlich einer bestandenen Note in
    Gesundheit, Geografie, Geschichte, Wirtschaft und Holzwerkstatt.
  </p>
</details>
<details name="reqs">
  <summary>Systemanforderungen</summary>
  <p>
    Erfordert einen Computer, der ein Betriebssystem ausführt. Der Computer muss
    über einen gewissen Speicher und idealerweise eine Art Langzeitspeicher
    verfügen. Ein Eingabegerät sowie eine Art Ausgabegerät wird empfohlen.
  </p>
</details>
<details name="reqs">
  <summary>Berufliche Anforderungen</summary>
  <p>
    Erfordert Kenntnisse in HTML, CSS, JavaScript, Barrierefreiheit,
    Web-Performance, Datenschutz, Sicherheit und Internationalisierung sowie
    eine Abneigung gegen Brokkoli.
  </p>
</details>
```

#### Ergebnis

{{EmbedLiveSample("Multiple named disclosure boxes", 650, 150)}}

Versuchen Sie, alle Erfassungs-Widgets zu öffnen. Wenn Sie eines öffnen, schließen sich automatisch alle anderen.

### Anpassung des Erscheinungsbildes

Lassen Sie uns nun einige CSS-Regeln anwenden, um das Erscheinungsbild der Erfassungsbox anzupassen.

#### CSS

```css
details {
  font:
    16px "Open Sans",
    Calibri,
    sans-serif;
  width: 620px;
}

details > summary {
  padding: 2px 6px;
  width: 15em;
  background-color: #ddd;
  border: none;
  box-shadow: 3px 3px 4px black;
  cursor: pointer;
}

details > p {
  border-radius: 0 0 10px 10px;
  background-color: #ddd;
  padding: 2px 6px;
  margin: 0;
  box-shadow: 3px 3px 4px black;
}

details[open] > summary {
  background-color: #ccf;
}
```

Dieses CSS erstellt ein Aussehen ähnlich einer Registerschnittstelle, bei der durch Klicken auf die Registerkarte diese geöffnet wird, um ihren Inhalt anzuzeigen.

Der Selektor `details[open]` kann verwendet werden, um das Element zu stylen, das geöffnet ist.

#### HTML

```html
<details>
  <summary>Systemanforderungen</summary>
  <p>
    Erfordert einen Computer, der ein Betriebssystem ausführt. Der Computer muss
    über einen gewissen Speicher und idealerweise eine Art Langzeitspeicher
    verfügen. Ein Eingabegerät sowie eine Art Ausgabegerät wird empfohlen.
  </p>
</details>
```

#### Ergebnis

{{EmbedLiveSample("Customizing_the_appearance", 650, 150)}}

### Anpassung des Erfassungs-Widgets

Das Erfassungsdreieck selbst kann angepasst werden, obwohl dies nicht so breit unterstützt wird. Es gibt Unterschiede in der Unterstützung dieser Anpassung durch die Browser aufgrund experimenteller Implementierungen, als das Element standardisiert wurde, sodass wir mehrere Ansätze für eine Weile verwenden müssen.

Das {{HTMLElement("summary")}}-Element unterstützt die Abkürzungseigenschaft {{cssxref("list-style")}} und ihre Langfassungseigenschaften, wie {{cssxref("list-style-type")}}, um das Erfassungsdreieck in das zu ändern, was Sie wählen (meistens mit {{cssxref("list-style-image")}}). Zum Beispiel können wir das Erfassungs-Widget-Icon entfernen, indem wir `list-style: none` setzen.

#### CSS

```css
details {
  font:
    16px "Open Sans",
    Calibri,
    sans-serif;
  width: 620px;
}

details > summary {
  padding: 2px 6px;
  width: 15em;
  background-color: #ddd;
  border: none;
  box-shadow: 3px 3px 4px black;
  cursor: pointer;
  list-style: none;
}

details > p {
  border-radius: 0 0 10px 10px;
  background-color: #ddd;
  padding: 2px 6px;
  margin: 0;
  box-shadow: 3px 3px 4px black;
}
```

Dieses CSS erstellt ein Aussehen ähnlich einer Registerschnittstelle, bei der das Aktivieren der Registerkarte sie erweitert und öffnet, um ihren Inhalt anzuzeigen.

#### HTML

```html
<details>
  <summary>Systemanforderungen</summary>
  <p>
    Erfordert einen Computer, der ein Betriebssystem ausführt. Der Computer muss
    über einen gewissen Speicher und idealerweise eine Art Langzeitspeicher
    verfügen. Ein Eingabegerät sowie eine Art Ausgabegerät wird empfohlen.
  </p>
</details>
```

#### Ergebnis

{{EmbedLiveSample("Customizing_the_disclosure_widget", 650, 150)}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories">Content categories</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Flow content</a>,
        sectioning root, interactive content, palpable content.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        Ein {{HTMLElement("summary")}}-Element gefolgt von
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">flow content</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">flow content</a>
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td><a href="/de/docs/Web/Accessibility/ARIA/Roles/group_role"><code>group</code></a></td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>Keine <code>role</code> erlaubt</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>{{domxref("HTMLDetailsElement")}}</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("summary")}}
