---
title: Verwandte Website-Sets
slug: Web/API/Storage_Access_API/Related_website_sets
l10n:
  sourceCommit: 8e1d984b2be887877a587dbbf2f0bc595095258a
---

{{DefaultAPISidebar("Storage Access API")}}{{Non-standard_Header}}

> [!WARNING]
> Dieses Feature wird derzeit von zwei Browseranbietern abgelehnt. Siehe den Abschnitt [Standards-Positionen](#standards-positionen) unten für Details zur Ablehnung.

Verwandte Website-Sets sind ein Mechanismus zur Definition einer Gruppe von verwandten Websites, die vertrauenswürdige Inhalte teilen. Infolgedessen können Browser diesen Websites standardmäßig Zugriff auf [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) und [unpartitionierten Zustand](/de/docs/Web/Privacy/Guides/State_Partitioning#state_partitioning) gewähren, wenn sie Inhalte in anderen Setmitgliedern eingebettet haben, ohne dass Benutzer den Zugriff auf die [Storage Access API](/de/docs/Web/API/Storage_Access_API) über eine Berechtigungsaufforderung gewähren müssen.

## Konzepte und Nutzung

Betrachten wir Situationen, in denen Sie eine Reihe von verwandten Websites mit unterschiedlichen Domainnamen haben und Sie den Zugriff auf Drittanbieter-Cookies und unpartitionierten Zustand ermöglichen möchten, wenn diese in einem Drittanbieter-Kontext innerhalb anderer verwandter Websites geladen werden (d.h. eingebettet in ein {{htmlelement("iframe")}}). Typische Anwendungsfälle sind:

- App-Websites: Eine einzelne Anwendung kann über mehrere Websites bereitgestellt werden, um Benutzern eine nahtlose Navigation zwischen ihnen in einer einzigen Sitzung zu ermöglichen.
- Marken-Websites: Ein Satz von Markeninhalten kann in einer einzelnen Website enthalten sein, aber dann über mehrere Domains bereitgestellt werden, einschließlich Sitzungsdaten im Zusammenhang mit Benutzerpräferenzen, Anpassungen usw.

Der Zugriff auf Drittanbieter-Cookies und unpartitionierte Zustände wird häufig durch Browser-Richtlinien blockiert. Sie können dies jedoch umgehen, indem Sie die Storage Access API verwenden — siehe [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using) für Details.

Verwandte Websites sind ein Mechanismus der progressiven Verbesserung, der zusammen mit der Storage Access API funktioniert. Unterstützende Browser gewähren Drittanbieter-Cookies und unpartitionierten Zustandzugang zwischen Websites im selben Set _ohne_ den gewöhnlichen Benutzerberechtigungs-Workflow durchlaufen zu müssen, sobald [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) (oder [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor)) aufgerufen wird. Dies führt zu einem benutzerfreundlicheren Erlebnis für die Nutzer der Websites im Set.

Sie sollten folgendes beachten:

- Die Chrome-exklusive Methode [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor) — die es Top-Level-Websites ermöglicht, Speicherzugriff im Namen eingebetteter Ursprungsinhalte anzufordern — wird nur auf Domains innerhalb eines verwandten Website-Sets unterstützt. Siehe [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using) für ein Beispiel.
- Als Chrome erstmals die Standard-Storage-Access-API unterstützte (d.h. die Methoden [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess) und [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess)), erforderte es, dass die aufrufenden Websites Teil eines verwandten Website-Sets sind. Dies ist nicht mehr der Fall.

## Wie funktioniert RWS?

Ein verwandtes Website-Set besteht aus einer primären Website und bis zu fünf zugehörigen Websites.

### JSON-Struktur

Ein Set wird durch eine JSON-Struktur dargestellt. Ein hypothetisches Beispiel sieht wie folgt aus:

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
> Die Erklärungen zur Zugehörigkeit müssen eine klare Beschreibung enthalten, wie die Zugehörigkeit zur primären Website den Nutzern dieser Websites präsentiert wird.

Um ein Set zu verwenden, muss dessen JSON zur Datei `related_website_sets.JSON` hinzugefügt werden, die im [Related Website Sets GitHub-Repository](https://github.com/GoogleChrome/related-website-sets/blob/main/related_website_sets.JSON) verfügbar ist und die Chrome dann verwendet, um die Liste der Sets zu erhalten, auf die das RWS-Verhalten angewendet werden soll.

### `.well-known` Dateien

Jede Website im Set muss auch eine [`.well-known`](https://en.wikipedia.org/wiki/Well-known_URI)-Datei unter `/.well-known/related-website-set.json` bereitstellen, die dient, um die Setstruktur und die Beziehung zwischen den Websites im Set zu überprüfen.

Die `.well-known`-Datei der primären Website muss explizit die vollständige Setstruktur auflisten. `https://primary1.com` im obigen Beispiel würde eine `https://primary1.com/.well-known/related-website-set.json` Datei benötigen, die ähnlich der folgenden aussieht:

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

Jede zugehörige und Dienstwebsite muss ihr primäre Website in einer `.well-known`-Datei spezifizieren. Jede nicht-primäre Website im obigen Beispiel (z.B. `https://associateA.com`) würde eine `/.well-known/related-website-set.json` Datei wie diese benötigen:

```json
{
  "primary": "https://primary1.com"
}
```

Für vollständige Details zum Prozess, zur JSON-Syntax und zu weiteren Anforderungen für die Einreichung von Sets siehe die [Einreichungsrichtlinien](https://github.com/GoogleChrome/related-website-sets/blob/main/RWS-Submission_Guidelines.md). Nur Domain-Administratoren können ein Set erstellen, das ihre Websites enthält.

Bedenken Sie, dass die `.well-known`-Dateien auch als Teil des Einreichungsprozesses überprüft werden, also müssen sie bereitgestellt werden, bevor das zugehörige Set eingereicht wird.

### Vorteile eines aktiven Sets

Sobald ein Set aktiv ist:

- Anfragen von Websites im Set (über [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess)), um auf Drittanbieter-Cookies und unpartitionierten Zustand zuzugreifen, der zu Websites im Set gehört, werden automatisch gewährt, und es ist kein Benutzerberechtigungsschritt erforderlich.
- [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor)-Aufrufe können von Top-Level-Websites im Set durchgeführt werden, um Drittanbieter-Cookie-Zugang für andere Websites im Set anzufordern.

## RWS-Sicherheit

RWS wurde mit Sicherheitsaspekten im Hinterkopf entwickelt. Es wäre katastrophal, wenn eine böswillige Website behaupten könnte, Teil eines Sets zu sein und die damit verbundenen Privilegien zu erlangen. Betrachten wir eine theoretische bösartige Website, `evilsite.example.com`, und schauen uns einige Beispiele für Angriffe an, die sie versuchen könnte, von denen alle scheitern würden:

- **`evilsite.example.com` behauptet, eine zugehörige Website in einem anderen Set zu sein**: Wenn eine Website, die behauptet, in einem Set zu sein (d.h. durch Auflisten einer primären in einer `.well-known`-Datei), nicht in der Seteinreichung und/oder der `.well-known`-Datei der primären enthalten ist, wird sie nicht die Vorteile erhalten, im Set zu sein.
- **`evilsite.example.com` behauptet, eine primäre Website zu sein, und reicht ein Set ein, das einige potenzielle Opferwebsites enthält**: Der Einreichungsprozess erfordert, dass `.well-known`-Dateien, die von nicht-primären Websites gehostet werden, ihre primäre explizit auflisten. Wenn diese primäre nicht mit der Seteinreichung übereinstimmt (d.h. wenn die zugehörigen/Dienst-Websites erwarten, eine andere primäre zu haben oder überhaupt nicht in einem Set zu sein), wird die Einreichung abgelehnt.
- **`site1.example.com` und `site2.example.com` sind absichtlich im selben Set, aber `site1.example.com` wird von `evilsite.example.com` gehijackt**: Der Einfluss eines Website-Hijacking-Angriffs innerhalb eines Sets ist nicht schlimmer als üblich, sobald die anderen Websites entsprechend aktualisiert werden:
  - Die reguläre [Storage Access API](/de/docs/Web/API/Storage_Access_API) erfordert eine aktive Zustimmung der eingebetteten Website, daher kann `site2.example.com` aufhören, `document.requestStorageAccess()` aufzurufen, wenn es in `site1.example.com` eingebettet ist, um einen {{Glossary("CSRF", "CSRF")}}-Angriff zu vermeiden.
  - Die Verwendung von `requestStorageAccessFor()` erfordert [CORS](/de/docs/Web/HTTP/Guides/CORS), sodass `site2.example.com` sich entscheiden könnte, nicht mit den entsprechenden CORS-Headern zu antworten, wenn Netzwerkanfragen von `site1.example.com` kommen, wodurch ein CSRF-Angriff vermieden wird.

## Beispiele

Für Codebeispiele siehe [Verwandte Website-Sets: Entwicklerleitfaden](https://privacysandbox.google.com/cookies/related-website-sets-integration) auf privacysandbox.google.com (2024)

## Spezifikationen

{{Specifications}}

### Standards-Positionen

Zwei Browser-Anbieter {{Glossary("Web_standards#opposing_standards", "lehnen")}} diese Spezifikation ab. Bekannte Positionen sind wie folgt:

- Mozilla (Firefox): [Negativ](https://mozilla.github.io/standards-positions/#first-party-sets)
- Apple (Safari): [Negativ](https://webkit.org/standards-positions/#position-93)

## Siehe auch

- [Storage Access API](/de/docs/Web/API/Storage_Access_API)
- [Verwandte Website-Sets](https://privacysandbox.google.com/cookies/related-website-sets) auf privacysandbox.google.com (2023)
