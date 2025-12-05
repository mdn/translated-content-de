---
title: Server Side Request Forgery (SSRF)
slug: Web/Security/Attacks/SSRF
l10n:
  sourceCommit: 2290fdbf9d5cf68482245d07d388b883156058ac
---

**Server‑Side Request Forgery (SSRF)** ist eine Schwachstelle, die es einem Angreifer erlaubt, Netzwerk-Anfragen an beliebige Ziele zu senden. SSRF lässt diese Anfragen vom Server selbst ausgehen, der in der Regel über einen breiteren Zugriff verfügt als ein externer Client.

Dies kann einem Angreifer ermöglichen, auf sensible Ressourcen zuzugreifen oder andere unbefugte Aktionen durchzuführen.

## Beispielscenario

Angenommen, Ihre Anwendung hat einen Endpunkt, der Bilder von einer angegebenen URL abruft:

```http
GET /fetch-image?url=https://example.com/image.png
```

Der Server hat Zugriff auf das Unternehmens-Intranet.

Wenn der Server die gegebene URL-Parameter nicht validiert, kann der Client sensible Daten extrahieren, indem er Intranet-URLs an die API übergibt:

```js
fetch("https://example.org/fetch-image?url=http://localhost:443/admin/org.png");
```

Obwohl der Client nicht direkt auf `http://localhost:443/` zugreifen könnte, kann der Server dies und leitet die Antwort an den Client weiter.

Der Client muss keine HTTP-Anfragen senden: Er könnte möglicherweise das `file://`-Protokoll verwenden:

```js
fetch("https://example.org/fetch-image?url=file:///etc/passwd");
```

In diesen Fällen könnte der Angreifer Zugang zu sensiblen Daten erhalten. Manchmal erhält der Angreifer den Antwortkörper nicht, aber dennoch kann es Probleme verursachen:

- Indem der Server dazu gebracht wird, viele Anfragen zu stellen, kann ein Angreifer einen {{Glossary("Denial_of_Service", "Denial of Service (DoS)")}} Angriff ausführen.
- Durch Untersuchen des vom Server zurückgegebenen Statuscodes oder der Zeit, die für die Ausführung von Anfragen benötigt wird, kann der Angreifer sensible Informationen über das Ziel ableiten.

Angreifer können Umleitungen oder Umleitungsketten verwenden, um Validierungen zu umgehen. Beispielsweise könnten sie eine Domain besitzen, `https://evilexample.org/redirect`, und das gesamte Hosting dient lediglich der Umleitung zu `http://localhost:443/` oder anderen (internen) URLs, wodurch möglicherweise die Eingangsvalidierung umgangen wird.

```js
fetch("https://example.org/fetch-image?url=https://evilexample.org/redirect");
```

## Verteidigung gegen SSRF

Die Minderung von SSRF-Schwachstellen erfordert mehrere Verteidigungsstrategien, die Eingabevalidierung, sorgfältige Antwortbehandlung und eine sichere Netzwerkinfrastruktur kombinieren. Einige wichtige Ansätze umfassen:

### Eingabevalidierung und Erlauben-Liste

Beschränken Sie die URLs, die die Server-API verwenden wird. Der im obigen `fetch-image`-Dienst diskutierte Dienst könnte zum Beispiel eine Erlauben-Liste mit den erwarteten Domänen spezifizieren:

```js
const ALLOWED_DOMAINS = ["https://api.example.com", "https://cdn.example.com"];
```

### Sperren von Protokollen und URL-Schemata

Stellen Sie sicher, dass nur bestimmte URL-Schemata erlaubt sind. Mit hoher Wahrscheinlichkeit ist nur `https://` für reguläre Webanwendungen ausreichend.

### Umleitungsvalidierung

Verfolgen Sie Umleitungen nicht automatisch und erzwingen Sie auch Eingabevalidierung und/oder Erlauben-Listen für umgeleitete URLs. Begrenzen Sie Umleitungsketten.

### Prinzip des geringsten Privilegs und Isolation

Stellen Sie sicher, dass der Dienst, der ausgehende Anfragen stellt, nicht mit mehr Privilegien läuft, als er benötigt, und vermeiden Sie es, dienstekapable Dienste mit sensiblen internen Diensten zu ko-lokalisieren.

## Verteidigungs-Checkliste

- Überprüfen Sie alle Funktionen, die Ressourcen abrufen, und validieren oder erlauben Sie Listen von Benutzereingaben.
- Blockieren Sie alle Protokolle außer HTTPS.
- Seien Sie vorsichtig bei URL-Umleitungen und begrenzen Sie Umleitungsketten.
- Wenden Sie das Prinzip des geringsten Privilegs für Netzwerksberechtigungen des Servers an: Idealerweise sollten Server keinen uneingeschränkten Zugriff auf interne Netzwerke haben, es sei denn, dies ist erforderlich.
- Protokollieren und überwachen Sie Anfragen.

## Siehe auch

- [Server-Side Request Forgery Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Server_Side_Request_Forgery_Prevention_Cheat_Sheet.html)
