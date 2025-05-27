---
title: Verwandte Website-Sets
slug: Web/API/Storage_Access_API/Related_website_sets
l10n:
  sourceCommit: cb25e0acbd9f0af27c4a99965cb962230d49a35d
---

{{DefaultAPISidebar("Storage Access API")}}

> [!WARNING]
> Dieses Feature wird derzeit von zwei Browser-Anbietern abgelehnt. Siehe den Abschnitt [Standards-Positionen](#standards-positionen) weiter unten für Details zur Ablehnung.

Verwandte Website-Sets sind ein Mechanismus zum Definieren eines Sets verwandter Sites, die vertrauenswürdige Inhalte teilen. Dadurch können Browser diesen Sites standardmäßig Zugriff auf [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) und [Unpartitionierten Zustand](/de/docs/Web/Privacy/Guides/State_Partitioning#state_partitioning) gewähren, wenn sie in andere Set-Mitglieder eingebettet sind, ohne dass Benutzer den Zugriff auf die [Storage Access API](/de/docs/Web/API/Storage_Access_API) über eine Berechtigungsaufforderung gewähren müssen.

## Konzepte und Nutzung

Betrachten Sie Situationen, in denen Sie eine Reihe verwandter Websites mit unterschiedlichen Domain-Namen haben und Sie den Site-Inhalten Zugriff auf Drittanbieter-Cookies und unpartitionierten Zustand gewähren möchten, wenn sie in einem Drittanbieter-Kontext in andere verwandte Sites geladen werden (d.h. eingebettet in ein {{htmlelement("iframe")}}). Typische Anwendungsfälle sind:

- App-Sites: Eine einzelne Anwendung kann über mehrere Sites bereitgestellt werden und zielt darauf ab, Benutzern zu ermöglichen, nahtlos zwischen ihnen in einer einzigen Sitzung zu navigieren.
- Marken-Sites: Eine Reihe von Markenressourcen kann in einer einzelnen Site enthalten sein, aber dann über mehrere Domains bereitgestellt werden, einschließlich Sitzungsdaten zu Benutzerpräferenzen, Anpassungen usw.

Drittanbieter-Cookie- und unpartitionierter Zustand-Zugriff wird häufig durch Browser-Richtlinien blockiert. Dennoch können Sie es mit der Storage Access API umgehen — siehe [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using) für Details.

Verwandte Website-Sets sind ein Mechanismus zur progressiven Verbesserung, der zusammen mit der Storage Access API funktioniert. Unterstützende Browser gewähren Drittanbieter-Cookie- und unpartitionierten Zustand-Zugriff zwischen Websites im selben Set _ohne_ den üblichen Benutzeraufforderungsworkflow durchlaufen zu müssen, sobald [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) (oder [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor)) aufgerufen wird. Dies führt zu einer benutzerfreundlicheren Erfahrung für Benutzer von Sites im Set.

Sie sollten bedenken, dass:

- Die Chrome-exklusive Methode [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor) — die es Top-Level-Sites ermöglicht, Speicherzugriff im Namen eingebetteter Herkunftsinhalte anzufordern — nur auf Domains innerhalb eines verwandten Website-Sets unterstützt wird. Siehe [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using) für ein Beispiel.
- Als Chrome die Standard-Storage Access API erstmals unterstützte (das heißt, die Methoden [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess) und [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess)), erforderte es, dass aufrufende Sites Teil eines verwandten Website-Sets waren. Dies ist nicht mehr der Fall.

## Wie funktioniert RWS?

Ein verwandtes Website-Set besteht aus einer primären Site und bis zu fünf zugehörigen Sites.

### JSON-Struktur

Ein Set wird durch eine JSON-Struktur dargestellt. Ein hypothetisches Beispiel ist folgendes:

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
> Die Erklärungen zur Zugehörigkeit müssen eine klare Beschreibung enthalten, wie die Zugehörigkeit zur primären Site den Benutzern dieser Sites präsentiert wird.

Um ein Set zu nutzen, muss sein JSON zur Datei `related_website_sets.JSON` hinzugefügt werden, die im [Related Website Sets GitHub-Repository](https://github.com/GoogleChrome/related-website-sets/blob/main/related_website_sets.JSON) verfügbar ist, welche Chrome dann verwendet, um die Liste der Sets abzurufen, auf die das RWS-Verhalten angewendet wird.

### `.well-known` Dateien

Jede Site im Set muss auch eine [`.well-known`](https://en.wikipedia.org/wiki/Well-known_URI) Datei unter `/.well-known/related-website-set.json` bereitstellen, die dazu dient, die Set-Struktur und die Beziehung zwischen den Sites im Set zu überprüfen.

Die `.well-known` Datei der primären Site muss die vollständige Set-Struktur explizit auflisten. `https://primary1.com` im obigen Beispiel würde eine `https://primary1.com/.well-known/related-website-set.json` Datei benötigen, die in etwa wie folgt aussieht:

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

Jede assoziierte und Service-Site muss ihre primäre Site in einer `.well-known` Datei spezifizieren. Jede Nicht-primäre Site im obigen Beispiel (z.B. `https://associateA.com`) würde eine `/.well-known/related-website-set.json` Datei benötigen, die so aussieht:

```json
{
  "primary": "https://primary1.com"
}
```

Für vollständige Details des Prozesses, der JSON-Syntax und anderer Anforderungen für die Einreichung von Sets siehe die [Einreichungsrichtlinien](https://github.com/GoogleChrome/related-website-sets/blob/main/RWS-Submission_Guidelines.md). Nur Domain-Administratoren können ein Set erstellen, das ihre Sites enthält.

Beachten Sie, dass die `.well-known` Dateien auch als Teil des Einreichungsprozesses überprüft werden, sodass sie vorhanden sein müssen, bevor das zugehörige Set eingereicht wird.

### Vorteile eines aktiven Sets

Sobald ein Set aktiv ist:

- Anfragen von Sites im Set (über [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess)) auf Zugriff auf Drittanbieter-Cookies und unpartitionierten Zustand, die zu Sites im Set gehören, werden automatisch gewährt, und es ist kein Benutzergenehmigungsschritt erforderlich.
- [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor) Aufrufe können von Top-Level-Sites im Set gemacht werden, um Zugriff auf Drittanbieter-Cookies für andere Sites im Set anzufordern.

## RWS Sicherheit

RWS wurde mit Blick auf Sicherheit entwickelt. Es wäre verheerend, wenn eine bösartige Site behaupten könnte, Teil eines Sets zu sein und die damit verbundenen Privilegien zu erhalten. Lassen Sie uns eine theoretische bösartige Site, `evilsite.example.com`, in Betracht ziehen und einige Beispiele für Angriffe betrachten, die sie versuchen könnte, die alle fehlschlagen würden:

- **`evilsite.example.com` behauptet, eine assoziierte Site in einem anderen Set zu sein**: Wenn eine Site behauptet, in einem Set zu sein (d.h. durch Angabe eines Primärs in einer `.well-known` Datei) und nicht in der Set-Einreichung und/oder der `.well-known` Datei des Primärs enthalten ist, wird sie nicht die Vorteile des Sets erhalten.
- **`evilsite.example.com` behauptet, eine primäre Site zu sein, und reicht ein Set ein, das einige potenzielle Opferseiten enthält**: Der Einreichungsprozess erfordert, dass `.well-known` Dateien, die von nicht-primären Sites gehostet werden, ihr Primär explizit auflisten. Wenn dieses Primär nicht der Set-Einreichung entspricht (d.h. wenn die assoziierten/Service-Sites ein anderes Primär erwarten oder nicht erwarten, überhaupt in einem Set zu sein), wird die Einreichung abgelehnt.
- **`site1.example.com` und `site2.example.com` sind absichtlich im selben Set, aber `site1.example.com` wird von `evilsite.example.com` übernommen**: Die Auswirkungen eines Site-Übernahme-Angriffs innerhalb eines Sets sind nicht schlimmer als normalerweise, sobald die anderen Sites entsprechend aktualisiert werden:
  - Die reguläre [Storage Access API](/de/docs/Web/API/Storage_Access_API) erfordert ein aktives Opt-in durch die eingebettete Site, sodass `site2.example.com` aufhören kann, `document.requestStorageAccess()` aufzurufen, wenn es in `site1.example.com` eingebettet ist, um einen {{Glossary("CSRF", "CSRF")}} Angriff zu vermeiden.
  - Die Verwendung von `requestStorageAccessFor()` erfordert [CORS](/de/docs/Web/HTTP/Guides/CORS), sodass `site2.example.com` sich entscheiden könnte, nicht mit den entsprechenden CORS-Headers zu antworten, wenn Netzwerk-Anfragen von `site1.example.com` kommen, um einen CSRF-Angriff zu vermeiden.

## Beispiele

- Die [Related Website Sets-Demo](https://related-website-sets.glitch.me/) demonstriert, wie RWS verwendet wird.
- Siehe auch [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using).

## Spezifikationen

{{Specifications}}

### Standards-Positionen

Zwei Browser-Anbieter {{Glossary("Web_standards#opposing_standards", "lehnen")}} diese Spezifikation ab. Bekannte Positionen sind wie folgt:

- Mozilla (Firefox): [Negativ](https://mozilla.github.io/standards-positions/#first-party-sets)
- Apple (Safari): [Negativ](https://webkit.org/standards-positions/#position-93)

## Siehe auch

- [Storage Access API](/de/docs/Web/API/Storage_Access_API)
- [Related Website Sets](https://privacysandbox.google.com/cookies/related-website-sets) auf privacysandbox.google.com (2023)
- [Related Website Sets: Entwickler-Leitfaden](https://privacysandbox.google.com/cookies/related-website-sets-integration) auf privacysandbox.google.com (2023)
