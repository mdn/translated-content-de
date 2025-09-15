---
title: Server-Side Request Forgery (SSRF)
slug: Web/Security/Attacks/SSRF
l10n:
  sourceCommit: c07ef56cdbf6a52947f4e25d41893ef24852b2cf
---

**Server‑Side Request Forgery (SSRF)** ist eine Schwachstelle, die es einem Angreifer ermöglicht, Netzwerk-Anfragen an beliebige Ziele zu stellen. Bei SSRF stammen diese Anfragen aus einem Server selbst, der normalerweise einen breiteren Zugriff hat als ein externer Client.

Dies kann es einem Angreifer ermöglichen, auf sensible Ressourcen zuzugreifen oder andere unbefugte Aktionen durchzuführen.

## Beispielszenario

Angenommen, Ihre Anwendung verfügt über einen Endpunkt, der Bilder von einer angegebenen URL abruft:

```http
GET /fetch-image?url=https://example.com/image.png
```

Der Server hat Zugang zum Intranet des Unternehmens.

Wenn der Server den URL-Parameter, der ihm übergeben wird, nicht validiert, kann der Client sensible Daten extrahieren, indem er Intranet-URLs an die API übergibt:

```js
fetch("https://example.org/fetch-image?url=http://localhost:443/admin/org.png");
```

Obwohl der Client nicht direkt auf `http://localhost:443/` zugreifen konnte, kann der Server dies, und der Server leitet die Antwort an den Client weiter.

Der Client muss keine HTTP-Anfragen stellen: Er könnte in der Lage sein, das `file://`-Protokoll zu verwenden:

```js
fetch("https://example.org/fetch-image?url=file:///etc/passwd");
```

In diesen Fällen könnte der Angreifer Zugang zu sensiblen Daten erhalten. Manchmal erhält der Angreifer nicht den Antwortkörper, aber in diesem Fall kann es dennoch zu Problemen kommen:

- Durch das Erzwingen vieler Anfragen durch den Server kann ein Angreifer einen {{Glossary("Denial_of_Service", "Denial of Service (DoS)")}}-Angriff ausführen.
- Durch Untersuchen des vom Server zurückgegebenen Statuscodes oder der Zeit, die für die Ausführung von Anfragen benötigt wird, kann der Angreifer sensible Informationen über das Ziel ableiten.

Angreifer können Weiterleitungen oder Weiterleitungsketten verwenden, um die Validierung zu umgehen. Zum Beispiel könnten sie eine Domain wie `https://evilexample.org/redirect` besitzen, und der gesamte Host führt lediglich eine Weiterleitung zu `http://localhost:443/` oder anderen (internen) URLs durch, was potenziell die Eingabevalidierung umgeht.

```js
fetch("https://example.org/fetch-image?url=https://evilexample.org/redirect");
```

## Abwehrmaßnahmen gegen SSRF

Das Abschwächen von SSRF-Schwachstellen erfordert mehrere Verteidigungsstrategien, die Input-Validierung, sorgfältige Handhabung von Antworten und eine sichere Netzwerkarchitektur kombinieren. Einige wichtige Ansätze umfassen:

### Eingabevalidierung und Zulassungsliste

Beschränken Sie die URLs, die die Server-API verwenden darf. Zum Beispiel könnte der oben diskutierte `fetch-image`-Dienst eine Zulassungsliste mit den erwarteten Domains angeben:

```js
const ALLOWED_DOMAINS = ["https://api.example.com", "https://cdn.example.com"];
```

### Blockierung von Protokollen und URL-Schemata

Stellen Sie sicher, dass nur bestimmte URL-Schemata erlaubt sind. Höchstwahrscheinlich reicht das Zulassen von `https://` für reguläre Webanwendungen aus.

### Weiterleitungsvalidierung

Folgen Sie Weiterleitungen nicht automatisch und erzwingen Sie ebenso Eingabevalidierung und/oder Zulassungslisten für weitergeleitete URLs. Begrenzen Sie Weiterleitungsketten.

### Geringste Privilegien und Isolierung

Stellen Sie sicher, dass der Dienst, der ausgehende Anfragen stellt, nicht mit mehr Privilegien läuft, als er benötigt, und vermeiden Sie, dass dienstfähige Dienste mit sensiblen internen Diensten gemeinsam gehostet werden.

## Zusammenfassung der Abwehrmaßnahmen

- Überprüfen Sie alle Funktionen, die Ressourcen abrufen, und validieren oder erlauben Sie Benutzerinputs in einer Zulassungsliste.
- Blockieren Sie alle Protokolle mit Ausnahme von HTTPS.
- Seien Sie sich URL-Weiterleitungen bewusst und begrenzen Sie Weiterleitungsketten.
- Wenden Sie das Prinzip der geringsten Privilegien für Netzberechtigungen von Servern an: Idealerweise sollten Server keinen uneingeschränkten Zugriff auf interne Netzwerke haben, es sei denn, dies ist erforderlich.
- Protokollieren und überwachen Sie Anfragen.

## Siehe auch

- [Server-Side Request Forgery Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Server_Side_Request_Forgery_Prevention_Cheat_Sheet.html)
