---
title: "HTML-Attribut: autocomplete"
short-title: autocomplete
slug: Web/HTML/Reference/Attributes/autocomplete
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{HTMLSidebar}}

Das HTML-Attribut `autocomplete` ermöglicht es Web-Entwicklern anzugeben, ob und in welchem Maße dem {{Glossary("user_agent", "User Agent")}} die Erlaubnis erteilt wird, automatisierte Unterstützung beim Ausfüllen von Formularfeldern zu leisten, sowie dem Browser Hinweise darauf zu geben, welche Art von Informationen in dem Feld erwartet wird.

Es ist verfügbar auf {{HTMLElement("input")}}-Elementen, die Text- oder Zahlenwerte als Eingabe akzeptieren, {{HTMLElement("textarea")}}-Elementen, {{HTMLElement("select")}}-Elementen und {{HTMLElement("form")}}-Elementen.

{{InteractiveExample("HTML Demo: autocomplete", "tabbed-shorter")}}

```html interactive-example
<label for="firstName">First Name:</label>
<input name="firstName" id="firstName" type="text" autocomplete="given-name" />

<label for="lastName">Last Name:</label>
<input name="lastName" id="lastName" type="text" autocomplete="family-name" />

<label for="email">Email:</label>
<input name="email" id="email" type="email" autocomplete="off" />
```

```css interactive-example
label {
  display: block;
  margin-top: 1rem;
}
```

## Beschreibung

Das `autocomplete`-Attribut gibt dem User Agent einen Hinweis, ob und wie ein Formularfeld vorausgefüllt werden soll. Der Attributwert ist entweder das Schlüsselwort `off` oder `on` oder eine geordnete Liste von durch Leerzeichen getrennten Tokens.

```html
<input autocomplete="off" />
<input autocomplete="on" />
<input autocomplete="shipping street-address" />
<input autocomplete="section-user1 billing postal-code" />
```

Wenn ein {{HTMLElement("input")}}, {{HTMLElement("select")}} oder {{HTMLElement("textarea")}}-Element kein `autocomplete`-Attribut hat, verwendet der Browser das [`autocomplete`-Attribut des **übergeordneten Formulars** des Elements](/de/docs/Web/HTML/Reference/Elements/form#autocomplete). Das übergeordnete Formular ist entweder das {{HTMLElement("form")}}, das der durch das [`form`](/de/docs/Web/HTML/Reference/Elements/input#form) angegebenen `id` entspricht (falls vorhanden), oder häufiger das `<form>`, in dem das Element eingeschlossen ist.

> [!NOTE]
> Um Autovervollständigung bereitzustellen, müssen User-Agents möglicherweise `<input>`/`<select>`/`<textarea>`-Elemente:
>
> 1. Ein `name`- und/oder `id`-Attribut besitzen
> 2. Nachkommen eines `<form>`-Elements sein
> 3. Von einem Formular mit einem {{HTMLElement("input/submit", "submit")}}-Button gesteuert werden

Wenn dieselbe Liste von Tokens in mehr als einem Formularfeld verwendet wird, wird der User Agent alle Vorkommen desselben `autocomplete`-Wertes mit denselben Datenwerten automatisch vervollständigen.

Einige Tokens können mehrmals mit potenziell unterschiedlichen erwarteten Werten verwendet werden, wie z.B. das `zip-code`-Token in einem Formular, das sowohl Liefer- als auch Rechnungsadressen enthält. Die Aufnahme mehrerer verschiedener Tokens in eine durch Leerzeichen getrennte Liste führt dazu, dass die zugehörigen Formularfelder eindeutige Autovervollständigungswerte erhalten: in diesem Fall `autocomplete="shipping zip-code"` und `autocomplete="billing zip-code"`.

Einige Autovervollständigungswerte müssen möglicherweise mehrmals verwendet werden. Zum Beispiel kann ein Formular mehrere Lieferadressen enthalten und daher mehrere Vorkommen von `"shipping zip-code"`, während dennoch unterschiedliche Werte erwartet werden. Um den Autovervollständigungswert in diesen Fällen eindeutig zu machen, kann das erste Token in der durch Leerzeichen getrennten Liste von Tokens ein `section-*`-Token sein, wobei die ersten acht Zeichen des Tokens immer die Zeichenkette "section-" sein müssen, gefolgt von einem alphanumerischen String. Alle Formularfelder, die das `section-*`-Token mit demselben alphanumerischen String erhalten, gehören zur gleichen **benannten Gruppe**.

Wenn das `autocomplete`-Attribut bei {{HTMLElement("input/hidden", "hidden")}}-Eingabelementen (`<input type="hidden">`) verwendet wird, muss sein Wert eine geordnete Liste von durch Leerzeichen getrennten Tokens sein; die Schlüsselwörter `on` und `off` sind nicht erlaubt.

Die Quelle der vorgeschlagenen Werte liegt in der Regel beim Browser; typischerweise stammen die Werte von vergangenen vom Benutzer eingegebenen Werten, sie können jedoch auch von vorkonfigurierten Werten stammen. Zum Beispiel könnte ein Browser dem Benutzer erlauben, seinen Namen, seine Adresse, Telefonnummer und E-Mail-Adressen zu speichern, um Autovervollständigung bereitzustellen. Der Browser kann auch die Möglichkeit bieten, verschlüsselte Kreditkarteninformationen zu speichern, zur Autovervollständigung nach einer Authentifizierungsprozedur.

> [!NOTE]
> Das `autocomplete`-Attribut steuert auch, ob Firefox — im Gegensatz zu anderen Browsern — [den dynamischen deaktivierten Zustand und (falls zutreffend) die dynamische Überprüfung](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) eines `<input>`-Elements, `<textarea>`-Elements oder gesamten `<form>` über Seitenladevorgänge persistiert. Die Persistenzfunktion ist standardmäßig aktiviert. Das Setzen des Wertes des `autocomplete`-Attributs auf `off` deaktiviert diese Funktion. Dies funktioniert auch dann, wenn das `autocomplete`-Attribut normalerweise aufgrund seines `type` nicht anwendbar wäre. Siehe [Firefox-Bug 654072](https://bugzil.la/654072).

## Wert

Der Attributwert ist entweder das Schlüsselwort `off` oder `on`, oder eine durch Leerzeichen getrennte `<token-list>`, die die Bedeutung des Autovervollständigungswertes beschreibt.

- `off`

  - : Es ist dem Browser nicht gestattet, automatisch einen Wert für dieses Feld einzugeben oder auszuwählen. Es ist möglich, dass das Dokument oder die Anwendung eine eigene Autovervollständigungsfunktion bietet, oder dass Sicherheitsbedenken erfordern, dass der Wert des Felds nicht automatisch eingegeben wird.

    > [!NOTE]
    > In den meisten modernen Browsern wird das Setzen von `autocomplete` auf `"off"` einen Passwortmanager nicht daran hindern, den Benutzer zu fragen, ob er Benutzername und Passwort speichern möchte, oder diese Werte automatisch in ein Anmeldeformular der Website einzutragen. Siehe [Verwaltung der Autovervollständigung für Anmeldefelder](/de/docs/Web/Security/Practical_implementation_guides/Turning_off_form_autocompletion#managing_autofill_for_login_fields).

- `on`

  - : Der Browser darf die Eingabe automatisch vervollständigen. Es werden keine Hinweise darauf gegeben, welche Art von Daten im Feld erwartet werden, sodass der Browser sein eigenes Urteil verwenden kann.

- `<token-list>`
  - : Eine geordnete Gruppe von [durch Leerzeichen getrennten Tokens](#token-listen-tokens), die aus Details zur automatischen Vervollständigung besteht, die durch optionale Abschnitts- sowie entweder Liefer- oder Rechnungsgruppierungstokens vorangestellt werden. Telefonnummern, E-Mail-Adressen und Messaging-Protokoll-Tokens werden durch einen Token identifiziert, der die Art des Empfängers angibt.

Sehen Sie den [WHATWG-Standard](https://html.spec.whatwg.org/multipage/forms.html#autofill) für detailliertere Informationen.

### Token-Listen-Tokens

Die `<token-list>`-Optionen umfassen in der Reihenfolge:

1. [Gruppielnennungstoken](#benannte_gruppen)
2. [Gruppierungsidentifikator](#gruppierungsidentifikator)
3. [Detailtokens](#detailtokens)
4. [Web-Authorization](#web_authorization_token)

#### Benannte Gruppen

Um eine benannte Gruppe von Formularfeldern zu erstellen, kann der optionale `section-*`-Token verwendet werden. Falls vorhanden, muss dieser Token das erste Token in der durch Leerzeichen getrennten Liste von Tokens sein.

- `section-*`
  - : Definiert den Namen für eine Gruppe von Formularsteuerelementen. Ein Token, dessen erste acht Zeichen die Zeichenkette "section-" sind, Case-insensitive, gefolgt von zusätzlichen Zeichen. Alle Formularsteuerelemente, die mit demselben Token beginnen, gehören zur benannten Gruppe.

#### Gruppierungsidentifikator

Ein optionaler `shipping`- oder `billing`-Gruppierungsidentifikator

- `shipping`
  - : Das Feld, das durch nachfolgende Tokens identifiziert wird, gehört zur Versandadresse oder Kontaktinformationen.
- `billing`
  - : Das Feld, das durch nachfolgende Tokens identifiziert wird, gehört zur Rechnungsadresse oder Kontaktinformationen.

#### Detailtokens

Jede durch Leerzeichen getrennte Detai...
