---
title: Eingabevalidierung
slug: Web/Security/Defenses/Input_validation
l10n:
  sourceCommit: f14623f12f092d92558ecb1d766069c1567fd347
---

Die Eingabevalidierung ist die Praxis, zu überprüfen, ob jede Eingabe, die Ihre Website akzeptiert, den Erwartungen entspricht.

Damit eine Website nahezu jede Art von Interaktivität oder Anpassung bereitstellen kann, muss sie einige Eingaben akzeptieren, typischerweise von Benutzern über einen Webbrowser und manchmal auch von anderen Anwendungen.

Benutzer geben typischerweise Informationen in {{htmlelement("input")}}-Elemente innerhalb eines {{htmlelement("form")}}-Elements im Frontend der Website ein, und die Daten werden typischerweise als Body einer {{httpmethod("POST")}}-Anfrage oder als URL-Parameter, die einer {{httpmethod("GET")}}-Anfrage angehängt sind, an den Server gesendet. Die Eingabe könnte jedoch auch über andere Mittel auf dem Server ankommen, wie z. B. über Cookie-Werte oder zusätzliche HTTP-Header.

Wenn die vom Benutzer bereitgestellte Eingabe nicht die Form oder den Inhalt hat, den die Website erwartet — zum Beispiel, wenn sie eine ungültige E-Mail-Adresse eingeben —, kann dies dazu führen, dass die Website nicht ordnungsgemäß funktioniert. Ein solches Problem so früh wie möglich zu erkennen, verbessert die Benutzererfahrung.

Abgesehen von unabsichtlichen Fehlern des Benutzers ermöglicht die Bereitstellung unerwarteter Eingaben einem böswilligen Akteur, verschiedene Sicherheitsangriffe zu versuchen, einschließlich Cross-Site Scripting (XSS), SQL-Injektion und Befehlsinjektion. In diesen Situationen erstellt der Angreifer absichtlich einige Eingaben, die einen Angriff ermöglichen, und übergibt diese an die Anwendung. Der Angreifer könnte die Frontend der Website vollständig umgehen und die böswillige Eingabe direkt in einer HTTP-Anfrage bereitstellen. Obwohl Eingabevalidierung normalerweise keine vollständige Lösung für diese Sicherheitsbedrohungen ist, ist sie eine wichtige erste Verteidigungslinie.

## Validierungsrichtlinien

### Implementierung der Validierung als Allowlist

Anwendungen können eine bestimmte Prüfung oft implementieren, indem sie sie in Bezug auf die erlaubten Werte (eine "Allowlist") oder in Bezug auf die abgelehnten Werte (eine "Denylist") spezifizieren.

Zum Beispiel, nehmen wir an, wir möchten überprüfen, dass eine numerische Eingabe zwischen null und 10 liegt. Wir können dies als Allowlist implementieren, indem wir testen, ob die Eingabe diesem Bereich entspricht, und alles andere ablehnen:

```js
function checkRange(input) {
  if (input >= 0 && input <= 10) {
    return true;
  }
  return false;
}
```

Alternativ können wir es als Denylist implementieren, indem wir testen, ob die Eingabe außerhalb des Bereichs liegt, und alles andere erlauben:

```js
function checkRange(input) {
  if (input < 0 || input > 10) {
    return false;
  }
  return true;
}
```

Es ist in der Regel zuverlässiger, eine Prüfung als Allowlist zu implementieren, da dies standardmäßig Werte ablehnt, die der Autor nicht berücksichtigt hat. Dies ist besonders dann der Fall, wenn die ungültige Eingabe absichtlich von einem Angreifer erstellt wird: es ist für einen Angreifer einfacher, eine Eingabe zu liefern, die die Prüfung umgeht und standardmäßig zur "Erlauben"-Bedingung führt.

### Syntaktische und semantische Validierung

Wir können zwischen zwei Arten der Eingabevalidierung unterscheiden:

- _Syntaktische Validierung_, die überprüft, dass die Eingabe das richtige Format hat. Zum Beispiel, wenn die Anwendung eine Zahl erwartet, dann erhält sie auch eine Zahl.
- _Semantische Validierung_, die überprüft, dass der Inhalt der Eingabe innerhalb der erwarteten Grenzen liegt. Zum Beispiel eine Zahl, die innerhalb eines bestimmten Bereichs liegen sollte, oder ein Zeichenfolgewert, der genau einem der Werte entsprechen sollte.

Anwendungen implementieren typischerweise syntaktische Validierung durch die Typprüfungsfunktionen ihrer gewählten Programmiersprache.

Um semantische Validierung zu implementieren, können sie verschiedene Methoden verwenden, einschließlich Bereichsprüfungen, das Überprüfen eines Werts gegen einen Satz zulässiger Werte oder für komplexere Fälle reguläre Ausdrücke.

Beachten Sie, dass reguläre Ausdrücke schwer richtig hinzubekommen sein können, und einige Ausdrücke können eine Anwendung anfällig für [Denial-of-Service-Angriffe](https://owasp.org/www-community/attacks/Regular_expression_Denial_of_Service_-_ReDoS) machen. Aus diesem Grund ist es in der Regel besser, gut bewertete Drittanbieter-Bibliotheken zur Validierung zu verwenden. Eine beliebte Wahl ist [validator.js](https://github.com/validatorjs/validator.js).

### Wann man validieren sollte

Anwendungen sollten die Eingabe so bald wie möglich nach der Eingabe validieren, damit der Benutzer sofortiges Feedback zum Problem erhält und die Möglichkeit hat, es zu beheben. Dies bedeutet in der Regel, dass Sie die Eingabe auf der Client-Seite, im Frontend-Code der Website, validieren sollten.

Sie sollten jedoch nicht darauf vertrauen, dass die Validierung auf der Client-Seite Sicherheitsprobleme erkennt, da ein Angreifer den Frontend-Code möglicherweise umgehen oder komplett umgehen kann. Sie müssen die Eingabe also auch auf dem Server validieren, bevor Sie sie verarbeiten.

## Clientseitige Validierung

Das HTML-{{htmlelement("input")}}-Element unterstützt eine Reihe von Attributen, die es Ihnen ermöglichen, gültige Werte für die Eingabe, die der Benutzer bereitstellt, zu definieren. Dazu gehören:

- [`type`](/de/docs/Web/HTML/Reference/Elements/input#input_types), das den erwarteten Eingabetyp definiert und die Validierung basierend auf dem Typ auslöst. Zum Beispiel, wenn `type` auf [`email`](/de/docs/Web/HTML/Reference/Elements/input/email) gesetzt ist, überprüft der Browser automatisch, dass die Eingabe eine syntaktisch gültige E-Mail-Adresse ist.

- [`minLength`](/de/docs/Web/HTML/Reference/Attributes/minlength) und [`maxLength`](/de/docs/Web/HTML/Reference/Attributes/maxlength), die die minimale und maximale Länge definieren, die eine Texteingabe haben darf.

- [`min`](/de/docs/Web/HTML/Reference/Attributes/min) und [`max`](/de/docs/Web/HTML/Reference/Attributes/max), die die minimalen und maximalen Werte definieren, die ein numerischer Wert haben darf.

- [`step`](/de/docs/Web/HTML/Reference/Attributes/step), das die Granularität definiert, die ein numerischer Eingabewert haben muss.

- [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern), das einen regulären Ausdruck definiert, dem die Texteingabe entsprechen muss.

Sie können auch eine benutzerdefinierte Validitätsprüfung in JavaScript definieren, indem Sie einen Ereignishandler für das [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis des Elements hinzufügen. Innerhalb des Ereignishandlers können Sie eine benutzerdefinierte Validitätsprüfung durchführen und dann die Methode [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity) des Elements aufrufen, um deren Gültigkeit festzulegen.

Wenn die Eingabe die Validierung nicht besteht, wird der Browser das Formular nicht übermitteln und stattdessen eine Fehlermeldung an den Benutzer anzeigen.

Weitere Informationen finden Sie unter [Using HTML form validation](/de/docs/Web/HTML/Guides/Constraint_validation).

## Serverseitige Validierung

Auf der Server-Seite sollten Anwendungen, wenn möglich, die von ihrem gewählten Framework bereitgestellten Validierungsfunktionen verwenden, zum Beispiel die [Validators](https://docs.djangoproject.com/en/6.0/ref/validators/) von Django.

Es ist besonders wichtig, auf Validierungsfehler zu achten, die nicht von einem Benutzer gemacht worden sein können, der mit der Frontend der Website interagiert: zum Beispiel ein {{htmlelement("select")}}-Element, das eine Option enthält, die nicht im HTML des Formulars enthalten war. Solche Fehler sind starke Indikatoren dafür, dass ein Angreifer vorsätzlich ungültige Eingaben erstellt.

Wenn Eingaben als JSON dargestellt werden, können Sie [JSON Schema](https://json-schema.org/) verwenden, um die Gültigkeit zu definieren: dies schließt APIs ein, die mit [OpenAPI](https://swagger.io/) spezifiziert sind. Wenn Sie eine Datenbank verwenden, können Sie auch ein Datenbankschema definieren und Eingaben dagegen validieren.

## Dateiuploads

Wenn Ihre Website Dateiuploads erlaubt, müssen Sie sich mit verschiedenen zusätzlichen Bedrohungen auseinandersetzen. Angreifer könnten:

- Bösartige Dateien hochladen, die Fehler in der Software ausnutzen, die sie verarbeitet.
- Sehr große Dateien als Teil eines Denial-of-Service-Angriffs hochladen.
- Unerwünschte oder illegale Inhalte hochladen.
- Den Dateibehandlungs-Code verwirren, um Dateien Ihrer eigenen Website zu überschreiben.
- Dateien mit Exploits wie XSS hochladen und andere Benutzer dazu verleiten, sie herunterzuladen und auszuführen.

Die folgenden bewährten Methoden werden häufig verwendet, um diese Bedrohungen zu mindern:

- Erlauben Sie nur authentifizierten Benutzern, Dateien hochzuladen.

- Dateinamen sind ebenfalls Benutzereingaben und müssen validiert werden. Generieren Sie, wenn möglich, Ihren eigenen Namen für die gespeicherten Dateien. Wenn Sie die von den Benutzern bereitgestellten Namen verwenden müssen, seien Sie sehr restriktiv in den Zeichen, die die Benutzer verwenden dürfen, und validieren Sie die Namen entsprechend.

- Bestimmen Sie, welche Dateitypen Sie unterstützen müssen, und erlauben Sie nur diese Typen basierend auf der Dateierweiterung. Seien Sie besonders vorsichtig bei webausführbaren Dateitypen wie HTML oder JavaScript. Da die Überprüfung von Dateierweiterungen die Verarbeitung der vom Benutzer bereitgestellten Dateinamen erfordert, stellen Sie sicher, dass Sie Zuerst Dateinamen validieren.

- Beschränken Sie die Größe von Dateien, die hochgeladen werden können.

- Ermöglichen Sie Benutzern, unerwünschte oder illegale Inhalte zu melden, und haben Sie einen Prozess, um sie zu entfernen.

- Wenn möglich, speichern Sie Dateien auf einem anderen Host. Wenn dies nicht möglich ist, speichern Sie die Dateien außerhalb des Stammverzeichnisses der Website. Dies verringert das Risiko, dass böswillige Uploads in Angriffen wie XSS an andere Benutzer geliefert werden.

Weitere Details finden Sie im [File Upload Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html) von OWASP.

## Eingabevalidierung und Sicherheit

Eine Website dazu zu bringen, bösartige Eingaben zu akzeptieren, ist ein Angriffspfad für eine Reihe von Angriffen, bei denen die Seite den Inhalt unbeabsichtigt als Code oder Befehl ausführt. Dazu gehören:

- Cross-Site-Scripting (XSS)-Angriffe, bei denen der Browser bösartigen Code ausführt, als wäre er Teil der Website.

- SQL-Injection-Angriffe, bei denen der Server bösartige SQL-Abfragen auf seiner Datenbank ausführt.

- Befehlsinjektionsangriffe, bei denen die Seite bösartige Befehle im Betriebssystem des Hosts ausführt.

Generische Eingabevalidierung, wie wir sie hier besprochen haben, ist eine nützliche erste Verteidigungslinie gegen solche Angriffe, aber sie ist _keine_ vollständige Verteidigung gegen sie oder auch nur die primäre Verteidigung. Dies liegt daran, dass es extrem schwer ist, sich gegen diese Angriffe zu schützen, ohne den spezifischen Kontext zu kennen, in dem die Eingaben verwendet werden.

Stattdessen sollten Anwendungen spezifische Abwehrmechanismen gegen diese Angriffe verwenden:

- [Cross-Site Scripting (XSS) Abwehrmechanismen](/de/docs/Web/Security/Attacks/XSS).

- [SQL-Injection-Abwehrmechanismen](https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html).

- [Befehlsinjektionsabwehrmechanismen](https://cheatsheetseries.owasp.org/cheatsheets/OS_Command_Injection_Defense_Cheat_Sheet.html).

## Siehe auch

- [Input Validation Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html) (OWASP)
- [File Upload Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html) (OWASP)
