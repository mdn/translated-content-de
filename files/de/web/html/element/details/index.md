---
title: "<details>: Das Details-Offenlegungselement"
slug: Web/HTML/Element/details
l10n:
  sourceCommit: ad59de382f5a523bf5dbada344e669d3fd9d4f49
---

{{HTMLSidebar}}

Das **`<details>`** [HTML](/de/docs/Web/HTML) Element erstellt ein Offenlegungs-Widget, in dem Informationen nur sichtbar sind, wenn das Widget in einen offenen Zustand umgeschaltet wird. Eine Zusammenfassung oder Beschreibung muss mit dem {{HTMLElement("summary")}} Element bereitgestellt werden.

Ein Offenlegungs-Widget wird typischerweise auf dem Bildschirm mit einem kleinen Dreieck dargestellt, das sich dreht (oder dreht), um den offenen/geschlossenen Zustand anzuzeigen, zusammen mit einer Bezeichnung neben dem Dreieck. Der Inhalt des `<summary>`-Elements wird als Bezeichnung für das Offenlegungs-Widget verwendet. Der Inhalt des `<details>` liefert die {{Glossary("accessible_description", "zugängliche Beschreibung")}} für das `<summary>`.

{{InteractiveExample("HTML Demo: &lt;details&gt;", "tabbed-shorter")}}

```html interactive-example
<details>
  <summary>Details</summary>
  Something small enough to escape casual notice.
</details>
```

```css interactive-example
details {
  border: 1px solid #aaa;
  border-radius: 4px;
  padding: 0.5em 0.5em 0;
}

summary {
  font-weight: bold;
  margin: -0.5em -0.5em 0;
  padding: 0.5em;
}

details[open] {
  padding: 0.5em;
}

details[open] summary {
  border-bottom: 1px solid #aaa;
  margin-bottom: 0.5em;
}
```

Ein `<details>`-Widget kann in einem von zwei Zuständen sein. Der Standard-_geschlossene_ Zustand zeigt nur das Dreieck und die Bezeichnung innerhalb von `<summary>` an (oder einen {{Glossary("user_agent", "user agent")}}-definierten Standardtext, wenn kein `<summary>` vorhanden ist).

Wenn der Benutzer auf das Widget klickt oder es fokussiert und dann die Leertaste drückt, "dreht" es sich auf und enthüllt seinen Inhalt. Die übliche Verwendung eines Dreiecks, das sich dreht oder dreht, um das Öffnen oder Schließen des Widgets darzustellen, ist der Grund, warum diese manchmal "Twisty" genannt werden.

Sie können CSS verwenden, um das Offenlegungs-Widget zu gestalten, und Sie können das Widget programmatisch öffnen und schließen, indem Sie das [`open`](#open) Attribut setzen/entfernen. Leider gibt es derzeit keine eingebaute Möglichkeit, den Übergang zwischen offen und geschlossen zu animieren.

Standardmäßig ist das Widget im geschlossenen Zustand nur hoch genug, um das Offenlegungsdreieck und die Zusammenfassung anzuzeigen. Im offenen Zustand wird es erweitert, um die darin enthaltenen Details anzuzeigen.

Vollständig standardkonforme Implementierungen wenden automatisch das CSS `{{cssxref("display")}}: list-item` auf das {{HTMLElement("summary")}} Element an. Sie können dies oder das {{cssxref("::marker")}} Pseudo-Element verwenden, um das [Offenlegungs-Widget anzupassen](/de/docs/Web/HTML/Element/summary#changing_the_summarys_icon).

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `open`

  - : Dieses boolesche Attribut gibt an, ob die Details – das heißt, der Inhalt des `<details>` Elements – derzeit sichtbar sind. Die Details werden angezeigt, wenn dieses Attribut vorhanden ist, oder versteckt, wenn dieses Attribut fehlt. Standardmäßig fehlt dieses Attribut, was bedeutet, dass die Details nicht sichtbar sind.

    > [!NOTE]
    > Sie müssen dieses Attribut vollständig entfernen, um die Details zu verbergen. `open="false"` macht die Details sichtbar, weil dieses Attribut ein boolesches Attribut ist.

- `name`

  - : Dieses Attribut ermöglicht es, mehrere `<details>` Elemente zu verbinden, wobei immer nur eines offen sein kann. So können Entwickler einfach UI-Features wie Akkordeons ohne Skripting erstellen.

    Das `name` Attribut legt einen Gruppennamen fest — geben Sie mehreren `<details>` Elementen denselben `name` Wert, um sie zu gruppieren. Nur eines der gruppierten `<details>` Elemente kann gleichzeitig geöffnet sein — das Öffnen eines führt dazu, dass sich ein anderes schließt. Wenn mehreren gruppierten `<details>` Elementen das `open` Attribut gegeben wird, wird nur das erste in der Quellreihenfolge geöffnet dargestellt.

    > **Hinweis:** `<details>` Elemente müssen nicht nebeneinander im Quelltext stehen, um Teil derselben Gruppe zu sein.

## Ereignisse

Zusätzlich zu den üblichen Ereignissen, die von HTML-Elementen unterstützt werden, unterstützt das `<details>` Element das [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event) Ereignis, das an das `<details>` Element gesendet wird, wann immer sich sein Zustand zwischen offen und geschlossen ändert. Es wird _nachdem_ sich der Zustand geändert hat gesendet, obwohl wenn sich der Zustand mehrmals ändert, bevor der Browser das Ereignis senden kann, die Ereignisse zusammengefasst werden, sodass nur eines gesendet wird.

Sie können einen Ereignis-Listener für das `toggle` Ereignis verwenden, um zu erkennen, wann sich der Zustand des Widgets ändert:

```js
details.addEventListener("toggle", (event) => {
  if (details.open) {
    /* the element was toggled open */
  } else {
    /* the element was toggled closed */
  }
});
```

## Beispiele

### Ein einfaches Offenlegungsbeispiel

Dieses Beispiel zeigt ein einfaches `<details>` Element mit einem `<summary>`.

```html
<details>
  <summary>System Requirements</summary>
  <p>
    Requires a computer running an operating system. The computer must have some
    memory and ideally some kind of long-term storage. An input device as well
    as some form of output device is recommended.
  </p>
</details>
```

#### Ergebnis

{{EmbedLiveSample("A_basic_disclosure_example", 650, 150)}}

### Erstellen einer offenen Offenlegungsbox

Um die `<details>` Box im bereits geöffneten Zustand zu starten, fügen Sie das boolesche `open` Attribut hinzu:

```html
<details open>
  <summary>System Requirements</summary>
  <p>
    Requires a computer running an operating system. The computer must have some
    memory and ideally some kind of long-term storage. An input device as well
    as some form of output device is recommended.
  </p>
</details>
```

#### Ergebnis

{{EmbedLiveSample("Creating_an_open_disclosure_box", 650, 150)}}

### Mehrere benannte Offenlegungsboxen

Wir fügen mehrere `<details>` Boxen ein, alle mit demselben Namen, sodass immer nur eine geöffnet sein kann:

```html
<details name="reqs">
  <summary>Graduation Requirements</summary>
  <p>
    Requires 40 credits, including a passing grade in health, geography,
    history, economics, and wood shop.
  </p>
</details>
<details name="reqs">
  <summary>System Requirements</summary>
  <p>
    Requires a computer running an operating system. The computer must have some
    memory and ideally some kind of long-term storage. An input device as well
    as some form of output device is recommended.
  </p>
</details>
<details name="reqs">
  <summary>Job Requirements</summary>
  <p>
    Requires knowledge of HTML, CSS, JavaScript, accessibility, web performance,
    privacy, security, and internationalization, as well as a dislike of
    broccoli.
  </p>
</details>
```

#### Ergebnis

{{EmbedLiveSample("Multiple named disclosure boxes", 650, 150)}}

Versuchen Sie, alle Offenlegungs-Widgets zu öffnen. Wenn Sie eines öffnen, schließen sich automatisch alle anderen.

### Anpassung des Erscheinungsbilds

Lassen Sie uns nun etwas CSS anwenden, um das Erscheinungsbild der Offenlegungsbox anzupassen.

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

details:open > summary {
  background-color: #ccf;
}
```

Dieses CSS erzeugt ein Aussehen, das einer Registerkartenoberfläche ähnelt, bei der das Klicken auf die Registerkarte diese öffnet, um ihren Inhalt zu enthüllen.

> [!NOTE]
> In Browsern, die die {{cssxref(":open")}} Pseudo-Klasse nicht unterstützen, können Sie den Attributselektor `details[open]` verwenden, um das `<details>` Element zu gestalten, wenn es im offenen Zustand ist.

#### HTML

```html
<details>
  <summary>System Requirements</summary>
  <p>
    Requires a computer running an operating system. The computer must have some
    memory and ideally some kind of long-term storage. An input device as well
    as some form of output device is recommended.
  </p>
</details>
```

#### Ergebnis

{{EmbedLiveSample("Customizing_the_appearance", 650, 150)}}

Sehen Sie sich die Seite {{htmlelement("summary")}} für ein [Beispiel zur Anpassung des Offenlegungs-Widgets](/de/docs/Web/HTML/Element/summary#changing_the_summarys_icon) an.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Fließender Inhalt</a
        >, Abschnittswurzel, interaktiver Inhalt, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Ein {{HTMLElement("summary")}} Element gefolgt von
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >fließendem Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >fließenden Inhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role"><code>group</code></a></td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Keine <code>role</code> erlaubt</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLDetailsElement`](/de/docs/Web/API/HTMLDetailsElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("summary")}}
- {{cssxref("::details-content")}}
