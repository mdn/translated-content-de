---
title: Eingabevalidierung
slug: Web/Security/Defenses/Input_validation
l10n:
  sourceCommit: dd70ed064388b0fac4338321f727c8840a508b64
---

Bei der Eingabevalidierung wird überprüft, ob Eingaben, die Ihre Website akzeptiert, den Erwartungen entsprechen.

Damit eine Website Interaktivität oder Anpassungsmöglichkeiten bieten kann, muss sie in der Regel Eingaben entgegennehmen. Diese stammen meist von Benutzern über einen Webbrowser, manchmal aber auch von anderen Anwendungen.

Benutzer geben Informationen üblicherweise in {{htmlelement("input")}}-Elemente innerhalb eines {{htmlelement("form")}}-Elements im Frontend der Website ein. Die Daten werden meist im Body einer {{httpmethod("POST")}}-Anfrage oder als URL-Parameter einer {{httpmethod("GET")}}-Anfrage an den Server gesendet. Eingaben können den Server jedoch auch auf anderem Weg erreichen, etwa als Cookie-Werte oder zusätzliche HTTP-Header.

Wenn eine Benutzereingabe nicht die Form oder den Inhalt hat, die die Website erwartet – beispielsweise bei einer ungültigen E-Mail-Adresse –, kann dies zu Fehlfunktionen führen. Werden solche Probleme möglichst früh erkannt, verbessert das die Benutzererfahrung.

Neben solchen unbeabsichtigten Fehlern können unerwartete Eingaben jedoch auch für Angriffe genutzt werden, darunter Cross-Site-Scripting (XSS), SQL-Injection und Command-Injection. Dabei erstellt ein Angreifer gezielt eine Eingabe, die einen Angriff ermöglicht, und übermittelt sie an die Anwendung. Er kann das Frontend der Website vollständig umgehen und die schädliche Eingabe direkt in einer HTTP-Anfrage übermitteln. Die Eingabevalidierung allein bietet gegen solche Sicherheitsbedrohungen meist keinen vollständigen Schutz, ist aber eine wichtige erste Verteidigungslinie.

## Richtlinien für die Validierung

### Validierung als Allowlist umsetzen

Anwendungen können eine Prüfung häufig entweder anhand zulässiger Werte (einer „Allowlist“) oder anhand unzulässiger Werte (einer „Denylist“) definieren.

Angenommen, wir möchten prüfen, ob eine numerische Eingabe zwischen null und 10 liegt. Mit einer Allowlist prüfen wir, ob die Eingabe in diesem Bereich liegt, und lehnen alle anderen Werte ab:

```js
function checkRange(input) {
  if (input >= 0 && input <= 10) {
    return true;
  }
  return false;
}
```

Alternativ können wir mit einer Denylist prüfen, ob die Eingabe außerhalb des Bereichs liegt, und alle anderen Werte zulassen:

```js
function checkRange(input) {
  if (input < 0 || input > 10) {
    return false;
  }
  return true;
}
```

Eine Prüfung als Allowlist umzusetzen ist in der Regel zuverlässiger, weil dadurch auch Werte abgelehnt werden, die bei der Implementierung nicht berücksichtigt wurden. Das ist besonders wichtig, wenn ein Angreifer gezielt ungültige Eingaben erstellt: Es ist einfacher, eine Prüfung zu umgehen, wenn die Standardeinstellung darin besteht, Eingaben zuzulassen.

### Syntaktische und semantische Validierung

Es gibt zwei Arten der Eingabevalidierung:

- Bei der _syntaktischen Validierung_ wird geprüft, ob eine Eingabe das richtige Format hat. Wenn die Anwendung beispielsweise eine Zahl erwartet, wird geprüft, ob sie eine Zahl erhält.
- Bei der _semantischen Validierung_ wird geprüft, ob der Inhalt einer Eingabe innerhalb der erwarteten Grenzen liegt. Beispielsweise muss eine Zahl in einem bestimmten Bereich liegen oder ein String-Wert genau einem Wert aus einer vorgegebenen Menge entsprechen.

Für die syntaktische Validierung verwenden Anwendungen üblicherweise die Möglichkeiten zur Typprüfung ihrer Programmiersprache.

Für die semantische Validierung können sie verschiedene Verfahren nutzen: Wertebereichsprüfungen, den Abgleich mit einer Menge zulässiger Werte oder, in komplexeren Fällen, reguläre Ausdrücke.

Reguläre Ausdrücke können allerdings schwierig korrekt zu formulieren sein. Manche Ausdrücke können eine Anwendung zudem anfällig für [Denial-of-Service-Angriffe](https://community.owasp.org/attacks/Regular_expression_Denial_of_Service_-_ReDoS) machen. Deshalb ist es in der Regel besser, bewährte Validierungsbibliotheken von Drittanbietern zu verwenden. Eine verbreitete Wahl ist [validator.js](https://github.com/validatorjs/validator.js).

### Zeitpunkt der Validierung

Anwendungen sollten Eingaben möglichst unmittelbar nach ihrer Eingabe validieren. So erhalten Benutzer sofort eine Rückmeldung über ein Problem und können es beheben. Im Allgemeinen bedeutet das, Eingaben auf der Client-Seite im Frontend-Code der Website zu validieren.

Verlassen Sie sich bei Sicherheitsfragen jedoch nicht auf die Validierung im Frontend: Ein Angreifer kann den Frontend-Code manipulieren oder vollständig umgehen. Deshalb müssen Sie Eingaben auch auf dem Server validieren, bevor sie verarbeitet werden.

## Clientseitige Validierung

Das HTML-Element {{htmlelement("input")}} unterstützt mehrere Attribute, mit denen Sie zulässige Werte für Benutzereingaben festlegen können. Dazu gehören:

- [`type`](/de/docs/Web/HTML/Reference/Elements/input#input_types) legt den erwarteten Eingabetyp fest und löst eine entsprechende Validierung aus. Wenn `type` beispielsweise [`email`](/de/docs/Web/HTML/Reference/Elements/input/email) ist, prüft der Browser automatisch, ob die Eingabe syntaktisch eine gültige E-Mail-Adresse ist.

- [`minLength`](/de/docs/Web/HTML/Reference/Attributes/minlength) und [`maxLength`](/de/docs/Web/HTML/Reference/Attributes/maxlength) legen die zulässige Mindest- und Höchstlänge einer Texteingabe fest.

- [`min`](/de/docs/Web/HTML/Reference/Attributes/min) und [`max`](/de/docs/Web/HTML/Reference/Attributes/max) legen die zulässigen Mindest- und Höchstwerte einer numerischen Eingabe fest.

- [`step`](/de/docs/Web/HTML/Reference/Attributes/step) legt die Schrittweite fest, die ein numerischer Eingabewert einhalten muss.

- [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern) legt einen regulären Ausdruck fest, dem eine Texteingabe entsprechen muss.

Sie können auch eine eigene Gültigkeitsprüfung in JavaScript definieren, indem Sie dem [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis des Elements einen Event-Handler hinzufügen. Im Event-Handler können Sie die Eingabe prüfen und anschließend mit der Methode [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity) des Elements dessen Gültigkeit festlegen.

Wenn die Eingabe die Validierung nicht besteht, sendet der Browser das Formular nicht ab und zeigt dem Benutzer stattdessen eine Fehlermeldung an.

Weitere Informationen finden Sie unter [HTML-Formularvalidierung verwenden](/de/docs/Web/HTML/Guides/Constraint_validation).

## Serverseitige Validierung

Auf der Serverseite sollten Anwendungen nach Möglichkeit die Validierungsfunktionen des verwendeten Frameworks nutzen, beispielsweise die [Validatoren](https://docs.djangoproject.com/en/stable/ref/validators/) von Django.

Achten Sie besonders auf Validierungsfehler, die bei einer normalen Interaktion mit dem Frontend der Website nicht auftreten können. Ein Beispiel ist ein {{htmlelement("select")}}-Element, für das ein Wert übermittelt wird, der im HTML des Formulars nicht als Option vorhanden war. Solche Fehler sind deutliche Hinweise darauf, dass ein Angreifer gezielt ungültige Eingaben erstellt.

Wenn Eingaben als JSON dargestellt werden, können Sie ihre Gültigkeit mit [JSON Schema](https://json-schema.org/) definieren. Das gilt auch für APIs, die mit [OpenAPI](https://swagger.io/) spezifiziert sind. Wenn Sie eine Datenbank verwenden, können Sie außerdem ein Datenbankschema definieren und Eingaben dagegen validieren.

## Datei-Uploads

Wenn Ihre Website Datei-Uploads erlaubt, müssen Sie verschiedene zusätzliche Bedrohungen berücksichtigen. Angreifer können:

- Schädliche Dateien hochladen, die Fehler in der Software ausnutzen, mit der sie verarbeitet werden.
- Sehr große Dateien als Teil eines Denial-of-Service-Angriffs hochladen.
- Unerwünschte oder rechtswidrige Inhalte hochladen.
- Die Dateiverarbeitung dazu bringen, Dateien Ihrer eigenen Website zu überschreiben.
- Dateien mit Exploits wie XSS hochladen und andere Benutzer dazu verleiten, sie herunterzuladen und auszuführen.

Die folgenden bewährten Maßnahmen werden häufig eingesetzt, um diese Bedrohungen zu verringern:

- Erlauben Sie Datei-Uploads nur authentifizierten Benutzern.

- Auch Dateinamen sind Benutzereingaben und müssen validiert werden. Erzeugen Sie nach Möglichkeit selbst Namen für Dateien, die Sie speichern. Müssen Sie die von Benutzern angegebenen Namen verwenden, schränken Sie die zulässigen Zeichen stark ein und prüfen Sie die Namen entsprechend.

- Legen Sie fest, welche Dateitypen Sie unterstützen müssen, und erlauben Sie anhand der Dateiendung nur diese Typen. Seien Sie bei Dateitypen, die vom Webserver ausgeführt werden können, wie HTML oder JavaScript, besonders vorsichtig. Da die Prüfung von Dateiendungen die Verarbeitung benutzerseitig angegebener Dateinamen voraussetzt, müssen Sie zuerst die Dateinamen validieren.

- Begrenzen Sie die Größe hochladbarer Dateien.

- Ermöglichen Sie Benutzern, unerwünschte oder rechtswidrige Inhalte zu melden, und richten Sie ein Verfahren ein, um solche Inhalte zu entfernen.

- Speichern Sie Dateien nach Möglichkeit auf einem anderen Host. Falls das nicht möglich ist, speichern Sie sie außerhalb des Stammverzeichnisses der Website. Das verringert das Risiko, dass schädliche Uploads im Rahmen von Angriffen wie XSS an andere Benutzer ausgeliefert werden.

Weitere Einzelheiten finden Sie im [File Upload Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html) von OWASP.

## Eingabevalidierung und Sicherheit

Eine Website dazu zu bringen, schädliche Eingaben zu akzeptieren, ermöglicht verschiedene Angriffe, bei denen die Website den Inhalt unbeabsichtigt als Code oder Befehl ausführt. Dazu gehören:

- Cross-Site-Scripting-Angriffe (XSS), bei denen der Browser schädlichen Code so ausführt, als wäre er Teil der Website.

- SQL-Injection-Angriffe, bei denen der Server schädliche SQL-Abfragen für seine Datenbank ausführt.

- Command-Injection-Angriffe, bei denen die Website schädliche Befehle auf dem Betriebssystem des Hosts ausführt.

Die hier beschriebene allgemeine Eingabevalidierung ist eine nützliche erste Verteidigungslinie gegen solche Angriffe. Sie bietet aber _keinen_ vollständigen Schutz und ist auch nicht die wichtigste Schutzmaßnahme. Ohne Kenntnis des konkreten Kontexts, in dem eine Eingabe verwendet wird, ist es äußerst schwierig, diese Angriffe abzuwehren.

Stattdessen sollten Anwendungen Schutzmaßnahmen einsetzen, die auf die jeweiligen Angriffe zugeschnitten sind:

- [Schutzmaßnahmen gegen Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS).

- [Schutzmaßnahmen gegen SQL-Injection](https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html).

- [Schutzmaßnahmen gegen Command-Injection](https://cheatsheetseries.owasp.org/cheatsheets/OS_Command_Injection_Defense_Cheat_Sheet.html).

## Siehe auch

- [Input Validation Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html) (OWASP)
- [File Upload Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html) (OWASP)
