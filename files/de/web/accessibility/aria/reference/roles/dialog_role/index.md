---
title: "ARIA: dialog-Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/dialog_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Die `dialog`-Rolle wird verwendet, um einen HTML-basierten Anwendungsdialog oder ein Fenster zu kennzeichnen, das Inhalte oder die Benutzeroberfläche vom Rest der Webanwendung oder Seite trennt. Dialoge werden im Allgemeinen mithilfe einer Überlagerung über dem übrigen Seiteninhalt platziert. Dialoge können entweder nicht-modal sein (es ist weiterhin möglich, mit Inhalten außerhalb des Dialogs zu interagieren) oder modal (nur mit den Inhalten im Dialog kann interagiert werden).

```html
<div
  role="dialog"
  aria-labelledby="dialog1Title"
  aria-describedby="dialog1Desc">
  <h2 id="dialog1Title">Your personal details were successfully updated</h2>
  <p id="dialog1Desc">
    You can change your details at any time in the user account section.
  </p>
  <button>Close</button>
</div>
```

## Beschreibung

Ein Dialog ist ein untergeordnetes Fenster des Hauptfensters einer Webanwendung. Für HTML-Seiten ist das Hauptanwendungsfenster das gesamte Webdokument, d.h. das `<body>`-Element.

Das Kennzeichnen eines Dialogelements mit der `dialog`-Rolle hilft assistiver Technologie, den Inhalt des Dialogs als gruppiert und vom Rest des Seiteninhalts getrennt zu identifizieren. Allerdings reicht es nicht aus, nur `role="dialog"` hinzuzufügen, um einen Dialog zugänglich zu machen. Zusätzlich müssen die folgenden Punkte erfüllt werden:

- Der Dialog muss ordnungsgemäß beschriftet sein.
- Der Tastaturfokus muss korrekt verwaltet werden.

Die folgenden Abschnitte beschreiben, wie diese beiden Anforderungen erfüllt werden können.

### Beschriftung

Auch wenn es nicht erforderlich ist, dass der Dialog selbst fokusfähig ist, muss er dennoch beschriftet werden. Die dem Dialog zugewiesene Beschriftung liefert kontextuelle Informationen für die interaktiven Steuerelemente innerhalb des Dialogs. Mit anderen Worten, das Etikett des Dialogs fungiert wie ein Gruppierungsetikett für die darin enthaltenen Steuerelemente (ähnlich wie ein `<legend>`-Element ein Gruppierungsetikett für die Steuerelemente innerhalb eines `<fieldset>`-Elements bereitstellt).

Wenn ein Dialog bereits eine sichtbare Titelleiste hat, kann der Text in dieser Leiste verwendet werden, um den Dialog selbst zu beschriften. Der beste Weg, dies zu erreichen, ist die Verwendung des Attributs [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) für das `role="dialog"`-Element. Zusätzlich kann, falls der Dialog neben dem Dialogtitel weiteren beschreibenden Text enthält, dieser Text mit dem Dialog über das Attribut [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) verknüpft werden. Dieser Ansatz wird im folgenden Code-Snippet gezeigt:

```html
<div
  role="dialog"
  aria-labelledby="dialog1Title"
  aria-describedby="dialog1Desc">
  <h2 id="dialog1Title">Your personal details were successfully updated</h2>
  <p id="dialog1Desc">
    You can change your details at any time in the user account section.
  </p>
  <button>Close</button>
</div>
```

> [!NOTE]
> Beachten Sie, dass der Titel und der Beschreibungstext eines Dialogs nicht fokussierbar sein müssen, um von Screenreadern im Nicht-Virtuellen-Modus wahrgenommen zu werden. Die Kombination aus der ARIA-Dialogrolle und Beschriftungstechniken sollte dazu führen, dass der Screenreader die Dialoginformationen ankündigt, wenn der Fokus darauf bewegt wird.

### Erforderliche JavaScript-Funktionen

#### Fokusverwaltung

Ein Dialog hat besondere Anforderungen an die Verwaltung des Tastaturfokus:

- Dialoge sollten immer mindestens ein fokussierbares Steuerelement enthalten. Bei vielen Dialogen gibt es einen Button wie "Schließen", "OK" oder "Abbrechen". Zusätzlich zum benötigten Steuerelement können Dialoge eine beliebige Anzahl fokussierbarer Elemente enthalten, sogar ganze Formulare oder andere Container-Widgets wie Registerkarten.
- Wenn der Dialog auf dem Bildschirm erscheint, sollte der Tastaturfokus (dessen Steuerung vom Zweck des Dialogs abhängt) auf das standardmäßig fokussierbare Steuerelement im Dialog verschoben werden. Bei Dialogen, die nur eine einfache Nachricht anzeigen, könnte dies ein "OK"-Button sein. Bei Dialogen, die ein Formular enthalten, könnte es das erste Feld im Formular sein.
- Nachdem der Dialog geschlossen wurde, sollte der Tastaturfokus wieder auf die Position gesetzt werden, an der er war, bevor er in den Dialog verschoben wurde. Andernfalls kann der Fokus zurück an den Anfang der Seite gesetzt werden.
- Für die meisten Dialoge wird erwartet, dass die Tab-Reihenfolge des Dialogs _schleift_, was bedeutet, dass, wenn der Benutzer die fokussierbaren Elemente im Dialog durchläuft, das erste fokussierbare Element fokussiert wird, nachdem das letzte erreicht wurde. Mit anderen Worten, die Tab-Reihenfolge sollte innerhalb des Dialogs und durch diesen enthalten sein.
- Wenn der Dialog verschoben oder in der Größe verändert werden kann, stellen Sie sicher, dass diese Aktionen sowohl von Tastatur- als auch von Mausnutzern ausgeführt werden können. Ebenso müssen, wenn ein Dialog spezielle Funktionen wie Werkzeugleisten oder Kontextmenüs bietet, diese für Tastaturbenutzer erreichbar und bedienbar sein.
- Dialoge können modal oder nicht-modal sein. Wenn ein _modaler_ Dialog erscheint, ist es nicht möglich, mit irgendwelchen Inhalten außerhalb des Dialogs zu interagieren. Mit anderen Worten, die Hauptanwendungsoberfläche oder der Seiteninhalt wird als vorübergehend deaktiviert angesehen, solange der modale Dialog angezeigt wird. Für _nicht-modale_ Dialoge ist es weiterhin möglich, mit Inhalten außerhalb des Dialogs zu interagieren, während der Dialog angezeigt wird. Beachten Sie, dass es für nicht-modale Dialoge eine globale Tastenkombination geben muss, die es ermöglicht, den Fokus zwischen geöffneten Dialogen und der Hauptseite zu wechseln.

### Zugehörige ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Verwenden Sie dieses Attribut, um den Dialog zu beschriften. Oft wird der Wert des `aria-labelledby`-Attributs die ID des Elements sein, das zum Betiteln des Dialogs verwendet wird.
- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
  - : Verwenden Sie dieses Attribut, um den Inhalt des Dialogs zu beschreiben.

### Mögliche Auswirkungen auf Benutzeragenten und assistive Technologien

Wenn die `dialog`-Rolle verwendet wird, sollte der Benutzeragent Folgendes tun:

- Das Element als Dialog in der Barrierefreiheits-API des Betriebssystems darstellen.

Wenn der Dialog korrekt beschriftet ist und der Fokus auf ein Element (oft ein interaktives Element, wie ein Button) innerhalb des Dialogs verschoben wird, sollten Bildschirmleser die zugängliche Rolle des Dialogs, den Namen und optional die Beschreibung sowie das fokussierte Element ankündigen.

> [!NOTE]
> Es kann unterschiedliche Meinungen darüber geben, wie assistive Technologien mit dieser Technik umgehen sollten, und die Reihenfolge der Ankündigungen kann je nach verwendeter assistiver Technologie unterschiedlich sein. Die oben gegebenen Informationen sind eine dieser Meinungen und können sich ändern, wenn die Spezifikation definiert wird.

## Beispiele

### Ein Dialog mit einem Formular

```html
<div
  role="dialog"
  aria-labelledby="dialog1Title"
  aria-describedby="dialog1Desc">
  <h2 id="dialog1Title">Subscription Form</h2>
  <p id="dialog1Desc">We will not share this information with third parties.</p>
  <form>
    <p>
      <label for="firstName">First Name</label>
      <input id="firstName" type="text" />
    </p>
    <p>
      <label for="lastName">Last Name</label>
      <input id="lastName" type="text" />
    </p>
    <p>
      <label for="interests">Interests</label>
      <textarea id="interests"></textarea>
    </p>
    <p>
      <input type="checkbox" id="autoLogin" name="autoLogin" />
      <label for="autoLogin">Auto-login?</label>
    </p>
    <p>
      <input type="submit" value="Save Information" />
    </p>
  </form>
</div>
```

#### Funktionierende Beispiele

- [jQuery-UI Dialog](https://jqueryui.com/dialog/)

### Hinweise

> [!NOTE]
> Während es möglich ist, Tastaturbenutzer daran zu hindern, den Fokus auf Elemente außerhalb des Dialogs zu setzen, können Screenreader-Benutzer möglicherweise dennoch mit dem virtuellen Cursor ihrer Screenreader zu diesem Inhalt navigieren.
> Es ist wichtig für Entwickler sicherzustellen, dass Inhalte außerhalb des modalen Dialogs für alle Benutzer unzugänglich sind, solange der modale Dialog aktiv ist.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: alertdialog-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role)
- {{HTMLElement('dialog', 'Das HTML <code>&lt;dialog&gt;</code>-Element')}}
