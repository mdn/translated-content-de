---
title: "ARIA: dialog Rolle"
slug: Web/Accessibility/ARIA/Roles/dialog_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die `dialog` Rolle wird verwendet, um ein HTML-basiertes Anwendungsdialog- oder -fenster zu kennzeichnen, das Inhalte oder die Benutzeroberfläche vom Rest der Webanwendung oder Seite trennt. Dialoge werden in der Regel über den Rest des Seiteninhalts mithilfe einer Overlay-Ebene platziert. Dialoge können entweder nicht-modal (es ist weiterhin möglich, mit Inhalten außerhalb des Dialogs zu interagieren) oder modal sein (nur mit den Inhalten im Dialog kann interagiert werden).

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

Ein Dialog ist ein untergeordnetes Fenster des Hauptfensters einer Webanwendung. Für HTML-Seiten ist das Hauptanwendungsfenster das gesamte Webdokument, also das `body`-Element.

Die Kennzeichnung eines Dialogelements mit der `dialog`-Rolle hilft assistiven Technologien, den Inhalt des Dialogs als gruppiert und vom Rest des Seiteninhalts getrennt zu identifizieren. Allerdings ist das Hinzufügen von `role="dialog"` allein nicht ausreichend, um einen Dialog zugänglich zu machen. Zudem müssen folgende Anforderungen erfüllt werden:

- Der Dialog muss korrekt beschriftet werden
- Die Tastatursteuerung muss korrekt verwaltet werden

Die folgenden Abschnitte beschreiben, wie diese beiden Anforderungen erfüllt werden können.

### Beschriftung

Es ist zwar nicht erforderlich, dass der Dialog selbst den Fokus erhalten kann, dennoch muss er beschriftet werden. Die dem Dialog gegebene Beschriftung liefert kontextbezogene Informationen für die interaktiven Steuerungen innerhalb des Dialogs. Mit anderen Worten, die Beschriftung des Dialogs funktioniert wie eine Gruppenbeschriftung für die Steuerungen innerhalb desselben (ähnlich wie ein `<legend>`-Element eine Gruppenbeschriftung für die Steuerungen innerhalb eines `<fieldset>`-Elements bietet).

Falls ein Dialog bereits eine sichtbare Titelleiste hat, kann der Text innerhalb dieser Leiste verwendet werden, um den Dialog selbst zu beschriften. Der beste Weg, dies zu erreichen, ist die Verwendung von [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) Attribut für das `role="dialog"`-Element. Zusätzlich, wenn der Dialog zusätzlichen beschreibenden Text neben dem Dialogtitel enthält, kann dieser Text mit dem Dialog mithilfe des [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) Attributs assoziiert werden. Dieser Ansatz wird im folgenden Codeausschnitt gezeigt:

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
> Bedenken Sie, dass der Titel und der beschreibende Text eines Dialogs nicht fokussierbar sein müssen, damit sie von Bildschirmlesern im nicht-virtuellen Modus wahrgenommen werden können. Die Kombination der ARIA-Dialogrolle und der Beschriftungstechniken sollte den Bildschirmleser dazu bringen, die Informationen des Dialogs anzukündigen, wenn der Fokus darauf verschoben wird.

### Erforderliche JavaScript-Funktionen

#### Fokusverwaltung

Ein Dialog hat spezielle Anforderungen daran, wie die Tastatursteuerung verwaltet werden sollte:

- Dialoge sollten immer mindestens eine fokussierbare Steuerung haben. Für viele Dialoge gibt es eine Schaltfläche wie "Schließen", "OK" oder "Abbrechen". Zusätzlich zu der erforderlichen Steuerung können Dialoge eine beliebige Anzahl fokussierbarer Elemente enthalten, sogar ganze Formulare oder andere Container-Widgets wie Registerkarten.
- Wenn der Dialog auf dem Bildschirm erscheint, sollte die Tastatursteuerung (dessen Kontrolle vom Zweck des Dialogs abhängt) auf das standardmäßig fokussierbare Element innerhalb des Dialogs verschoben werden. Für Dialoge, die nur eine grundlegende Nachricht bereitstellen, könnte es eine "OK"-Schaltfläche sein. Für Dialoge, die ein Formular enthalten, könnte es das erste Feld im Formular sein.
- Nachdem der Dialog geschlossen wurde, sollte die Tastatursteuerung dorthin zurückverschoben werden, wo sie sich befand, bevor sie in den Dialog verschoben wurde. Andernfalls kann der Fokus zurück zum Anfang der Seite geführt werden.
- Für die meisten Dialoge wird erwartet, dass die Registerreihenfolge des Dialogs _umwickelt_, was bedeutet, dass, wenn der Benutzer durch die fokussierbaren Elemente im Dialog navigiert, das erste fokussierbare Element nach Erreichen des letzten erneut fokussiert wird. Mit anderen Worten, die Registerreihenfolge sollte innerhalb des Dialogs enthalten sein.
- Wenn der Dialog verschoben oder in der Größe verändert werden kann, stellen Sie sicher, dass diese Aktionen sowohl von Tastaturbenutzern als auch von Mausbenutzern ausführbar sein müssen. Ebenso, wenn ein Dialog spezielle Funktionen wie Werkzeugleisten oder Kontextmenüs bietet, müssen diese von Tastaturbenutzern erreichbar und bedienbar sein.
- Dialoge können modal oder nicht-modal sein. Wenn ein _modaler_ Dialog auf dem Bildschirm erscheint, ist es nicht möglich, mit irgendeinem Seiteninhalt außerhalb des Dialogs zu interagieren. Mit anderen Worten, die Hauptanwendungsbenutzeroberfläche oder der Seiteninhalt gelten als vorübergehend deaktiviert, solange der modale Dialog angezeigt wird. Bei _nicht-modalen_ Dialogen ist es weiterhin möglich, mit Inhalten außerhalb des Dialogs zu interagieren, während der Dialog angezeigt wird. Beachten Sie, dass es für nicht-modale Dialoge eine globale Tastenkombination geben muss, die es ermöglicht, den Fokus zwischen geöffneten Dialogen und der Hauptseite zu verschieben.

### Zugehörige ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
  - : Verwenden Sie dieses Attribut, um den Dialog zu beschriften. Oft wird der Wert des `aria-labelledby`-Attributs die ID des Elements sein, das den Dialog betitelt.
- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)
  - : Verwenden Sie dieses Attribut, um die Inhalte des Dialogs zu beschreiben.

### Mögliche Auswirkungen auf Benutzeragenten und assistive Technologien

Wenn die `dialog`-Rolle verwendet wird, sollte der Benutzeragent Folgendes tun:

- Das Element als Dialog in der Barrierefreiheits-API des Betriebssystems freigeben.

Wenn der Dialog korrekt beschriftet ist und der Fokus auf ein Element (oft ein interaktives Element, wie eine Schaltfläche) innerhalb des Dialogs bewegt wird, sollten Screenreader die zugängliche Rolle, den Namen und optional die Beschreibung des Dialogs zusammen mit dem fokussierten Element ankündigen.

> [!NOTE]
> Die Meinungen darüber, wie assistive Technologien mit dieser Technik umgehen sollten, können variieren, und die Reihenfolge der Ankündigungen kann je nach verwendeter assistiver Technologie unterschiedlich sein. Die oben bereitgestellten Informationen sind eine dieser Meinungen und können sich ändern, sobald die Spezifikation definiert ist.

## Beispiele

### Ein Dialog, der ein Formular enthält

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
> Obwohl es möglich ist, Tastaturbenutzer daran zu hindern, den Fokus auf Elemente außerhalb des Dialogs zu bewegen, können Screenreader-Benutzer mit ihrem virtuellen Cursor möglicherweise weiterhin zu diesen Inhalten navigieren.
> Es ist wichtig, dass Entwickler sicherstellen, dass Inhalte außerhalb des modalen Dialogs für alle Benutzer unzugänglich sind, solange der modale Dialog aktiv ist.

## Spezifikationen

{{Specifications}}

Bald verfügbar

## Siehe auch

- [ARIA: alertdialog Rolle](/de/docs/Web/Accessibility/ARIA/Roles/alertdialog_role)
- {{HTMLElement('dialog', 'The HTML <code>&lt;dialog&gt;</code> element')}}
