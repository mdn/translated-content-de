---
title: Verbundene Website-Sets
slug: Web/API/Storage_Access_API/Related_website_sets
l10n:
  sourceCommit: 775df1c62a1cbe555c4374ff9122d4ef15bd6f60
---

{{DefaultAPISidebar("Storage Access API")}}

> [!WARNING]
> Diese Funktion wird derzeit von zwei Browser-Anbietern abgelehnt. Siehe den Abschnitt [Standards-Positionen](#standards-positionen) unten für Einzelheiten zur Ablehnung.

Verbundene Website-Sets sind ein Mechanismus zur Definition einer Reihe von verwandten Websites, die vertrauenswürdige Inhalte teilen. Dadurch können Browser diesen Websites standardmäßig Zugriff auf [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) und [unpartitionierten Zustand](/de/docs/Web/Privacy/Guides/State_Partitioning#state_partitioning) gewähren, wenn sie in anderen Mitgliedern des Sets eingebettet sind, ohne dass Benutzer über eine Berechtigungsaufforderung Zugriff auf die [Storage Access API](/de/docs/Web/API/Storage_Access_API) gewähren müssen.

## Konzepte und Verwendung

Betrachten wir Situationen, in denen Sie eine Reihe verwandter Websites mit verschiedenen Domainnamen haben und den Website-Inhalten Zugriff auf Drittanbieter-Cookies und unpartitionierten Status gewähren möchten, wenn sie in einem Drittanbieterkontext innerhalb anderer verwandter Websites geladen werden (d.h. eingebettet in ein {{htmlelement("iframe")}}). Typische Anwendungsfälle sind:

- App-Sites: Eine einzelne Anwendung kann über mehrere Websites bereitgestellt werden, um Benutzern eine nahtlose Navigation zwischen ihnen in einer einzigen Sitzung zu ermöglichen.
- Marken-Sites: Eine Reihe von Markenressourcen kann auf einer einzelnen Site enthalten sein, jedoch über mehrere Domains bereitgestellt werden, einschließlich Sitzungsdaten zu Benutzerpräferenzen, Anpassungen usw.

Der Zugriff auf Drittanbieter-Cookies und unpartitionierten Zustand wird häufig durch Browser-Richtlinien blockiert. Sie können dies jedoch mithilfe der Storage Access API umgehen — siehe [Using the Storage Access API](/de/docs/Web/API/Storage_Access_API/Using) für Einzelheiten.

Verbundene Websites sind ein Mechanismus zur schrittweisen Verbesserung, der zusammen mit der Storage Access API funktioniert. Unterstützende Browser gewähren Drittanbieter-Cookie- und unpartitionierten Zustandszugriff zwischen Websites im gleichen Set _ohne_ den üblichen Workflow zur Benutzerberechtigungsaufforderung zu durchlaufen, sobald [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) (oder [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor)) aufgerufen wird. Dies führt zu einer benutzerfreundlicheren Erfahrung für Benutzer von Websites im Set.

Sie sollten bedenken, dass:

- Die Chrome-exklusive Methode [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor) — die es Top-Level-Sites ermöglicht, Speicherzugriff im Namen von eingebetteten Ursprungsinhalten anzufordern — wird nur auf Domains innerhalb eines verbundenen Website-Sets unterstützt. Siehe [Using the Storage Access API](/de/docs/Web/API/Storage_Access_API/Using) für ein Beispiel.
- Als Chrome zum ersten Mal die Standard Storage Access API unterstützte (d.h. die Methoden [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess) und [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess)), erforderte es, dass aufrufende Sites Teil eines verbundenen Website-Sets waren. Dies ist nicht mehr der Fall.

## Wie funktioniert RWS?

Ein verbundenes Website-Set besteht aus einer primären Site und bis zu fünf zugeordneten Sites.

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
> Die Erklärungen der Zugehörigkeit müssen eine klare Beschreibung enthalten, wie die Zugehörigkeit zur primären Site den Benutzern dieser Sites präsentiert wird.

Um ein Set zu nutzen, muss sein JSON der `related_website_sets.JSON`-Datei im [Related Website Sets GitHub-Repository](https://github.com/GoogleChrome/related-website-sets/blob/main/related_website_sets.JSON) hinzugefügt werden, die Chrome dann konsumiert, um die Liste der Sets zu erhalten, auf die das RWS-Verhalten angewendet werden soll.

### `.well-known` Dateien

Jede Site im Set muss auch eine [`.well-known`](https://en.wikipedia.org/wiki/Well-known_URI)-Datei unter `/.well-known/related-website-set.json` bereitstellen, die dazu dient, die Set-Struktur und die Beziehung zwischen den Sites im Set zu verifizieren.

Die `.well-known`-Datei der primären Site muss explizit die vollständige Set-Struktur auflisten. `https://primary1.com` im obigen Beispiel würde eine `https://primary1.com/.well-known/related-website-set.json` Datei benötigen, die folgendermaßen aussieht:

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

Jede zugeordnete und Dienst-Site muss ihre primäre Site in einer `.well-known`-Datei angeben. Jede nicht-primäre Site im obigen Beispiel (z.B. `https://associateA.com`) würde eine `/.well-known/related-website-set.json` Datei benötigen, die so aussieht:

```json
{
  "primary": "https://primary1.com"
}
```

Für vollständige Details zum Prozess, zur JSON-Syntax und zu anderen Anforderungen für das Einreichen von Sets siehe die [Einreichungsrichtlinien](https://github.com/GoogleChrome/related-website-sets/blob/main/RWS-Submission_Guidelines.md). Nur Domain-Administratoren können ein Set erstellen, das ihre Sites enthält.

Beachten Sie, dass die `.well-known`-Dateien auch als Teil des Einreichungsprozesses überprüft werden, daher müssen sie vor der Einreichung des zugeordneten Sets vorbereitet werden.

### Vorteile eines aktiven Sets

Sobald ein Set aktiv ist:

- Anfragen von Sites im Set (über [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess)), um Zugriff auf Drittanbieter-Cookies und unpartitionierten Zustand zu erhalten, die Sites im Set gehören, werden automatisch gewährt, und kein Schritt zur Benutzerberechtigung ist erforderlich.
- [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor) Anrufe können von Top-Level-Sites im Set ausgeführt werden, um Drittanbieter-Cookie-Zugriff für andere Sites im Set anzufordern.

## RWS-Sicherheit

RWS wurde mit Sicherheitsaspekten im Sinn entworfen. Es wäre katastrophal, wenn eine böswillige Site in der Lage wäre, zu behaupten, Teil eines Sets zu sein, und die damit verbundenen Privilegien zu erlangen. Betrachten wir eine theoretische böswillige Site, `evilsite.example.com`, und untersuchen einige Angriffsbeispiele, die sie versuchen könnte, die alle scheitern würden:

- **`evilsite.example.com` versucht, eine assoziierte Site in einem anderen Set zu sein**: Wenn eine Site behauptet, in einem Set zu sein (`d.h.` indem sie eine primäre in einer `.well-known`-Datei auflistet), jedoch nicht im Set-Einreichung und/oder der primären `.well-known`-Datei enthalten ist, erhält sie nicht die Vorteile, Teil des Sets zu sein.
- **`evilsite.example.com` beansprucht, eine primäre Site zu sein, und reicht ein Set ein, das einige potentielle Opfer-Sites enthält**: Der Einreichungsprozess erfordert, dass `.well-known`-Dateien, die von nicht primären Sites gehostet werden, ihre primäre explizit auflisten. Wenn diese primäre nicht mit der Set-Einreichung übereinstimmt (d.h. wenn die assoziierten/Dienst-Sites eine andere primäre erwarten oder überhaupt nicht in einem Set erwartet werden), wird die Einreichung abgelehnt.
- **`site1.example.com` und `site2.example.com` sind absichtlich im gleichen Set, aber `site1.example.com` wird von `evilsite.example.com` gehijackt**: Die Auswirkungen eines Site-Hijacking-Angriffs innerhalb eines Sets sind nicht schlimmer als sie normalerweise wären, sobald die anderen Sites entsprechend aktualisiert werden:
  - Die reguläre [Storage Access API](/de/docs/Web/API/Storage_Access_API) erfordert eine aktive Einwilligung durch die eingebettete Site, also kann `site2.example.com` aufhören, `document.requestStorageAccess()` aufzurufen, wenn sie in `site1.example.com` eingebettet ist, um einen {{Glossary("CSRF", "CSRF")}}-Angriff zu vermeiden.
  - Die Verwendung von `requestStorageAccessFor()` erfordert [CORS](/de/docs/Web/HTTP/CORS), also könnte `site2.example.com` entscheiden, nicht mit den entsprechenden CORS-Headern zu antworten, wenn Netzwerk-Anfragen von `site1.example.com` kommen, um so einen CSRF-Angriff zu vermeiden.

## Beispiele

- Das [Demo zu Related Website Sets](https://related-website-sets.glitch.me/) zeigt, wie RWS verwendet wird.
- Siehe auch [Using the Storage Access API](/de/docs/Web/API/Storage_Access_API/Using).

## Spezifikationen

{{Specifications}}

### Standards-Positionen

Zwei Browser-Anbieter lehnen diese Spezifikation {{Glossary("Web_standards#opposing_standards", "ab")}}. Bekannte Positionen sind wie folgt:

- Mozilla (Firefox): [Negativ](https://mozilla.github.io/standards-positions/#first-party-sets)
- Apple (Safari): [Negativ](https://webkit.org/standards-positions/#position-93)

## Siehe auch

- [Storage Access API](/de/docs/Web/API/Storage_Access_API)
- [Related Website Sets](https://developers.google.com/privacy-sandbox/cookies/related-website-sets) auf developers.google.com (2023)
- [Related Website Sets: Entwicklerleitfaden](https://developers.google.com/privacy-sandbox/cookies/related-website-sets-integration) auf developers.google.com (2023)
