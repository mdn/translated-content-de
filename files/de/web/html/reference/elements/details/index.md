---
title: "<details>: Das Details-Disclosure-Element"
slug: Web/HTML/Reference/Elements/details
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{HTMLSidebar}}

Das **`<details>`**-[HTML](/de/docs/Web/HTML)-Element erstellt ein Disclosure-Widget, bei dem Informationen nur sichtbar sind, wenn das Widget in einen offenen Zustand umgeschaltet wird. Ein Überblick oder eine Beschriftung muss mit dem {{HTMLElement("summary")}}-Element bereitgestellt werden.

Ein Disclosure-Widget wird typischerweise auf dem Bildschirm mit einem kleinen Dreieck dargestellt, das sich dreht (oder verdreht), um den Zustand offen/geschlossen anzuzeigen, mit einer Beschriftung neben dem Dreieck. Der Inhalt des `<summary>`-Elements wird als Beschriftung für das Disclosure-Widget verwendet. Der Inhalt des `<details>` bietet die {{Glossary("accessible_description", "zugängliche Beschreibung")}} für das `<summary>`.

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

Ein `<details>`-Widget kann sich in einem von zwei Zuständen befinden. Der Standardzustand _geschlossen_ zeigt nur das Dreieck und die Beschriftung innerhalb von `<summary>` an (oder eine vom {{Glossary("user_agent", "User-Agenten")}} definierte Standardzeichenfolge, wenn kein `<summary>` vorhanden ist).

Wenn der Benutzer auf das Widget klickt oder es fokussiert und dann die Leertaste drückt, "dreht" es sich auf und zeigt seinen Inhalt. Der übliche Gebrauch eines Dreiecks, das sich dreht oder verdreht, um das Öffnen oder Schließen des Widgets darzustellen, ist der Grund, warum sie manchmal "Twisty" genannt werden.

Sie können CSS verwenden, um das Disclosure-Widget zu gestalten, und Sie können das Widget programmatisch öffnen und schließen, indem Sie sein [`open`](#open)-Attribut setzen/entfernen. Leider gibt es derzeit keine eingebaute Möglichkeit, den Übergang zwischen offen und geschlossen zu animieren.

Standardmäßig ist das Widget, wenn es geschlossen ist, nur hoch genug, um das Disclosure-Dreieck und die Zusammenfassung anzuzeigen. Wenn es geöffnet ist, erweitert es sich, um die darin enthaltenen Details anzuzeigen.

Vollständig standardkonforme Implementierungen wenden automatisch das CSS `{{cssxref("display")}}: list-item` auf das {{HTMLElement("summary")}}-Element an. Sie können dieses oder das {{cssxref("::marker")}}-Pseudo-Element verwenden, um das [Disclosure-Widget anzupassen](/de/docs/Web/HTML/Reference/Elements/summary#changing_the_summarys_icon).

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `open`

  - : Dieses boolesche Attribut gibt an, ob die Details — das heißt, der Inhalt des `<details>`-Elements — aktuell sichtbar sind. Die Details werden angezeigt, wenn dieses Attribut vorhanden ist, oder ausgeblendet, wenn dieses Attribut fehlt. Standardmäßig ist dieses Attribut nicht vorhanden, was bedeutet, dass die Details nicht sichtbar sind.

    > [!NOTE]
    > Sie müssen dieses Attribut vollständig entfernen, um die Details auszublenden. `open="false"` macht die Details sichtbar, da dieses Attribut boolesch ist.

- `name`

  - : Dieses Attribut ermöglicht es, mehrere `<details>`-Elemente zu verbinden, bei denen jeweils nur eines gleichzeitig geöffnet sein kann. Dies ermöglicht es Entwicklern, UI-Funktionen wie Akkordeons ohne Skripte einfach zu erstellen.

    Das `name`-Attribut gibt einen Gruppennamen an — geben Sie mehreren `<details>`-Elementen denselben `name`-Wert, um sie zu gruppieren. Nur eines der gruppierten `<details>`-Elemente kann gleichzeitig geöffnet sein — das Öffnen eines verursacht das Schließen eines anderen. Wenn mehreren gruppierten `<details>`-Elementen das `open`-Attribut gegeben wird, wird nur das erste in der Quellenreihenfolge geöffnet gerendert.

    > **Hinweis:** `<details>`-Elemente müssen nicht nebeneinander in der Quelle stehen, um Teil derselben Gruppe zu sein.

## Ereignisse

Zusätzlich zu den üblichen Ereignissen, die von HTML-Elementen unterstützt werden, unterstützt das `<details>`-Element das [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)-Ereignis, das an das `<details>`-Element gesendet wird, wann immer sich sein Zustand zwischen offen und geschlossen ändert. Es wird _nach_ der Zustandsänderung gesendet, obwohl, wenn sich der Zustand mehrmals ändert, bevor der Browser das Ereignis senden kann, die Ereignisse zusammengefasst werden, sodass nur eines gesendet wird.

Sie können einen Ereignis-Listener für das `toggle`-Ereignis verwenden, um zu erkennen, wann sich der Zustand des Widgets ändert:

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

### Ein grundlegendes Disclosure-Beispiel

Dieses Beispiel zeigt ein grundlegendes `<details>`-Element mit einem `<summary>`.

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

### Erstellen eines offenen Disclosure-Feldes

Um das `<details>`-Feld im offenen Zustand zu starten, fügen Sie das boolesche `open`-Attribut hinzu:

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

### Mehrere benannte Disclosure-Felder

Wir fügen mehrere `<details>`-Elemente ein, alle mit demselben Namen, sodass immer nur eines geöffnet sein kann:

```html
<details name="requirements">
  <summary>Graduation Requirements</summary>
  <p>
    Requires 40 credits, including a passing grade in health, geography,
    history, economics, and wood shop.
  </p>
</details>
<details name="requirements">
  <summary>System Requirements</summary>
  <p>
    Requires a computer running an operating system. The computer must have some
    memory and ideally some kind of long-term storage. An input device as well
    as some form of output device is recommended.
  </p>
</details>
<details name="requirements">
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

Versuchen Sie, alle Disclosure-Widgets zu öffnen. Wenn Sie eines öffnen, schließen sich automatisch alle anderen.

### Anpassen des Erscheinungsbildes

Nun wollen wir einige CSS anwenden, um das Erscheinungsbild des Disclosure-Feldes anzupassen.

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

Dieses CSS erzeugt ein Aussehen, das einer Registerkartenoberfläche ähnelt, bei der durch Klicken auf die Registerkarte deren Inhalt geöffnet wird.

> [!NOTE]
> In Browsern, die die {{cssxref(":open")}}-Pseudo-Klasse nicht unterstützen, können Sie den Attributselektor `details[open]` verwenden, um das `<details>`-Element im offenen Zustand zu gestalten.

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

Siehe die {{htmlelement("summary")}}-Seite für ein [Beispiel zum Anpassen des Disclosure-Widgets](/de/docs/Web/HTML/Reference/Elements/summary#changing_the_summarys_icon).

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Fließender Inhalt</a
        >, Abschnitts-Wurzel, interaktiver Inhalt, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Ein {{HTMLElement("summary")}}-Element gefolgt von
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >fließendem Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Start- als auch der End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
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
