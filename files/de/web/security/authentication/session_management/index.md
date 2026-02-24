---
title: Sitzungsverwaltung
slug: Web/Security/Authentication/Session_management
l10n:
  sourceCommit: 7e1cf6ab1fbd41b0430021a2044d658de5d857a3
---

HTTP wird häufig als _zustandsloses_ Protokoll bezeichnet, was bedeutet, dass es keinen eingebauten Mechanismus bietet, um eine Reihe individueller HTTP-Anfragen zu korrelieren. Dies ist ein Problem für Websites, die einen client-spezifischen Zustand beibehalten möchten. Ein Beispiel: Eine Seite könnte jedem Benutzer die Wahl zwischen einem hellen oder dunklen Thema ermöglichen, wobei diese Wahl einen Zustand darstellt, der bei nachfolgenden Anfragen an die Seite bestehen bleiben sollte. Um dies zu unterstützen, muss die Website eine Reihe von Anfragen eines einzelnen Clients als eine _Sitzung_ behandeln, die mit diesem persistenten Zustand verknüpft werden kann.

Wenn eine Website die Fähigkeit hat, Benutzer zu authentifizieren, um Einzelpersonen Zugang zu bestimmten Daten oder Aktionen zu gewähren, möchte sie in der Regel die Identität eines authentifizierten Benutzers als Zustand behandeln, der über mehrere Anfragen des Clients hinweg bestehen bleibt. Im Gegensatz zur Auswahl eines Themas stellt die Identität eines authentifizierten Benutzers auf der Website jedoch einen Zustand dar, der für einen Angreifer besonders wertvoll ist. Daher muss ein Website-Autor besonders vorsichtig sein, wenn er eine Lösung zur Sitzungsverwaltung für authentifizierte Benutzer implementiert.

Das gebräuchlichste Modell für Sitzungsverwaltung ist die [zentralisierte Sitzungsverwaltung](#zentralisierte_sitzungsverwaltung), bei der der Sitzungszustand des Benutzers auf dem Server gespeichert wird.
Ein alternatives Modell, das in bestimmten Webanwendungsarchitekturen nützlich ist, ist die [dezentralisierte Sitzungsverwaltung](#dezentrale_sitzungsverwaltung) (manchmal als JWT-Server-Token bezeichnet). In diesem Modell speichert der Client den Sitzungszustand als Objekt, das vom Server {{Glossary("digital_signature", "digital signiert")}} wurde.

In den folgenden Abschnitten erklären wir zunächst das zentralisierte Modell, beschreiben dann potenzielle Angriffe und Implementierungsüberlegungen.
Anschließend erläutern wir das dezentrale Modell, vergleichen die beiden Methoden und diskutieren, wann welche Herangehensweise zu verwenden ist.

## Zentralisierte Sitzungsverwaltung

In einer zentralisierten Sitzungsverwaltung wird der Sitzungszustand des Benutzers auf dem Server gespeichert:

- Wenn der Benutzer authentifiziert wird, zeichnet der Server seinen Zustand auf und generiert eine _Sitzungs-ID_, die er mit diesem Zustand verknüpft. Der Server gibt dem Client eine Kopie der Sitzungs-ID zurück. Der Client speichert die Sitzungs-ID.

- Wenn der Client eine Anfrage an den Server stellt, fügt er die ID bei. Der Server verwendet diese, um den Sitzungszustand des Benutzers nachzuschlagen und zu entscheiden, was der Client tun darf.

![Diagramm, das die Sitzungsverwaltung mit serververwaltetem Sitzungszustand zeigt](session-mgt-centralized.svg)

## Angriffe

Bei der Zielsetzung der Sitzungsverwaltung ist es das Ziel eines Angreifers, einen legitimen Benutzer zu imitieren, ohne das Authentifizierungssystem der Website kompromittieren zu müssen. In diesem Abschnitt beschreiben wir die zwei Hauptmethoden, mit denen ein Angreifer dies erreichen kann: [_Session Hijacking_](#session_hijacking) und [_Session Fixation_](#session_fixation).

### Session Hijacking

Session Hijacking ist ein allgemeiner Begriff für einen Angriff, bei dem ein Angreifer die Sitzung eines legitimen Benutzers übernehmen kann. Es gibt einige gängige Ansätze, aber sie alle beinhalten den Zugriff auf den Wert der Sitzungs-ID eines authentifizierten Benutzers.

#### Abfangen der Sitzungs-ID

Der Angreifer könnte eine Sitzungs-ID stehlen, während sie zwischen Client und Server gesendet wird, in einem [Manipulator-in-der-Mitte (MITM)](/de/docs/Web/Security/Attacks/MITM) Angriff.

Die Verteidigung dagegen besteht darin, die Seite über [TLS](/de/docs/Web/Security/Defenses/Transport_Layer_Security) zu bedienen.

#### Voraussagen der Sitzungs-ID

Wenn ein Angreifer den Wert der einem legitimen Benutzer zugewiesenen Sitzungs-ID vorhersagen, erraten oder durch Brute-Force ermitteln kann, kann er diese ID verwenden, um den Benutzer zu imitieren, ohne die Kopie des Benutzers stehlen zu müssen.

Die Verteidigung dagegen besteht darin, [sicherzustellen, dass Sitzungs-ID-Werte lang genug und zufällig genug sind, um unvorhersehbar zu sein](#sitzungs-id-werte).

#### Angriff auf den Client

Ein Angreifer kann eine Sitzung kapern, wenn er seinen Code im Browser des Benutzers, im Kontext der Ziel-Website, ausführen kann, beispielsweise in einem [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriff.

Wenn die Sitzungs-ID für JavaScript zugänglich ist (z. B. weil sie im [Local Storage](/de/docs/Web/API/Web_Storage_API) gespeichert ist), kann der Angreifer die ID stehlen und verwenden, um den Benutzer zu imitieren.

Die Verteidigung dagegen besteht darin, die üblichen [Verteidigungen gegen XSS](/de/docs/Web/Security/Attacks/XSS#defenses_against_xss) zu implementieren.

### Session Fixation

In einem Session-Fixation-Angriff wählt der Angreifer einen Wert für die Sitzungs-ID und überzeugt dann die Website, diesen Wert als Sitzungs-ID für den Zielbenutzer zu verwenden. Der Angreifer kann dann den Benutzer imitieren, da er die ID kennt. In diesem Angriff muss der Angreifer die ID nicht stehlen, weil er sie die ganze Zeit kannte.

Angenommen, die Ziel-Website erwartet, dass die Sitzungs-ID als URL-Parameter in Anfragen enthalten ist, die der Client stellt. Angenommen auch, dass der Zielbenutzer zunächst ein Konto auf der Ziel-Website hat, sich aber nicht angemeldet hat.

Der Angreifer erfindet einen Wert für die Sitzungs-ID und sendet dem Benutzer eine E-Mail mit einem Link und einem glaubwürdigen Grund, warum der Benutzer auf den Link klicken sollte. Der Link führt zur Ziel-Website und enthält die vom Angreifer erzeugte Sitzungs-ID als URL-Parameter:

```plain
https://target-website.example.org/login?session=ATTACKER-GENERATED-ID
```

Wenn der Benutzer auf den Link klickt, wird die Sitzungs-ID zur Website gesendet. Wenn sich der Benutzer dann anmeldet und die Website diese Sitzungs-ID für den angemeldeten Benutzer erneut nutzt, kann der Angreifer den Benutzer imitieren, da er den Wert bereits kennt.

Wenn die Website Cookies anstelle von URL-Parametern zum Senden der Sitzungs-ID verwendet, ist dieser Angriff schwieriger: Der Angreifer muss in der Lage sein, einen XSS-Angriff auf die Ziel-Website durchzuführen. Dies ist ein Grund, warum Cookies eine viel bessere Methode zum Speichern und Übermitteln von Sitzungs-IDs als URL-Parameter sind.

Die Schlüsselverteidigung gegen Session Fixation besteht jedoch darin, dass der Server bei jeder Anmeldung des Benutzers immer eine neue Sitzungs-ID generieren und jeden vorhandenen Wert ungültig machen muss.

## Sitzungs-ID-Werte

Die Sitzungs-ID sollte:

- Genügend Entropie enthalten, um vor [Rate- oder Vorhersageangriffen](#voraussagen_der_sitzungs-id) zu schützen. Der [OWASP-Leitfaden zur Sitzungsverwaltung](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html#session-id-properties) empfiehlt mindestens 64 Bits Entropie.

- Bedeutungslos sein, außer als Schlüssel für den Server: Das heißt, sie sollte keine Informationen über den Benutzer oder sein Konto enthalten.

Soweit möglich, sollten Websites ein angesehenes Web-Framework oder eine Bibliothek zur Erstellung von Sitzungs-IDs verwenden.

## Speicherung der Sitzungs-ID

Clients müssen in der Lage sein, Sitzungskennungen sicher zu speichern, damit ein Angreifer den Wert nicht abrufen und die Sitzung kapern kann.

Die beiden Hauptoptionen zum Speichern von Sitzungskennungen sind [Local Storage](/de/docs/Web/API/Web_Storage_API) und [Cookies](/de/docs/Web/HTTP/Guides/Cookies).

Cookies sind die empfohlene Wahl, da eine Website verhindern kann, dass das Cookie für JavaScript zugänglich ist, indem sie das [`HttpOnly`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#httponly) Attribut setzt. Mit diesem gesetzten Attribut kann der bösartige Code selbst bei einem erfolgreichen XSS-Angriff nicht auf die Sitzungs-ID zugreifen (zum Beispiel, um sie an den Angreifer zu senden). Dies bietet einen klaren Vorteil gegenüber anderen clientseitigen Speichermethoden.

Beachten Sie jedoch, dass dies keinen vollständigen Schutz bietet: Der bösartige Code kann dennoch HTTP-Anfragen an den Zielserver aus dem Browser des Benutzers senden, die die Sitzungs-ID enthalten würden, sodass er die Privilegien des Benutzers auf der Seite erhält.

## Übertragung der Sitzungs-ID

Wenn eine Sitzungs-ID im Local Storage gespeichert wird, muss der Client die ID explizit lesen und in die Anfragen einfügen, die er stellt.

Befindet sich die Sitzungs-ID in einem Cookie, wird sie automatisch gesendet, wenn der Client Anfragen stellt. Auch hier gibt es Attribute, die steuern, welche Anfragen das Cookie enthalten.

### Sichere Übertragung

Wenn das [`Secure`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#secure) Attribut gesetzt ist, wird das Cookie nicht über unverschlüsselte Verbindungen gesendet. Dies ist eine Verteidigung gegen einen [Manipulator-in-der-Mitte (MITM)](/de/docs/Web/Security/Attacks/MITM) Angriff, bei dem während des Transports eine Sitzungskennung gestohlen wird.

### Steuerung der Cookie-Ziele

Die [`Domain`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#domaindomain-value) und [`Path`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#pathpath-value) Attribute steuern die URLs, an die das Cookie gesendet wird, und sollten auf die restriktivsten möglichen Werte gesetzt werden, unter Berücksichtigung der Bedürfnisse Ihrer Website.

Standardmäßig wird das Cookie nur an denselben Host gesendet, der es gesetzt hat. Ein Cookie, das von `https://login.example.org` gesetzt wurde, wird zum Beispiel nicht in Anfragen an `https://products.example.org` oder sogar `https://example.org` einbezogen. Wenn Sie dies lockern müssen, können Sie dies mit dem `Domain` Attribut tun, aber Sie können nicht zulassen, dass das Cookie in Anfragen an eine völlig andere {{Glossary("Site", "Seite")}} einbezogen wird. Zum Beispiel, wenn das Cookie von `https://example.org` gesetzt wurde, können Sie nicht arrangieren, dass es an `https://example.com` gesendet wird.

### CSRF-Betrachtungen

Wenn eine Website Cookies verwendet, um Sitzungskennungen zu übertragen, muss sie Schutzmaßnahmen gegen [Cross-Site Request Forgery (CSRF)](/de/docs/Web/Security/Attacks/CSRF) Angriffe implementieren. Das Risiko hierbei besteht darin, dass der Browser Cookies in eine Anfrage von der Seite des Angreifers an die Ziel-Website einfügen kann und wenn diese Cookies eine gültige Sitzungs-ID enthalten, der Server die Anfrage so behandelt, als käme sie von einem legitimen Benutzer und die Anfrage des Angreifers ausgeführt wird.

Unser CSRF-Leitfaden beschreibt [empfohlene Verteidigungen](/de/docs/Web/Security/Attacks/CSRF#defenses_against_csrf) hier: Beachten Sie, dass das Setzen des [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) Cookie-Attributs nur ein Teil einer vollständigen Verteidigung ist.

## Sitzungsdauer

Die Bestimmung, wie lange eine Sitzung dauern sollte, bevor der Benutzer erneut authentifiziert werden muss, ist ein Kompromiss zwischen Sicherheit und Benutzerfreundlichkeit. Je länger eine Sitzung dauert, desto mehr Zeit hat ein Angreifer, sie zu kapern, oder eine gestohlene Sitzungs-ID zu verwenden. Andererseits ist die erneute Authentifizierung eine Quelle der Reibung für den Benutzer.

Websites können die [`Expires`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#expiresdate) und [`Max-Age`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#max-agenumber) Cookie-Attribute verwenden, um zu steuern, wann ein Cookie ablaufen soll. Wenn eines dieser Attribute gesetzt ist, dann ist das Cookie ein _persistent_ Cookie, was bedeutet, dass sein Wert gespeichert wird, sodass es über Browser-Neustarts hinweg bestehen bleibt.

Wenn beide Attribute ausgelassen werden, vergisst der Browser das Cookie, wenn der Benutzer ihn schließt. Das [OWASP Cheatsheet](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html#expire-and-max-age-attributes) empfiehlt, dass Websites diese Attribute weglassen sollten. Viele Websites verwenden jedoch persistente Cookies für die Sitzungsverwaltung.

### Timeouts

Das OWASP Cheatsheet beschreibt drei verschiedene Sitzungstimer, die alle als Teil einer Sitzungsverwaltungsstrategie implementiert werden können:

- _Inaktivitäts-Timeout_: Dies läuft nach einer Inaktivitätsperiode ab, definiert als eine Periode, in der der Client keine HTTP-Anfragen an den Server gesendet hat. Nachdem es abgelaufen ist, muss sich der Benutzer erneut authentifizieren.
- _Absolutes Timeout_: Dies läuft nach einem bestimmten Zeitraum ab, unabhängig davon, ob Aktivität stattgefunden hat oder nicht. Nachdem es abgelaufen ist, muss sich der Benutzer erneut authentifizieren.
- _Erneuerungs-Timeout_: Dies ist ein kürzeres Timeout als das absolute Timeout und hängt nicht von Inaktivität ab. Wenn es jedoch abläuft, führt der Server Folgendes aus:
  - Generiert automatisch eine neue Sitzungs-ID
  - Macht die alte Sitzungs-ID ungültig
  - Sendet die neue Sitzungs-ID an den Client.

  Dadurch kann eine Website die Nutzungsdauer einer Sitzungs-ID durch einen Angreifer einschränken, ohne dass sich der Benutzer zu oft erneut authentifizieren muss.

Alle diese Timeouts sollten auf dem Server berechnet werden und das eigentliche Abbrechen der Sitzung muss auf dem Server stattfinden. Aus Gründen der Benutzerfreundlichkeit sollte der Client auch seinen Sitzungszustand löschen, aber aus Sicht der Sicherheit zählt der Server-Zustand.

Die genauen Timeout-Perioden hängen von der Sensitivität der Sitzung und ihrem Nutzungsprofil ab: Das OWASP Cheatsheet beinhaltet Empfehlungen.

### Invalidation Events

In einigen Situationen möchte eine Website möglicherweise die Sitzungen eines Benutzers ungültig machen und eine erneute Authentifizierung verlangen:

1. Wenn der Client versucht, eine riskante Operation durchzuführen, wie zum Beispiel die Änderung der Anmeldeinformationen des Benutzers auf der Website oder das Auslösen des Kontowiederherstellungsprozesses (z. B. das Zurücksetzen des Passworts).

2. Wenn der Server Anhaltspunkte dafür hat, dass die Sitzungs-ID gestohlen worden sein könnte. Dies könnte beispielsweise eine Anmeldung von einer neuen IP-Adresse oder einem neuen Gerät umfassen.

## Dezentrale Sitzungsverwaltung

Im "zentralisierten Sitzungsverwaltungs"-Modell, das wir bisher beschrieben haben, wird der Sitzungszustand in einer Datenbank auf dem Server gespeichert, und der Client erhält einen Bezeichner für den Zustand, den er dem Server gibt, wenn er eine Anfrage stellt.

Ein alternatives Modell könnte als "dezentrale Sitzungsverwaltung" bezeichnet werden. In diesem Modell wird der Sitzungszustand als {{Glossary("digital_signature", "digital signiertes")}} Objekt im Client aufbewahrt. Diese signierten Objekte sind typischerweise als [JSON Web Tokens (JWTs)](https://www.jwt.io/) dargestellt.

Wenn der Server den Benutzer authentifiziert, erstellt der Server:

- Einen Token, der den Sitzungszustand des Benutzers repräsentiert und bestimmt, welche Art von Zugriff dieser Benutzer haben sollte.
- Signiert diesen Token digital
- Gibt den signierten Token an den Client zurück.

Wenn der Client eine Anfrage stellt, legt er den signierten Token dem Server vor, der die Signatur überprüft und den Sitzungszustand verwendet, um zu entscheiden, wie die Anfrage gehandhabt werden soll.

Da der Zustand im Client aufrechterhalten wird, ist dieses Modell beliebt für verteilte Anwendungen, in denen der Client möglicherweise Anfragen an mehrere verschiedene Server stellt. Der Client übergibt seinen Token an jeden Server, und solange dieser Server Signaturen des Token-Ausstellers überprüfen kann, kann der Server entscheiden, wie die Anfrage zu behandeln ist: Es ist nicht erforderlich, dass der Server, der die Anfrage bearbeitet, direkt mit dem Token-Aussteller interagiert.

In dem unten stehenden Diagramm zeigen wir den Client, der mit zwei Servern interagiert:

- Der _Token-Server_, der den Benutzer authentifiziert und Token ausstellt
- Der _Ressourcen-Server_, der Token validieren und Anfragen für ordnungsgemäß autorisierte Clients ausführen kann. In einer echten Anwendung könnte es natürlich mehr als einen Ressourcen-Server geben, der jeweils einen anderen Aspekt der Anwendung abhandelt.

![Diagramm, das die Sitzungsverwaltung mit clientverwaltetem Sitzungszustand zeigt](session-mgt-decentralized.svg)

Beachten Sie, dass die dezentrale Sitzungsverwaltung dazu neigt, komplizierter zu sein als das zentralisierte Modell und einige Schwachstellen einführt, die wir in den nächsten Abschnitten diskutieren werden. Wenn Sie sie nicht benötigen, wegen der Architektur Ihrer App, ist es im Allgemeinen besser, das zentralisierte Modell zu verwenden.

### Token-Speicherung

Überlegungen zur Token-Speicherung sind weitgehend die gleichen wie für die [Speicherung der Sitzungs-ID](#speicherung_der_sitzungs-id): Wenn ein Angreifer den Token stehlen kann, kann er die Sitzung des Benutzers kapern. Websites wählen daher häufig die Speicherung von Tokens in `HttpOnly` Cookies, um von dem Schutz zu profitieren, den dies gegen clientseitige XSS bietet.

Es gibt einige zusätzliche Überlegungen, die ein dezentrales, tokenbasiertes Modell berücksichtigen muss:

- Tokens sind viel größer als Sitzungs-IDs und Cookies haben eine maximale Größe von 4KB.

- Wenn eine verteilte Anwendung Dienste von verschiedenen {{Glossary("Registrable_domain", "registrierbaren Domains")}} verwenden muss, kann sie keine Cookies zur Speicherung von Tokens verwenden, da der Browser kein Cookie an eine andere Seite sendet als die, die das Cookie gesetzt hat. Zum Beispiel, wenn `https://example.com` ein Cookie setzt, wird es nicht an `https://example.org` gesendet.

### Token-Verifizierung

Viele Angriffe auf die dezentrale Sitzungsverwaltung konzentrieren sich auf die Token-Verifizierung: das ist der Prozess, bei dem der Ressourcen-Server einen Token überprüft und die Ansprüche, die er enthält, bevor er entscheidet, wie die Anfrage zu handhaben ist.

Zum Beispiel, der Zweck eines signierten Tokens besteht darin, einen Angreifer daran zu hindern, einen bestehenden Token zu ändern oder seinen eigenen Token zu erstellen, der ihm die Privilegien des Ziels gibt. Das JWT-Format erlaubt jedoch Tokens, die keine Signatur enthalten, und [einige JWT-Verifizierungsbibliotheken haben in der Vergangenheit solche Tokens akzeptiert](https://auth0.com/blog/critical-vulnerabilities-in-json-web-token-libraries/). Dies bedeutet, dass ein Angreifer:

1. Einen gefälschten Token erstellen kann, der ihm Zugang zu dem Konto des Ziels gibt
2. Angibt, dass dieser Token keine Signatur enthält
3. Den Token einem Ressourcen-Server vorlegt

Wenn die JWT-Bibliothek des Ressourcen-Servers die Anwesenheit der Signatur nicht erzwingt, können sie diesen Token zulassen und dem Angreifer Zugang gewähren.

Um sich gegen einen Angriff dieser Art zu verteidigen, muss der Ressourcen-Server sicherstellen, dass die von ihm verwendete JWT-Bibliothek immer die Token-Signatur überprüft.

### Sitzungen ungültig machen

In unserer Diskussion über [Invalidation Events](#invalidation_events) haben wir gesehen, dass eine Website in einigen Situationen die Sitzung eines Benutzers ungültig machen und sie zur erneuten Authentifizierung zwingen möchte, wegen eines Ereignisses, das möglicherweise den Beweis darstellt, dass die Sitzungs-ID von einem Angreifer gestohlen wurde. Zum Beispiel, wenn ein Benutzer versucht, sein Passwort zu ändern, sollte die Seite alle aktuellen Sitzungen ungültig machen.

Mit einem zentralisierten Modell, bei dem der Sitzungszustand des Benutzers auf dem Server gepflegt wird, kann der Server eine Sitzung ungültig machen, indem er den von ihm gespeicherten Sitzungszustand löscht.

Mit dem dezentralen Modell jedoch, bei dem der Client den Sitzungstoken aufrechterhält und er selbstständig ist: Ein Ressourcen-Server sollte in der Lage sein, eine Anfrage basierend nur auf dem Inhalt des Tokens zu bearbeiten. Dies macht es schwierig, einen Token zu widerrufen, nachdem er ausgestellt wurde.

Die gebräuchlichste Lösung dafür ist:

1. Den Tokens, die der Client verwendet, um auf Ressourcen-Server zuzugreifen (die manchmal _Zugriffstoken_ genannt werden), eine kurze Gültigkeitsdauer zu geben, sodass sie, selbst wenn sie gestohlen werden, nicht lange genutzt werden können.

2. Einen neuen Token-Typ namens _Refresh Token_ hinzufügen, der dem Client bei der Benutzerauthentifizierung gegeben wird. Dieser Token hat eine viel längere Lebensdauer als der Zugriffstoken.

3. Dem Token-Server erlauben, neue Zugriffstoken auszustellen, wenn ein gültiger Refresh Token vorgelegt wird.

![Diagramm, das die Sitzungsverwaltung mit clientverwaltetem Sitzungszustand mit Refresh Tokens zeigt](session-mgt-decentralized-refresh-token.svg)

Der Refresh-Endpunkt gibt der Anwendung einen zentralen Punkt, um zu bestimmen, ob die Sitzung des Benutzers ungültig gemacht werden sollte. Sollte sie die Sitzung ungültig machen wollen, tut sie dies, indem sie sich weigert, neue Zugriffstoken auszustellen.

## Frameworks und Bibliotheken

Anstatt alle Details der Sitzungsverwaltung selbst zu implementieren, empfehlen wir, ein anerkanntes Framework oder eine Bibliothek zu verwenden und die darin enthaltenen Einrichtungen zur Sitzungsverwaltung zu nutzen.

## Checkliste zur Sitzungsverwaltung

Wir können die obigen Empfehlungen wie folgt zusammenfassen:

- Wählen Sie ein zentrales Modell für die Sitzungsverwaltung, wenn es die Architektur Ihrer App erlaubt.
- Bevorzugen Sie es, Ihre Sitzungs-ID in einem Cookie zu speichern. Wenn Sie dies tun:
  - Setzen Sie das `Secure` und `HttpOnly` Attribut.
  - Implementieren Sie CSRF-Verteidigungen, einschließlich des Setzens des `SameSite` Attributs auf `Lax` oder vorzugsweise `Strict`, aber verwenden Sie auch andere Techniken wie Fetch-Metadaten oder CSRF-Token.
- Definieren Sie eine Richtlinie für das Ablaufen von Sitzungen, möglicherweise mit einem Inaktivitäts-Timeout, einem absoluten Timeout und einem Erneuerungs-Timeout.
- Machen Sie die Sitzung des Benutzers ungültig bei Ereignissen, die auf Session Hijacking hindeuten könnten.
- Wenn Sie ein dezentrales Sitzungsverwaltungssystem mit Tokens implementieren:
  - Stellen Sie sicher, dass Ihre Endpunkte die Tokens korrekt validieren.
  - Erwägen Sie, einen Refresh Token hinzuzufügen und den Zugriffstokens eine kurze Lebensdauer zu geben.
- Verwenden Sie ein anerkanntes Framework oder eine Bibliothek zur Sitzungsverwaltung, anstatt die Sitzungsverwaltung selbst zu implementieren.

## Siehe auch

- [Session Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html) (OWASP)
