---
title: "`<details>` HTML-Details-Widrigelement"
short-title: <details>
slug: Web/HTML/Reference/Elements/details
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

Das **`<details>`** [HTML](/de/docs/Web/HTML)-Element erzeugt ein Widrigkeitswidget, bei dem Informationen nur sichtbar sind, wenn das Widget in einen offenen Zustand umgeschaltet wird. Eine Zusammenfassung oder ein Label muss mit dem {{HTMLElement("summary")}}-Element bereitgestellt werden.

Ein Widrigkeitswidget wird normalerweise auf dem Bildschirm mit einem kleinen Dreieck dargestellt, das sich dreht (oder dreht), um den offenen/geschlossenen Zustand anzuzeigen, mit einem Label neben dem Dreieck. Der Inhalt des `<summary>`-Elements wird als Beschriftung für das Widrigkeitswidget verwendet. Der Inhalt des `<details>` bietet die {{Glossary("accessible_description", "zugängliche Beschreibung")}} für das `<summary>`.

{{InteractiveExample("HTML Demo: &lt;details&gt;", "tabbed-shorter")}}

```html interactive-example
<details>
  <summary>Details</summary>
  Something small enough to escape casual notice.
</details>
```

```css interactive-example
details {
  border: 1px solid #aaaaaa;
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
  border-bottom: 1px solid #aaaaaa;
  margin-bottom: 0.5em;
}
```

Ein `<details>`-Widget kann sich in einem von zwei Zuständen befinden. Der Standardzustand _geschlossen_ zeigt nur das Dreieck und das Label innerhalb von `<summary>` an (oder eine vom {{Glossary("user_agent", "User-Agenten")}} definierte Standardzeichenkette, wenn kein `<summary>` vorhanden ist).

Wenn der Benutzer auf das Widget klickt oder es fokussiert und dann die Leertaste drückt, öffnet es sich "drehend" und offenbart seinen Inhalt. Der übliche Gebrauch eines Dreiecks, das sich dreht oder wendet, um das Öffnen oder Schließen des Widgets darzustellen, ist der Grund, warum diese manchmal "Twisty" genannt werden.

Sie können CSS verwenden, um das Widrigkeitswidget zu gestalten, und Sie können das Widget programmatisch öffnen und schließen, indem Sie das [`open`](#open)-Attribut setzen/entfernen. Leider gibt es derzeit keine eingebaute Möglichkeit, den Übergang zwischen offen und geschlossen zu animieren.

Im geschlossenen Zustand zeigt das Widget standardmäßig nur das Offenlegungsdreieck und die Zusammenfassung an. Im geöffneten Zustand wird es erweitert, um die darin enthaltenen Details anzuzeigen.

Vollständig standardkonforme Implementierungen wenden automatisch das CSS `{{cssxref("display")}}: list-item` auf das {{HTMLElement("summary")}}-Element an. Sie können dieses oder das {{cssxref("::marker")}}-Pseudo-Element verwenden, um das [Widrigkeitswidget anzupassen](/de/docs/Web/HTML/Reference/Elements/summary#changing_the_summarys_icon).

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `open`
  - : Dieses Boolean-Attribut gibt an, ob die Details - also der Inhalt des `<details>`-Elements - derzeit sichtbar sind. Die Details werden angezeigt, wenn dieses Attribut vorhanden ist, oder ausgeblendet, wenn dieses Attribut fehlt. Standardmäßig ist dieses Attribut nicht vorhanden, was bedeutet, dass die Details nicht sichtbar sind.

    > [!NOTE]
    > Sie müssen dieses Attribut vollständig entfernen, um die Details auszublenden. `open="false"` macht die Details sichtbar, da dieses Attribut Boolean ist.

- `name`
  - : Dieses Attribut ermöglicht es, mehrere `<details>`-Elemente zu verbinden, wobei jeweils nur eines geöffnet sein kann. Dies ermöglicht es Entwicklern, UI-Funktionen wie Akkordeons ohne Scripting einfach zu erstellen.

    Das `name`-Attribut spezifiziert einen Gruppennamen - geben Sie mehreren `<details>`-Elementen denselben `name`-Wert, um sie zu gruppieren. Nur eines der gruppierten `<details>`-Elemente kann gleichzeitig geöffnet sein - das Öffnen eines Elements führt dazu, dass ein anderes geschlossen wird. Wenn mehreren gruppierten `<details>`-Elementen das `open`-Attribut gegeben wird, wird nur das erste in der Quellreihenfolge als geöffnet gerendert.

    > [!NOTE]
    > `<details>`-Elemente müssen nicht nebeneinander im Quellcode stehen, um Teil derselben Gruppe zu sein.

## Ereignisse

Zusätzlich zu den üblichen von HTML-Elementen unterstützten Ereignissen unterstützt das `<details>`-Element das [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)-Ereignis, das an das `<details>`-Element gesendet wird, wann immer sich dessen Zustand zwischen geöffnet und geschlossen ändert. Es wird _nachher_ gesendet, nachdem sich der Zustand geändert hat, obwohl wenn sich der Zustand mehrfach ändert, bevor der Browser das Ereignis senden kann, die Ereignisse zusammengefasst werden, sodass nur eines gesendet wird.

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

### Ein einfaches Offenlegungselement

Dieses Beispiel zeigt ein einfaches `<details>`-Element mit einem `<summary>`.

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

Um die `<details>`-Box im offenen Zustand zu starten, fügen Sie das Boolean-Attribut `open` hinzu:

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

Wir schließen mehrere `<details>`-Boxen ein, alle mit demselben Namen, sodass nur eine gleichzeitig geöffnet sein kann:

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

Versuchen Sie, alle Widrigkeitswidgets zu öffnen. Wenn Sie eines öffnen, schließen sich alle anderen automatisch.

### Anpassen des Erscheinungsbildes

Nun lassen Sie uns etwas CSS anwenden, um das Erscheinungsbild der Offenlegungsbox anzupassen.

#### CSS

```css
details {
  font:
    16px "Open Sans",
    "Calibri",
    sans-serif;
  width: 620px;
}

details > summary {
  padding: 2px 6px;
  width: 15em;
  background-color: #dddddd;
  border: none;
  box-shadow: 3px 3px 4px black;
  cursor: pointer;
}

details > p {
  border-radius: 0 0 10px 10px;
  background-color: #dddddd;
  padding: 2px 6px;
  margin: 0;
  box-shadow: 3px 3px 4px black;
}

details:open > summary {
  background-color: #ccccff;
}
```

Dieses CSS erzeugt ein Aussehen, das einer Registerkarten-Oberfläche ähnelt, bei der das Klicken auf die Registerkarte diese öffnet, um ihren Inhalt anzuzeigen.

> [!NOTE]
> In Browsern, die die {{cssxref(":open")}}-Pseudoklasse nicht unterstützen, können Sie den Attributselektor `details[open]` verwenden, um das `<details>`-Element im offenen Zustand zu gestalten.

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

Sehen Sie sich die Seite des {{htmlelement("summary")}}-Elements für ein [Beispiel zur Anpassung des Widrigkeitswidgets](/de/docs/Web/HTML/Reference/Elements/summary#changing_the_summarys_icon) an.

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
          >Flussinhalt</a
        >, Abschnittswurzel, interaktiver Inhalt, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Ein {{HTMLElement("summary")}}-Element, gefolgt von
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalt</a
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
