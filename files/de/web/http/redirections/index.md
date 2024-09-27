---
title: Weiterleitungen in HTTP
slug: Web/HTTP/Redirections
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{HTTPSidebar}}

**URL-Weiterleitung**, auch bekannt als _URL-Weiterleitung_, ist eine Technik, um einer Seite, einem Formular, einer gesamten Website oder einer Webanwendung mehr als eine URL-Adresse zuzuweisen. HTTP verfügt über eine spezielle Art von Antwort, die als **_HTTP-Weiterleitung_** bezeichnet wird, für diese Operation.

Weiterleitungen erfüllen zahlreiche Ziele:

- Temporäre Weiterleitungen während der Wartung oder Ausfallzeit der Website
- Permanente Weiterleitungen zur Erhaltung bestehender Links/Lesezeichen nach Änderung der URLs der Website, Fortschrittsseiten beim Hochladen einer Datei usw.

## Prinzip

Im HTTP wird eine Weiterleitung ausgelöst, indem ein Server eine spezielle \_Weiterleitungs_antwort auf eine Anfrage sendet. Weiterleitungsantworten haben [Statuscodes](/de/docs/Web/HTTP/Status), die mit `3` beginnen, und einen {{ httpheader("Location") }}-Header, der die URL enthält, zu der weitergeleitet werden soll.

Wenn Browser eine Weiterleitung erhalten, laden sie sofort die neue URL, die im `Location`-Header angegeben ist. Abgesehen von dem kleinen Leistungsaufwand für eine zusätzliche Übertragung bemerken Benutzer die Weiterleitung kaum.

![Eine Anfrage vom Client an den Server. Der Server antwortet mit "301: dauerhaft verschoben" und der neuen URL für die Ressource. Der Client stellt eine GET-Anfrage für die neue URL, die vom Server mit einer 200 OK-Antwort zurückgegeben wird.](httpredirect.svg)

Es gibt mehrere Arten von Weiterleitungen, die in drei Kategorien unterteilt sind:

1. [Permanente Weiterleitungen](#permanente_weiterleitungen)
2. [Temporäre Weiterleitungen](#temporäre_weiterleitungen)
3. [Spezielle Weiterleitungen](#spezielle_weiterleitungen)

### Permanente Weiterleitungen

Diese Weiterleitungen sind dazu gedacht, dauerhaft zu bestehen. Sie implizieren, dass die ursprüngliche URL nicht mehr verwendet und durch die neue ersetzt werden sollte. Suchmaschinen-Roboter, RSS-Reader und andere Crawler werden die ursprüngliche URL für die Ressource aktualisieren.

| Code  | Text                 | Methodenumgang                                                                                           | Typischer Anwendungsfall                                        |
| ----- | -------------------- | -------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| `301` | `Moved Permanently`  | {{HTTPMethod("GET")}}-Methoden unverändert. Andere können auf {{HTTPMethod("GET")}} geändert werden. [1] | Umstrukturierung einer Website.                                 |
| `308` | `Permanent Redirect` | Methode und Inhalt nicht geändert.                                                                       | Umstrukturierung einer Website mit Nicht-GET-Links/Operationen. |

\[1] Die Spezifikation beabsichtigte nicht, Methodenänderungen zuzulassen, aber es gibt bestehende Benutzeragenten, die ihre Methode ändern. {{HTTPStatus("308")}} wurde erstellt, um die Mehrdeutigkeit des Verhaltens bei der Verwendung von Nicht-`GET`-Methoden zu beseitigen.

### Temporäre Weiterleitungen

Manchmal kann auf die angeforderte Ressource nicht von ihrem kanonischen Standort aus zugegriffen werden, aber von einem anderen Ort aus. In diesem Fall kann eine temporäre Weiterleitung verwendet werden.

Suchmaschinen-Roboter und andere Crawler speichern die neue, temporäre URL nicht. Temporäre Weiterleitungen werden auch beim Erstellen, Aktualisieren oder Löschen von Ressourcen verwendet, um temporäre Fortschrittsseiten anzuzeigen.

| Code  | Text                 | Methodenumgang                                                                                                            | Typischer Anwendungsfall                                                                                                                                                   |
| ----- | -------------------- | ------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `302` | `Found`              | {{HTTPMethod("GET")}}-Methoden unverändert. Andere können oder können nicht in {{HTTPMethod("GET")}} geändert werden. [2] | Die Webseite ist vorübergehend aus unvorhergesehenen Gründen nicht verfügbar.                                                                                              |
| `303` | `See Other`          | {{HTTPMethod("GET")}}-Methoden unverändert. Andere werden in `GET` geändert (Inhalt verloren).                            | Wird nach einer {{HTTPMethod("PUT")}}- oder {{HTTPMethod("POST")}}-Weiterleitung verwendet, sodass das Aktualisieren der Ergebnisseite die Operation nicht erneut auslöst. |
| `307` | `Temporary Redirect` | Methode und Inhalt nicht geändert                                                                                         | Die Webseite ist vorübergehend aus unvorhergesehenen Gründen nicht verfügbar. Besser als `302`, wenn auf der Seite Nicht-`GET`-Operationen verfügbar sind.                 |

\[2] Die Spezifikation beabsichtigte nicht, Methodenänderungen zuzulassen, aber es gibt bestehende Benutzeragenten, die ihre Methode ändern. {{HTTPStatus("307")}} wurde erstellt, um die Mehrdeutigkeit des Verhaltens bei der Verwendung von Nicht-`GET`-Methoden zu beseitigen.

### Spezielle Weiterleitungen

{{HTTPStatus("304")}} (Not Modified) leitet eine Seite auf die lokal zwischengespeicherte Kopie (die veraltet war) um, und {{HTTPStatus("300")}} (Multiple Choices) ist eine manuelle Weiterleitung: Der Inhalt, der vom Browser als Webseite präsentiert wird, listet die möglichen Weiterleitungen auf, und der Benutzer klickt auf eine, um sie auszuwählen.

| Code  | Text               | Typischer Anwendungsfall                                                                                                                                                               |
| ----- | ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `300` | `Multiple Choices` | Nicht viele: Die Optionen werden in einer HTML-Seite im Inhalt aufgelistet. Maschinell lesbare Optionen sollten als {{HTTPHeader("Link")}}-Header mit `rel=alternate` gesendet werden. |
| `304` | `Not Modified`     | Wird für erneuerte bedingte Anfragen gesendet. Zeigt an, dass die zwischengespeicherte Antwort noch frisch ist und verwendet werden kann.                                              |

## Alternative Möglichkeit zur Angabe von Weiterleitungen

HTTP-Weiterleitungen sind nicht die einzige Möglichkeit, Weiterleitungen zu definieren. Es gibt zwei weitere:

1. HTML-Weiterleitungen mit dem {{HTMLElement("meta")}}-Element
2. JavaScript-Weiterleitungen über das [DOM](/de/docs/Web/API/Document_Object_Model)

### HTML-Weiterleitungen

HTTP-Weiterleitungen sind die beste Möglichkeit, Weiterleitungen zu erstellen, aber manchmal haben Sie keine Kontrolle über den Server. In diesem Fall versuchen Sie ein {{HTMLElement("meta")}}-Element mit seinem [`http-equiv`](/de/docs/Web/HTML/Element/meta#http-equiv)-Attribut, das auf `Refresh` im {{HTMLElement("head")}} der Seite gesetzt ist. Beim Anzeigen der Seite wird der Browser zur angegebenen URL weitergeleitet.

Der [`content`](/de/docs/Web/HTML/Element/meta#content)-Attribut sollte mit einer Zahl beginnen, die angibt, wie viele Sekunden der Browser warten soll, bevor er zur angegebenen URL weiterleitet. Setzen Sie ihn immer auf `0`, um die Barrierefreiheit zu gewährleisten.

Offensichtlich funktioniert diese Methode nur mit HTML und kann nicht für Bilder oder andere Arten von Inhalten verwendet werden.

### JavaScript-Weiterleitungen

Weiterleitungen in JavaScript werden durchgeführt, indem eine URL-Zeichenfolge auf die [`window.location`](/de/docs/Web/API/Window/location)-Eigenschaft gesetzt wird, die die neue Seite lädt:

Wie HTML-Weiterleitungen kann diese nicht bei allen Ressourcen funktionieren, und offensichtlich funktioniert sie nur bei Clients, die JavaScript ausführen. Andererseits gibt es mehr Möglichkeiten: Zum Beispiel können Sie die Weiterleitung nur dann auslösen, wenn bestimmte Bedingungen erfüllt sind.

### Reihenfolge der Priorität

Bei drei Möglichkeiten, Weiterleitungen auszulösen, können mehrere gleichzeitig verwendet werden. Aber welche wird zuerst ausgeführt?

1. HTTP-Weiterleitungen werden immer zuerst ausgeführt — sie existieren, wenn noch nicht einmal eine übertragene Seite vorhanden ist.
2. Etwas überraschend werden JavaScript-Weiterleitungen als nächstes ausgeführt, noch vor HTML-Weiterleitungen. Dies liegt daran, dass das `<meta>`-Redirect erst nach dem vollständigen Laden der Seite erfolgt, was nach allen ausgeführten Skripten ist.
3. HTML-Weiterleitungen ({{HTMLElement("meta")}}) werden ausgeführt, wenn keine HTTP-Weiterleitungen oder JavaScript-Weiterleitungen vor dem Laden der Seite ausgeführt wurden.
4. Wenn eine JavaScript-Weiterleitung erfolgt, die nach dem Laden der Seite erfolgt (z. B. bei einem Klick auf eine Schaltfläche), wird diese zuletzt ausgeführt, wenn die Seite nicht bereits durch die vorherigen Methoden weitergeleitet wurde.

Wenn möglich, verwenden Sie HTTP-Weiterleitungen und fügen Sie keine {{HTMLElement("meta")}}-Element-Weiterleitungen hinzu. Wenn jemand die HTTP-Weiterleitungen ändert, aber vergisst, die HTML-Weiterleitungen zu ändern, sind die Weiterleitungen nicht mehr identisch, was zu einer Endlosschleife oder anderen Problemen führen könnte.

## Anwendungsfälle

Es gibt zahlreiche Anwendungsfälle für Weiterleitungen, aber da die Leistung mit jeder Weiterleitung beeinträchtigt wird, sollte ihre Verwendung auf ein Minimum beschränkt werden.

### Domain-Aliasing

Idealerweise gibt es einen Standort und daher eine URL für jede Ressource. Aber es gibt Gründe für alternative Namen für eine Ressource:

- Erweiterung der Reichweite Ihrer Website
  - : Ein häufiger Fall ist, wenn eine Website unter `www.example.com` angesiedelt ist, sie aber auch von `example.com` aus zugänglich sein soll. Weiterleitungen von `example.com` zu `www.example.com` werden daher eingerichtet. Möglicherweise leiten Sie auch von häufigen Synonymen oder häufigen Tippfehlern Ihrer Domains um.
- Umzug zu einer neuen Domain
  - : Zum Beispiel wurde Ihr Unternehmen umbenannt, aber Sie möchten, dass bestehende Links oder Lesezeichen Sie immer noch unter dem neuen Namen finden.
- Erzwingung von [HTTPS](/de/docs/Glossary/HTTPS)
  - : Anfragen an die `http://`-Version Ihrer Website werden zur `https://`-Version Ihrer Website umgeleitet.

### Links am Leben erhalten

Wenn Sie Websites umstrukturieren, ändern sich URLs. Auch wenn Sie die Links Ihrer Website aktualisieren, um den neuen URLs zu entsprechen, haben Sie keine Kontrolle über die von externen Ressourcen verwendeten URLs.

Sie möchten diese Links nicht brechen, da sie wertvolle Nutzer bringen und Ihrem SEO helfen, daher richten Sie Weiterleitungen von den alten URLs zu den neuen ein.

> [!NOTE]
> Diese Technik funktioniert auch für interne Links, aber versuchen Sie zu vermeiden, interne Weiterleitungen zu haben. Eine Weiterleitung hat erhebliche Leistungskosten (da eine zusätzliche HTTP-Anfrage erfolgt). Wenn Sie dies vermeiden können, indem Sie interne Links korrigieren, sollten Sie diese Links stattdessen beheben.

### Temporäre Antworten auf unsichere Anfragen

[Unsichere](/de/docs/Glossary/Safe/HTTP) Anfragen ändern den Zustand des Servers, und der Benutzer sollte sie nicht unbeabsichtigt erneut senden.

In der Regel möchten Sie nicht, dass Ihre Benutzer {{HTTPMethod("PUT")}}, {{HTTPMethod("POST")}} oder {{HTTPMethod("DELETE")}}-Anfragen erneut senden. Wenn Sie die Antwort als Ergebnis dieser Anfrage bereitstellen, löst ein einfaches drücken der Aktualisierungstaste die Anfrage erneut aus (möglicherweise nach einer Bestätigungsmeldung).

In diesem Fall kann der Server eine {{HTTPStatus("303")}} (See Other)-Antwort auf eine URL senden, die die richtigen Informationen enthält. Wenn die Aktualisierungstaste gedrückt wird, wird nur diese Seite erneut angezeigt, ohne dass die unsicheren Anfragen erneut abgespielt werden.

### Temporäre Antworten auf lange Anfragen

Einige Anfragen benötigen möglicherweise mehr Zeit auf dem Server, wie {{HTTPMethod("DELETE")}}-Anfragen, die für eine spätere Bearbeitung geplant sind. In diesem Fall ist die Antwort eine {{HTTPStatus("303")}} (See Other)-Weiterleitung, die auf eine Seite verweist, die anzeigt, dass die Aktion geplant wurde, und möglicherweise über ihren Fortschritt informiert oder es ermöglicht, sie abzubrechen.

## Konfigurieren von Weiterleitungen in gängigen Servern

### Apache

Weiterleitungen können entweder in der Serverkonfigurationsdatei oder in der `.htaccess` jeder Verzeichnisebene eingerichtet werden.

Das [`mod_alias`](https://httpd.apache.org/docs/current/mod/mod_alias.html)-Modul verfügt über `Redirect`- und `RedirectMatch`-Direktiven, die standardmäßig {{HTTPStatus("302")}}-Weiterleitungen einrichten:

Die URL `https://example.com/` wird auf `https://www.example.com/` umgeleitet, ebenso wie alle Dateien oder Verzeichnisse darunter (`https://example.com/some-page` wird auf `https://www.example.com/some-page` umgeleitet).

`RedirectMatch` macht dasselbe, verwendet jedoch einen [regulären Ausdruck](/de/docs/Glossary/regular_expression) um eine Sammlung betroffener URLs zu definieren.

Alle Dokumente im `images/`-Verzeichnis werden auf eine andere Domain umgeleitet.

Wenn Sie keine temporäre Weiterleitung möchten, kann ein zusätzliches Parameter (entweder der zu verwendende HTTP-Statuscode oder das Schlüsselwort `permanent`) verwendet werden, um eine andere Weiterleitung einzustellen.

Das [`mod_rewrite`](https://httpd.apache.org/docs/current/mod/mod_rewrite.html)-Modul kann auch Weiterleitungen erstellen. Es ist flexibler, aber etwas komplexer.

### Nginx

In Nginx erstellen Sie einen spezifischen Serverblock für den Inhalt, den Sie umleiten möchten:

Um eine Weiterleitung auf ein Verzeichnis oder nur bestimmte Seiten anzuwenden, verwenden Sie die `rewrite`-Direktive.

### IIS

In IIS verwenden Sie das [`<httpRedirect>`](https://learn.microsoft.com/en-us/iis/configuration/system.webServer/httpRedirect/)-Element, um Weiterleitungen zu konfigurieren.

## Weiterleitungsschleifen

Weiterleitungsschleifen treten auf, wenn zusätzliche Weiterleitungen derjenigen folgen, die bereits befolgt wurden. Mit anderen Worten, es gibt eine Schleife, die niemals abgeschlossen wird, und es wird nie eine Seite gefunden werden.

In den meisten Fällen ist dies ein Serverproblem, und wenn der Server es erkennen kann, sendet er eine {{HTTPStatus("500")}} `Internal Server Error` zurück. Wenn Sie auf einen solchen Fehler kurz nach der Änderung einer Serverkonfiguration stoßen, handelt es sich wahrscheinlich um eine Weiterleitungsschleife.

Manchmal erkennt der Server es nicht: Eine Weiterleitungsschleife kann sich über mehrere Server erstrecken, die jeweils das Gesamtbild nicht sehen. In diesem Fall erkennen Browser es und zeigen eine Fehlermeldung an. Firefox zeigt an:

> Firefox hat erkannt, dass der Server die Anfrage für diese Adresse in einer Weise weiterleitet, die niemals endet.

… während Chrome anzeigt:

> Diese Webseite hat eine Weiterleitungsschleife

In beiden Fällen kann der Benutzer nicht viel tun (es sei denn, es tritt eine Beschädigung auf seiner Seite auf, wie ein Cache- oder Cookie-Konflikt).

Es ist wichtig, Weiterleitungsschleifen zu vermeiden, da sie das Benutzererlebnis vollständig zerstören.
