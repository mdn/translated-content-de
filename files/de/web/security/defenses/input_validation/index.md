---
title: Eingabevalidierung
slug: Web/Security/Defenses/Input_validation
l10n:
  sourceCommit: 13ef67a4ffbdb929415dfa1b3d65ab1aa9ebe5da
---

Eingabevalidierung ist die Praxis, zu prüfen, ob jede Eingabe, die Ihre Website akzeptiert, den Erwartungen entspricht.

Damit eine Website nahezu jede Art von Interaktivität oder Anpassung bereitstellen kann, muss sie Eingaben akzeptieren, typischerweise von Benutzern über einen Webbrowser und manchmal auch von anderen Anwendungen.

Benutzer geben Informationen typischerweise in {{htmlelement("input")}}-Elemente innerhalb eines {{htmlelement("form")}}-Elements im Frontend der Website ein, und die Daten werden typischerweise als Body einer {{httpmethod("POST")}}-Anfrage oder als URL-Parameter gesendet, die an eine {{httpmethod("GET")}}-Anfrage angehängt werden. Eingaben können jedoch auch auf andere Weise auf dem Server eintreffen, etwa über Cookie-Werte oder zusätzliche HTTP-Header.

Wenn die vom Benutzer bereitgestellte Eingabe nicht die Form oder den Inhalt hat, die bzw. den die Website erwartet — wenn beispielsweise eine ungültige E-Mail-Adresse eingegeben wird — kann dies zu Fehlfunktionen der Website führen. Probleme dieser Art so früh wie möglich zu erkennen, verbessert die Benutzererfahrung.

Neben unbeabsichtigten Fehlern von Benutzern ermöglicht die Bereitstellung unerwarteter Eingaben jedoch auch böswilligen Akteuren, verschiedene Sicherheitsangriffe zu versuchen, einschließlich Cross-Site Scripting (XSS), SQL-Injection und Command-Injection. In diesen Situationen erstellt der Angreifer absichtlich eine Eingabe, die einen Angriff ermöglicht, und übergibt sie an die Anwendung. Der Angreifer kann das Frontend der Website möglicherweise vollständig umgehen und die bösartige Eingabe direkt in einer HTTP-Anfrage bereitstellen. Obwohl die Eingabevalidierung gewöhnlich keine vollständige Lösung für diese Sicherheitsbedrohungen ist, stellt sie eine wichtige erste Verteidigungslinie dar.

## Richtlinien zur Validierung

### Validierung als Allowlist implementieren

Anwendungen können eine bestimmte Prüfung häufig implementieren, indem sie sie anhand der erlaubten Werte (einer „Allowlist“) oder anhand der verweigerten Werte (einer „Denylist“) festlegen.

Angenommen, wir möchten prüfen, ob eine numerische Eingabe zwischen null und 10 liegt. Dies können wir als Allowlist implementieren, indem wir prüfen, ob die Eingabe diesem Bereich entspricht, und alles andere verweigern:

```js
function checkRange(input) {
  if (input >= 0 && input <= 10) {
    return true;
  }
  return false;
}
```

Alternativ können wir dies als Denylist implementieren, indem wir prüfen, ob die Eingabe außerhalb des Bereichs liegt, und alles andere erlauben:

```js
function checkRange(input) {
  if (input < 0 || input > 10) {
    return false;
  }
  return true;
}
```

Es ist normalerweise zuverlässiger, eine Prüfung als Allowlist zu implementieren, da dadurch Werte standardmäßig verweigert werden, die der Autor nicht berücksichtigt hat. Dies gilt insbesondere, wenn die ungültige Eingabe absichtlich von einem Angreifer erstellt wird: Für einen Angreifer ist es einfacher, eine Eingabe bereitzustellen, die der Prüfung entgeht und auf die standardmäßige Bedingung „erlauben“ zurückfällt.

### Syntaktische und semantische Validierung

Wir können zwischen zwei Arten der Eingabevalidierung unterscheiden:

- _syntaktische Validierung_, die prüft, ob die Eingabe das richtige Format hat. Wenn die Anwendung beispielsweise eine Zahl erwartet, erhält sie eine Zahl.
- _semantische Validierung_, die prüft, ob der Inhalt der Eingabe innerhalb der erwarteten Grenzen liegt. Beispielsweise eine Zahl, die innerhalb eines bestimmten Bereichs liegen soll, oder ein Zeichenfolgenwert, der genau einem Wert aus einer Menge von Werten entsprechen soll.

Anwendungen implementieren syntaktische Validierung typischerweise mithilfe der Typprüfungsfunktionen der gewählten Programmiersprache.

Zur Implementierung semantischer Validierung können sie verschiedene Methoden verwenden, einschließlich Bereichsprüfungen, des Abgleichs eines Werts mit einer Menge zulässiger Werte oder, bei komplexeren Fällen, regulärer Ausdrücke.

Beachten Sie, dass reguläre Ausdrücke schwer korrekt zu erstellen sein können und einige Ausdrücke eine Anwendung anfällig für [Denial-of-Service-Angriffe](https://community.owasp.org/attacks/Regular_expression_Denial_of_Service_-_ReDoS) machen können. Deshalb ist es normalerweise besser, etablierte Validierungsbibliotheken von Drittanbietern zu verwenden. Eine beliebte Wahl ist [validator.js](https://github.com/validatorjs/validator.js).

### Zeitpunkt der Validierung

Anwendungen sollten Eingaben so schnell wie möglich nach ihrer Eingabe validieren, damit der Benutzer unmittelbar Feedback zum Problem erhält und die Möglichkeit bekommt, es zu beheben. Dies bedeutet im Allgemeinen, dass Sie Eingaben auf der Client-Seite im Frontend-Code der Website validieren sollten.

Sie dürfen sich jedoch nicht auf die Frontend-Validierung verlassen, um Sicherheitsprobleme zu erkennen, da ein Angreifer den Frontend-Code manipulieren oder vollständig umgehen kann. Daher müssen Sie Eingaben auch auf dem Server validieren, bevor Sie sie verarbeiten.

## Client-seitige Validierung

Das HTML-Element {{htmlelement("input")}} unterstützt eine Reihe von Attributen, mit denen Sie gültige Werte für die vom Benutzer bereitgestellte Eingabe definieren können. Dazu gehören:

- [`type`](/de/docs/Web/HTML/Reference/Elements/input#input_types), das den erwarteten Eingabetyp definiert und eine Validierung basierend auf diesem Typ auslöst. Wenn `type` beispielsweise [`email`](/de/docs/Web/HTML/Reference/Elements/input/email) ist, prüft der Browser automatisch, ob die Eingabe eine syntaktisch gültige E-Mail-Adresse ist.

- [`minLength`](/de/docs/Web/HTML/Reference/Attributes/minlength) und [`maxLength`](/de/docs/Web/HTML/Reference/Attributes/maxlength), die die minimale und maximale Länge definieren, die eine Texteingabe haben darf.

- [`min`](/de/docs/Web/HTML/Reference/Attributes/min) und [`max`](/de/docs/Web/HTML/Reference/Attributes/max), die die minimalen und maximalen Werte definieren, die ein numerischer Wert haben darf.

- [`step`](/de/docs/Web/HTML/Reference/Attributes/step), das die Schrittweite definiert, die ein numerischer Eingabewert haben muss.

- [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern), das einen regulären Ausdruck definiert, dem eine Texteingabe entsprechen muss.

Sie können auch eine benutzerdefinierte Gültigkeitsprüfung in JavaScript definieren, indem Sie dem [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis des Elements einen Event-Handler hinzufügen. Innerhalb des Event-Handlers können Sie eine benutzerdefinierte Gültigkeitsprüfung durchführen und dann die Methode [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity) des Elements aufrufen, um seine Gültigkeit festzulegen.

Wenn die Eingabe die Validierung nicht besteht, übermittelt der Browser das Formular nicht, sondern zeigt dem Benutzer eine Fehlermeldung an.

Weitere Informationen finden Sie unter [Verwenden der HTML-Formularvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation).

## Serverseitige Validierung

Auf der Serverseite sollten Anwendungen, wenn möglich, die Validierungsfunktionen verwenden, die von ihrem gewählten Framework bereitgestellt werden, etwa Djangos [validators](https://docs.djangoproject.com/en/6.0/ref/validators/).

Es ist besonders wichtig, auf Validierungsfehler zu achten, die nicht durch einen Benutzer verursacht worden sein können, der mit dem Frontend der Website interagiert: beispielsweise ein {{htmlelement("select")}}-Element, das eine Option enthält, die nicht im HTML des Formulars bereitgestellt wurde. Fehler dieser Art sind starke Hinweise darauf, dass ein Angreifer absichtlich ungültige Eingaben erstellt.

Wenn Eingaben als JSON dargestellt werden, können Sie [JSON Schema](https://json-schema.org/) verwenden, um Gültigkeit zu definieren. Dazu gehören APIs, die mit [OpenAPI](https://swagger.io/) spezifiziert sind. Wenn Sie eine Datenbank verwenden, können Sie außerdem ein Datenbankschema definieren und Eingaben dagegen validieren.

## Datei-Uploads

Wenn Ihre Website Datei-Uploads erlaubt, müssen Sie verschiedene zusätzliche Bedrohungen berücksichtigen. Angreifer können:

- Bösartige Dateien hochladen, die Fehler in der Software ausnutzen, welche sie verarbeitet.
- Im Rahmen eines Denial-of-Service-Angriffs sehr große Dateien hochladen.
- Unerwünschte oder illegale Inhalte hochladen.
- Code zur Dateiverarbeitung dazu bringen, Ihre eigenen Dateien der Website zu überschreiben.
- Dateien hochladen, die Exploits wie XSS enthalten, und andere Benutzer dazu verleiten, sie herunterzuladen und auszuführen.

Die folgenden Best Practices werden üblicherweise verwendet, um diese Bedrohungen zu mindern:

- Erlauben Sie nur authentifizierten Benutzern, Dateien hochzuladen.

- Dateinamen sind ebenfalls Benutzereingaben und müssen daher validiert werden. Generieren Sie nach Möglichkeit eigene Namen für die Dateien, die Sie speichern. Wenn Sie die von Benutzern bereitgestellten Namen verwenden müssen, schränken Sie die Zeichen, die Benutzer auswählen dürfen, stark ein und validieren Sie die Namen dagegen.

- Bestimmen Sie, welche Dateitypen Sie unterstützen müssen, und erlauben Sie nur diese Typen anhand der Dateierweiterung. Seien Sie besonders vorsichtig bei im Web ausführbaren Dateitypen wie HTML oder JavaScript. Da die Prüfung von Dateierweiterungen die Verarbeitung der von Benutzern bereitgestellten Dateinamen beinhaltet, sollten Sie Dateinamen zuerst validieren.

- Beschränken Sie die Größe der Dateien, die hochgeladen werden können.

- Ermöglichen Sie Benutzern, unerwünschte oder illegale Inhalte zu melden, und verfügen Sie über einen Prozess zu deren Entfernung.

- Speichern Sie Dateien, wenn möglich, auf einem anderen Host. Wenn dies nicht möglich ist, speichern Sie Dateien außerhalb des Website-Root-Verzeichnisses. Dies verringert das Risiko, dass bösartige Uploads bei Angriffen wie XSS an andere Benutzer ausgeliefert werden könnten.

Weitere Details finden Sie im [File Upload Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html) von OWASP.

## Eingabevalidierung und Sicherheit

Eine Website dazu zu bringen, bösartige Eingaben zu akzeptieren, ist ein Angriffsvektor für eine Reihe von Angriffen, bei denen die Website den Inhalt unbeabsichtigt als Code oder als Befehl ausführt. Dazu gehören:

- Cross-Site-Scripting-Angriffe (XSS), bei denen der Browser bösartigen Code so ausführt, als wäre er Teil der Website.

- SQL-Injection-Angriffe, bei denen der Server bösartige SQL-Abfragen auf seiner Datenbank ausführt.

- Command-Injection-Angriffe, bei denen die Website bösartige Befehle auf dem Betriebssystem des Hosts ausführt.

Die hier beschriebene allgemeine Eingabevalidierung ist eine hilfreiche erste Verteidigungslinie gegen solche Angriffe, aber sie ist _keine_ vollständige Verteidigung dagegen und nicht einmal die primäre Verteidigung. Denn es ist äußerst schwierig, sich gegen diese Angriffe zu schützen, ohne den spezifischen Kontext zu kennen, in dem die Eingabe verwendet wird.

Stattdessen sollten Anwendungen Schutzmaßnahmen verwenden, die auf diese Angriffe zugeschnitten sind:

- [Schutzmaßnahmen gegen Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS).

- [Schutzmaßnahmen gegen SQL-Injection](https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html).

- [Schutzmaßnahmen gegen Command-Injection](https://cheatsheetseries.owasp.org/cheatsheets/OS_Command_Injection_Defense_Cheat_Sheet.html).

## Siehe auch

- [Input Validation Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html) (OWASP)
- [File Upload Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html) (OWASP)
