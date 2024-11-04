---
title: "ARIA: dialog Rolle"
slug: Web/Accessibility/ARIA/Roles/dialog_role
l10n:
  sourceCommit: 3a004b55441ee5ac51bd34be5f3b7c6ce693ed6d
---

{{AccessibilitySidebar}}

Die `dialog` Rolle wird verwendet, um einen HTML-basierten Anwendungsdialog oder ein Fenster zu kennzeichnen, das Inhalte oder die Benutzeroberfläche vom Rest der Webanwendung oder Seite trennt. Dialoge werden im Allgemeinen über dem Rest des Seiteninhalts mittels eines Overlays platziert. Dialoge können entweder nicht-modal (es ist immer noch möglich, mit Inhalten außerhalb des Dialogs zu interagieren) oder modal sein (es kann nur mit dem Inhalt im Dialog interagiert werden).

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

Ein Dialog ist ein untergeordnetes Fenster des Hauptfensters einer Webanwendung. Für HTML-Seiten ist das Hauptanwendungsfenster das gesamte Webdokument, d.h. das body-Element.

Die Kennzeichnung eines Dialogelements mit der `dialog` Rolle hilft unterstützenden Technologien, den Inhalt des Dialogs als gruppiert und vom restlichen Seiteninhalt getrennt zu identifizieren. Allerdings reicht es nicht aus, nur `role="dialog"` hinzuzufügen, um einen Dialog barrierefrei zu machen. Zusätzlich müssen folgende Dinge erledigt werden:

- Der Dialog muss korrekt beschriftet sein
- Die Tastaturfokussierung muss korrekt verwaltet werden

Die folgenden Abschnitte beschreiben, wie diese beiden Anforderungen erfüllt werden können.

### Beschriftung

Auch wenn es nicht erforderlich ist, dass der Dialog selbst den Fokus erhalten kann, muss er dennoch beschriftet werden. Die dem Dialog gegebene Beschriftung liefert kontextuelle Informationen für die interaktiven Steuerelemente im Dialog. Mit anderen Worten, die Beschriftung des Dialogs fungiert als Gruppierungsbeschriftung für die darin enthaltenen Steuerelemente (ähnlich wie ein `<legend>`-Element eine Gruppierungsbeschriftung für die Steuerelemente innerhalb eines `<fieldset>`-Elements bereitstellt).

Wenn ein Dialog bereits eine sichtbare Titelleiste hat, kann der Text in dieser Leiste verwendet werden, um den Dialog selbst zu beschriften. Der beste Weg, dies zu erreichen, ist die Verwendung des [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) Attributs für das `role="dialog"` Element. Zusätzlich, wenn der Dialog zusätzlichen beschreibenden Text neben dem Dialogtitel enthält, kann dieser Text mit dem [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) Attribut mit dem Dialog verbunden werden. Dieser Ansatz wird im folgenden Code-Beispiel gezeigt:

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
> Beachten Sie, dass der Titel und der Beschreibungs-Text eines Dialogs nicht fokussierbar sein müssen, damit sie von Screenreadern im nicht-virtuellen Modus wahrgenommen werden. Die Kombination aus der ARIA-Dialog-Rolle und Beschriftungstechniken sollte den Screenreader dazu bringen, die Informationen des Dialogs anzukündigen, wenn der Fokus darauf gelegt wird.

### Erforderliche JavaScript-Funktionen

#### Fokusmanagement

Ein Dialog hat bestimmte Anforderungen daran, wie der Tastaturfokus verwaltet werden sollte:

- Dialoge sollten immer mindestens ein fokussierbares Steuerelement haben. Bei vielen Dialogen wird es einen Button wie „Schließen“, „OK“ oder „Abbrechen“ geben. Neben dem benötigten Steuerelement können Dialoge beliebig viele fokussierbare Elemente enthalten, sogar ganze Formulare oder andere Container-Widgets wie Tabs.
- Wenn der Dialog auf dem Bildschirm erscheint, sollte der Tastaturfokus (dessen Steuerung vom Zweck des Dialogs abhängt) auf das standardmäßig fokussierbare Steuerelement im Dialog verschoben werden. Bei Dialogen, die nur eine einfache Nachricht bieten, könnte es ein „OK“-Button sein. Bei Dialogen mit Formularen könnte es das erste Feld im Formular sein.
- Nachdem der Dialog geschlossen wird, sollte der Tastaturfokus dorthin zurückkehren, wo er war, bevor er in den Dialog verschoben wurde. Andernfalls kann der Fokus an den Anfang der Seite fallen.
- Bei den meisten Dialogen wird erwartet, dass die Tab-Reihenfolge des Dialogs _umwickelt_, was bedeutet, dass, wenn der Benutzer die fokussierbaren Elemente im Dialog durchgeht, das erste fokussierbare Element fokussiert wird, nachdem das letzte erreicht wurde. Mit anderen Worten, die Tab-Reihenfolge sollte innerhalb und durch den Dialog begrenzt sein.
- Wenn der Dialog verschoben oder in der Größe verändert werden kann, stellen Sie sicher, dass diese Aktionen sowohl von Tastaturbenutzern als auch von Mausbenutzern ausgeführt werden können. Ebenso müssen, wenn ein Dialog spezielle Funktionen wie Symbolleisten oder Kontextmenüs bietet, diese ebenfalls für Tastaturbenutzer erreichbar und bedienbar sein.
- Dialoge können modal oder nicht-modal sein. Wenn ein _modaler_ Dialog auf dem Bildschirm erscheint, ist es nicht möglich, mit Inhalten außerhalb des Dialogs zu interagieren. Mit anderen Worten, die Hauptbenutzeroberfläche der Anwendung oder der Seiteninhalt wird als vorübergehend deaktiviert betrachtet, solange der modale Dialog angezeigt wird. Bei _nicht-modalen_ Dialogen ist es weiterhin möglich, mit Inhalten außerhalb des Dialogs zu interagieren, während der Dialog angezeigt wird. Beachten Sie, dass es für nicht-modale Dialoge eine globale Tastenkombination geben muss, die es ermöglicht, den Fokus zwischen geöffneten Dialogen und der Hauptseite zu verschieben.

### Zugeordnete ARIA-Rollen, Zustände und Eigenschaften

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
  - : Verwenden Sie dieses Attribut, um den Dialog zu beschriften. Oft wird der Wert des `aria-labelledby` Attributs die ID des Elements sein, das den Dialog betitelt.
- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)
  - : Verwenden Sie dieses Attribut, um den Inhalt des Dialogs zu beschreiben.

### Mögliche Auswirkungen auf Benutzeragenten und unterstützende Technologien

Wenn die `dialog` Rolle verwendet wird, sollte der Benutzeragent Folgendes tun:

- Das Element als Dialog in der Barrierefreiheitsschnittstelle des Betriebssystems offenlegen.

Wenn der Dialog korrekt beschriftet ist und der Fokus auf ein Element (oft ein interaktives Element, wie ein Button) im Dialog verschoben wird, sollten Screenreader die zugängliche Rolle des Dialogs, den Namen und optional die Beschreibung ankündigen, zusammen mit dem ankündigen des fokussierten Elements.

> [!NOTE]
> Die Meinungen darüber, wie unterstützende Technologien mit dieser Technik umgehen sollten, können unterschiedlich sein, und die Reihenfolge der Ankündigungen kann sich je nach verwendeter unterstützender Technologie unterscheiden. Die oben bereitgestellten Informationen sind eine dieser Meinungen und können sich ändern, wenn die Spezifikation definiert wird.

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

### Anmerkungen

> [!NOTE]
> Während es möglich ist, Tastaturnutzern zu verhindern, den Fokus auf Elemente außerhalb des Dialogs zu verschieben, können Screenreadernutzer möglicherweise weiterhin mit ihrem virtuellen Cursor zu diesem Inhalt navigieren.
> Es ist wichtig für Entwickler sicherzustellen, dass Inhalte außerhalb des modalen Dialogs für alle Nutzer unzugänglich sind, während der modale Dialog aktiv ist.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: alertdialog Rolle](/de/docs/Web/Accessibility/ARIA/Roles/alertdialog_role)
- {{HTMLElement('dialog', 'Das HTML <code>&lt;dialog&gt;</code> Element')}}
