---
title: Verwandte Websitemengen
slug: Web/API/Storage_Access_API/Related_website_sets
l10n:
  sourceCommit: a6c32a2d0add510c95ef74e85bd8e17551d508b6
---

{{DefaultAPISidebar("Storage Access API")}}

> [!WARNING]
> Diese Funktion wird derzeit von zwei Browseranbietern abgelehnt. Siehe den Abschnitt [Standardspositionen](#standardspositionen) weiter unten für Details zur Ablehnung.

Verwandte Websitemengen sind ein Mechanismus zur Definition einer Menge verwandter Websites, die vertrauenswürdige Inhalte teilen. Dadurch können Browser diesen Websites standardmäßig Zugriff auf [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) und [unpartitionierten Zustand](/de/docs/Web/Privacy/Guides/State_Partitioning#state_partitioning) gewähren, wenn sie in anderen Mitgliedern des Sets eingebettet sind, ohne dass Benutzer den Zugriff auf die [Storage Access API](/de/docs/Web/API/Storage_Access_API) über eine Berechtigungsaufforderung gewähren müssen.

## Konzepte und Nutzung

Betrachten Sie Situationen, in denen Sie eine Reihe verwandter Websites mit unterschiedlichen Domainnamen haben und Sie möchten, dass Website-Inhalte Zugriff auf Drittanbieter-Cookies und unpartitionierten Zustand haben, wenn diese in einem Drittanbieterkontext innerhalb anderer verwandter Websites geladen werden (d.h. eingebettet in ein {{htmlelement("iframe")}}). Typische Anwendungsfälle sind:

- App-Websites: Eine einzige Anwendung kann über mehrere Sites bereitgestellt werden, um Benutzern zu ermöglichen, in einer einzigen Sitzung nahtlos zwischen ihnen zu navigieren.
- Marken-Websites: Eine Sammlung von Markenressourcen kann in einer einzigen Site enthalten sein, die dann über mehrere Domains bereitgestellt wird, einschließlich Sitzungsdaten in Bezug auf Benutzerpräferenzen, Anpassungen usw.

Der Zugriff auf Drittanbieter-Cookies und unpartitionierten Zustand wird häufig durch Browser-Richtlinien blockiert. Dennoch können Sie es mithilfe der Storage Access API umgehen — siehe [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using) für Details.

Verwandte Websitemengen sind ein progressiver Verbesserungsmechanismus, der zusammen mit der Storage Access API funktioniert. Unterstützende Browser gewähren Drittanbieter-Cookies und unpartitionierten Zustandszugriff zwischen Websites im gleichen Set _ohne_ den üblichen Workflow für Benutzerberechtigungsaufforderungen durchlaufen zu müssen, sobald [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) (oder [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor)) aufgerufen wird. Dies führt zu einer benutzerfreundlicheren Erfahrung für Benutzer von Websites im Set.

Sie sollten beachten, dass:

- Die Chrome-exklusive Methode [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor) — die es Top-Level-Sites ermöglicht, Speicherzugriff im Namen von eingebettetem Ursprungsinhalt anzufordern — wird nur auf Domains innerhalb eines verwandten Websitemengensets unterstützt. Siehe [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using) für ein Beispiel.
- Als Chrome erstmals die standardmäßige Storage Access API unterstützte (d.h. die Methoden [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess) und [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess)), erforderte es, dass aufrufende Websites Teil einer verwandten Websitemenge sind. Dies ist nicht mehr der Fall.

## Wie funktioniert RWS?

Eine verwandte Websitemenge besteht aus einer primären Website und bis zu fünf assoziierten Websites.

### JSON-Struktur

Ein Set wird durch eine JSON-Struktur dargestellt. Ein hypothetisches Beispiel ist wie folgt:

```json
{
  "sets": [
    {
      "contact": "email address or group alias if available",
      "primary": "https://primary1.com",
      "associatedSites": [
        "https://associateA.com",
        "https://associateB.com",
        "https://associateC.com"
      ],
      "serviceSites": ["https://servicesiteA.com"],
      "rationaleBySite": {
        "https://associateA.com": "Explanation of affiliation with primary site",
        "https://associateB.com": "Explanation of affiliation with primary site",
        "https://associateC.com": "Explanation of affiliation with primary site",
        "https://serviceSiteA.com": "Explanation of service functionality support"
      },
      "ccTLDs": {
        "https://associateA.com": [
          "https://associateA.ca",
          "https://associateA.co.uk"
        ],
        "https://associateB.com": [
          "https://associateB.ru",
          "https://associateB.co.kr"
        ],
        "https://primary1.com": ["https://primary1.co.uk"]
      }
    }
  ]
}
```

> [!NOTE]
> Die Erklärungen zur Zugehörigkeit müssen eine klare Beschreibung enthalten, wie die Zugehörigkeit zur primären Website den Benutzern dieser Websites präsentiert wird.

Um ein Set zu verwenden, muss dessen JSON der `related_website_sets.JSON`-Datei hinzugefügt werden, die im [Related Website Sets GitHub-Repository](https://github.com/GoogleChrome/related-website-sets/blob/main/related_website_sets.JSON) verfügbar ist, die Chrome dann verwendet, um die Liste der Sets abzurufen, auf die RWS-Verhalten angewendet werden soll.

### `.well-known`-Dateien

Jede Site im Set muss auch eine [`.well-known`](https://en.wikipedia.org/wiki/Well-known_URI)-Datei unter `/.well-known/related-website-set.json` bereitstellen, die zur Überprüfung der Set-Struktur und der Beziehung zwischen den Sites im Set dient.

Die `.well-known`-Datei der primären Website muss die vollständige Set-Struktur explizit auflisten. `https://primary1.com` im obigen Beispiel würde eine `https://primary1.com/.well-known/related-website-set.json`-Datei benötigen, die der folgenden ähnelt:

```json
{
  "primary": "https://primary1.com",
  "associatedSites": [
    "https://associateA.com",
    "https://associateB.com",
    "https://associateC.com"
  ],
  "serviceSites": ["https://servicesiteA.com"],
  "rationaleBySite": {
    "https://associateA.com": "Explanation of affiliation with primary site",
    "https://associateB.com": "Explanation of affiliation with primary site",
    "https://associateC.com": "Explanation of affiliation with primary site",
    "https://serviceSiteA.com": "Explanation of service functionality support"
  },
  "ccTLDs": {
    "https://associateA.com": [
      "https://associateA.ca",
      "https://associateA.co.uk"
    ],
    "https://associateB.com": [
      "https://associateB.ru",
      "https://associateB.co.kr"
    ],
    "https://primary1.com": ["https://primary1.co.uk"]
  }
}
```

Jede assoziierte und Service-Site muss ihre primäre Site in einer `.well-known`-Datei angeben. Jede nicht-primäre Site im obigen Beispiel (z.B. `https://associateA.com`) würde eine `/.well-known/related-website-set.json`-Datei benötigen, die wie folgt aussieht:

```json
{
  "primary": "https://primary1.com"
}
```

Für vollständige Details zum Prozess, zur JSON-Syntax und zu weiteren Anforderungen für die Einreichung von Sets siehe die [Einreichungsrichtlinien](https://github.com/GoogleChrome/related-website-sets/blob/main/RWS-Submission_Guidelines.md). Nur Domain-Administratoren können ein Set erstellen, das ihre Sites enthält.

Beachten Sie, dass die `.well-known`-Dateien auch als Teil des Einreichungsprozesses überprüft werden, so dass sie vorhanden sein müssen, bevor das zugehörige Set eingereicht wird.

### Vorteile eines aktiven Sets

Sobald ein Set aktiv ist:

- Anfragen von Sites im Set (über [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess)), um auf Drittanbieter-Cookies und unpartitionierten Zustand zuzugreifen, die zu Sites im Set gehören, werden automatisch gewährt, und es ist kein Benutzerberechtigungsschritt erforderlich.
- [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor)-Aufrufe können von Top-Level-Sites im Set ausgeführt werden, um Drittanbieter-Cookie-Zugriff für andere Sites im Set anzufordern.

## RWS-Sicherheit

RWS wurde mit Blick auf die Sicherheit entworfen. Es wäre katastrophal, wenn eine bösartige Seite sich als Teil eines Sets ausgeben könnte und die damit verbundenen Privilegien erlangen würde. Lassen Sie uns eine theoretische bösartige Seite, `evilsite.example.com`, in Betracht ziehen und einige Beispiele für Angriffe untersuchen, die sie versuchen könnte, und die alle fehlschlagen würden:

- **`evilsite.example.com` behauptet, eine assoziierte Site in einem anderen Set zu sein**: Wenn eine Site, die behauptet, Teil eines Sets zu sein (d.h. indem sie ein Primärverzeichnis in einer `.well-known`-Datei auflistet), nicht in der Set-Einreichung und/oder der `.well-known`-Datei des primären Sites enthalten ist, erhält sie nicht die Vorteile einer Set-Mitgliedschaft.
- **`evilsite.example.com` behauptet, eine primäre Site zu sein, und reicht ein Set ein, das einige potenzielle Opfer-Sites enthält**: Der Einreichungsprozess erfordert, dass `.well-known`-Dateien, die von nicht-primären Sites gehostet werden, ihren Primärverzeichnis explizit auflisten. Wenn dieser Primärverzeichnis nicht mit der Set-Einreichung übereinstimmt (d.h. wenn die assoziierten/Service-Sites erwarten, einen anderen Primärverzeichnis zu haben oder überhaupt nicht Teil eines Sets zu sein), wird die Einreichung abgelehnt.
- **`site1.example.com` und `site2.example.com` sind beabsichtigt im gleichen Set, aber `site1.example.com` wird von `evilsite.example.com` gekapert**: Die Auswirkung eines Site-Hijacking-Angriffs innerhalb eines Sets wäre nicht schlimmer als üblich, sobald die anderen Sites entsprechend aktualisiert sind:
  - Die reguläre [Storage Access API](/de/docs/Web/API/Storage_Access_API) erfordert eine aktive Zustimmung durch die eingebettete Site, sodass `site2.example.com` aufhören kann, `document.requestStorageAccess()` aufzurufen, wenn es in `site1.example.com` eingebettet ist, um einen {{Glossary("CSRF", "CSRF")}}-Angriff zu vermeiden.
  - Die Verwendung von `requestStorageAccessFor()` erfordert [CORS](/de/docs/Web/HTTP/Guides/CORS), sodass `site2.example.com` sich entscheiden könnte, nicht mit den entsprechenden CORS-Headern zu antworten, wenn Netzwerk-Anfragen von `site1.example.com` kommen, um einen CSRF-Angriff zu vermeiden.

## Beispiele

- Das [Related Website Sets Demo](https://related-website-sets.glitch.me/) zeigt, wie RWS verwendet wird.
- Siehe auch [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using).

## Spezifikationen

{{Specifications}}

### Standardspositionen

Zwei Browseranbieter {{Glossary("Web_standards#opposing_standards", "lehnen")}} diese Spezifikation ab. Bekannte Positionen sind wie folgt:

- Mozilla (Firefox): [Negativ](https://mozilla.github.io/standards-positions/#first-party-sets)
- Apple (Safari): [Negativ](https://webkit.org/standards-positions/#position-93)

## Siehe auch

- [Storage Access API](/de/docs/Web/API/Storage_Access_API)
- [Related Website Sets](https://privacysandbox.google.com/cookies/related-website-sets) auf privacysandbox.google.com (2023)
- [Related Website Sets: Entwicklerleitfaden](https://privacysandbox.google.com/cookies/related-website-sets-integration) auf privacysandbox.google.com (2023)
