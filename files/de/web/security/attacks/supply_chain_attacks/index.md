---
title: Lieferkettenangriffe
slug: Web/Security/Attacks/Supply_chain_attacks
l10n:
  sourceCommit: 79f65d8322a4e55e9f3f4c91441c9188dbe670e0
---

Eine _Software-Lieferkette_ besteht aus allen Softwarekomponenten und Werkzeugen, die zur Erstellung und Wartung eines Softwareprodukts verwendet werden. Dies umfasst nicht nur die für das Produkt selbst entwickelte Software, sondern auch alle Softwarekomponenten und Werkzeuge, die in deren Produktion verwendet werden.

Bei einem Lieferkettenangriff zielt der Angreifer auf einen Teil der Lieferkette des Produkts ab, um das Produkt selbst zu kompromittieren.

Das offensichtlichste Beispiel hierfür ist eine Drittanbieterbibliothek. Wenn Sie beispielsweise ein von einem Drittanbieter entwickeltes [npm](https://www.npmjs.com/) Paket verwenden, hat dieses die Möglichkeit, Ihre Website zu kompromittieren. Dies kann absichtlich geschehen, wenn es bösartig ist, oder versehentlich, wenn es eigene unbeabsichtigte Schwachstellen enthält. Im Wesentlichen müssen Sie Ihren Drittanbieterabhängigkeiten so sehr vertrauen wie Ihrem eigenen Code.

Weniger offensichtlich gilt dasselbe Prinzip für alle Werkzeuge, die Sie bei der Erstellung Ihrer Software verwenden, einschließlich Code-Editoren, Editor-Plugins, Versionskontrollsystemen, Build-Werkzeugen und so weiter. Jedes dieser Werkzeuge könnte bösartigen oder anfälligen Code in Ihr endgültiges Softwareprodukt einfügen, während der Transformationen, die sie anwenden.

In diesem Dokument skizzieren wir Praktiken, die befolgt werden sollten, um Ihre Software-Lieferkette zu sichern. Es ist in zwei Hauptabschnitte gegliedert:

- [Sicherung Ihrer Entwicklungsumgebung](#sicherung_ihrer_entwicklungsumgebung): Praktiken, um sicherzustellen, dass Ihr eigener Code nicht kompromittiert wird.
- [Verwaltung von Drittanbieterabhängigkeiten](#verwaltung_von_drittanbieterabhängigkeiten): Praktiken, um sicherzustellen, dass Ihre Abhängigkeiten nicht kompromittiert werden.

## Sicherung Ihrer Entwicklungsumgebung

Ein Weg für einen Lieferkettenangriff besteht darin, dass ein Angreifer Schwachstellen oder bösartigen Code direkt in Ihr eigenes Produkt einführt. In diesem Abschnitt beschreiben wir einige Praktiken, die dieser Bedrohung entgegenwirken können.

### Implementierung von Zugangskontrollen

Implementieren Sie starke Zugangskontrollen für alle, die an dem Projekt arbeiten, einschließlich aller mit Schreibzugriff auf Ihr Code-Repository oder der Berechtigung zur Änderung der Build- oder Testkonfiguration. Gute Praktiken hierbei sind:

- Erfordern von {{Glossary("multi-factor_authentication", "Multi-Faktor-Authentifizierung")}} für Teammitglieder.
- Befolgung des {{Glossary("principle_of_least_privilege", "Prinzips der geringsten Privilegien")}}: das heißt, nur denjenigen Teammitgliedern Privilegien zu gewähren, die diese benötigen, und aktiv die Anzahl der Teammitglieder zu minimieren, denen sehr mächtige Berechtigungen erteilt werden.

### Sicherung von Werkzeugen

Bewerten Sie das Sicherheitsrisiko sämtlicher Werkzeuge, die Sie bei der Produktion Ihrer Website verwenden, einschließlich:

- Texteditoren und IDEs
- Editor-Plugins
- Quellkontrollsystemen
- Alle Werkzeuge, die in Ihren Build-, Test- und Bereitstellungsprozessen involviert sind

Für Open-Source-Softwareabhängigkeiten können Sie die von der [OpenSSF](https://openssf.org/) veröffentlichte [Kurze Anleitung zur Bewertung von Open-Source-Software](https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software) als Leitfaden verwenden.

### Sicherung Ihrer Konfiguration

Verstehen Sie und wenden Sie sichere Einstellungen für Ihre Werkzeuge an, insbesondere für Ihr Versionskontrollsystem. Wichtige Schutzmaßnahmen sind:

- Sicherstellen, dass Pull-Requests (PRs) überprüft und ausdrücklich von einem Code-Eigentümer genehmigt werden, bevor sie zusammengeführt werden können.
- Sicherstellen, dass PRs {{Glossary("continuous_integration", "Continuous Integration")}} Prüfungen bestehen, bevor sie zusammengeführt werden können.
- Erfordern, dass Commits signiert sind.

Siehe die OpenSSF [Best Practices zur Konfiguration von Quellcode-Verwaltungsplattformen](https://best.openssf.org/SCM-BestPractices/), die spezifische Checklisten für GitHub und GitLab enthalten.

## Verwaltung von Drittanbieterabhängigkeiten

Drittanbieterabhängigkeiten umfassen nicht nur Bibliotheken und Frameworks, die Ihr Code verwendet, sondern alle Drittanbieter-Werkzeuge, die im Entwicklungsprozess involviert sind, einschließlich Editoren, IDEs, Versionskontrollsystemen, Paketmanager und Build-Werkzeuge.

Um Probleme mit Drittanbieterabhängigkeiten zu vermindern, besprechen wir vier Praktiken:

1. Bewertung neuer Abhängigkeiten
2. Aktualisierung bestehender Abhängigkeiten
3. Pflege einer _Software-Bill of Materials_ (SBOM)
4. Verwendung von Subresource Integrity für externe Skripte

### Bewertung neuer Abhängigkeiten

Bevor Sie eine neue Abhängigkeit hinzufügen, sollten Sie überprüfen, wie hoch das Sicherheitsrisiko ist, das sie darstellt. Sie müssen sicher sein, dass die Abhängigkeit aktiv gepflegt wird, dass sie eine Erfolgsbilanz bei der Behebung von Problemen hat und es einen Prozess zur Meldung und Reaktion auf Sicherheitslücken gibt.

Sie sollten in Betracht ziehen, ob das Risiko, die Abhängigkeit hinzuzufügen, die Kosten der eigenen Implementierung der Funktion überwiegt.

Die von der [OpenSSF](https://openssf.org/) veröffentlichte [Kurze Anleitung zur Bewertung von Open-Source-Software](https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software) listet Fragen auf, die Sie sich stellen sollten, bevor Sie eine neue Abhängigkeit hinzufügen.

### Aktualisierung von Abhängigkeiten

Sobald Sie eine Abhängigkeit zu Ihrem Projekt hinzugefügt haben, wird der Lieferant der Abhängigkeit in der Regel neue Versionen mit neuen Funktionen, Fehlerbehebungen und Sicherheitskorrekturen herausgeben. Sie werden in der Regel von diesen Updates profitieren wollen, indem Sie einen Mechanismus implementieren, um die Abhängigkeit auf dem neuesten Stand zu halten. Tools wie GitHubs [dependabot](https://docs.github.com/en/code-security/getting-started/dependabot-quickstart-guide) können dabei helfen, indem sie neue Versionen von Abhängigkeiten erkennen und automatisch Pull-Requests zur Aktualisierung Ihres Projekts öffnen.

Allerdings birgt das zu eilige Aktualisieren von Abhängigkeiten eigene Risiken. Angenommen, Sie fügen eine Abhängigkeit zu einem vertrauenswürdigen Drittanbieterpaket hinzu. Ein Angreifer erhält dann die Kontrolle über das Konto des Entwicklers des Pakets und veröffentlicht ein bösartiges Update. Wenn Sie das Update sofort akzeptieren, wird Ihr Projekt kompromittiert.

#### Verwendung einer Lockdatei

Der erste Schritt zur Sicherung von Abhängigkeits-Updates ist die Verwendung einer _Lockdatei_ für Abhängigkeiten, diese im Quellcode-Verwaltungssystem zu kommitten und sie beim Erstellen Ihres Projekts zu verwenden.

Paketmanager wie [npm](https://www.npmjs.com/) und [Yarn](https://yarnpkg.com/) ermöglichen es Ihnen, eine Datei wie [package.json](https://docs.npmjs.com/cli/v10/configuring-npm/package-json?v=true) bereitzustellen, die die Abhängigkeiten Ihres Projekts auflistet. Sie können dann einen Befehl ausführen, der die angegebenen Abhängigkeiten installiert, damit das Projekt sie verwenden kann.

Die Abhängigkeitsliste bestimmt jedoch nicht die genaue Version jedes Pakets: Wenn der Lieferant des Pakets eine neue Version herausgibt, kann diese automatisch in Ihr Projekt aufgenommen werden, wenn es gebaut wird. Wenn die neue Version der Abhängigkeit bösartig ist, kann sie automatisch in Ihr Projekt aufgenommen werden, ohne dass Sie es überhaupt bemerken.

Angenommen, Ihre package.json enthält eine Abhängigkeit namens "example-dependency":

```json
{
  "name": "example-project",
  "version": "1.0.0",
  "dependencies": {
    "example-dependency": "^1.0.2"
  }
}
```

Angenommen, Ihr Projekt-Build-Prozess wird automatisch ausgeführt, wenn Ihre Lieferanten neue Versionen herausbringen. Der Build-Prozess startet den Build, indem er `npm install` aufruft. Dies holt die neueste Version von "example-dependency", die unter die Versionsbereich `"^1.0.2"` fällt.

In der Version `1.0.2`, die Sie dem Projekt hinzugefügt haben, ist "example-dependency" ein nützliches, harmloses Paket. Dann übernimmt ein Angreifer das Konto des Entwicklers von "example-dependency" und veröffentlicht eine bösartige `1.0.3` Version. Ihr Build-Prozess läuft, installiert das bösartige Paket, und Sie sind kompromittiert.

All dies ist ohne Änderungen an den direkten Artefakten Ihres Projekts geschehen oder ohne Möglichkeit für Sie, das Update zu überprüfen und zu sehen, ob es verdächtig aussieht.

Die Lösung dafür ist die Verwendung einer Lockdatei beim Erstellen Ihres Projekts. Eine Lockdatei wird automatisch generiert, wann immer die Abhängigkeiten eines Projekts installiert werden, und listet die genauen Versionen der direkten und indirekten Abhängigkeiten auf, die in einem Projekt verwendet werden.

Das heißt, wenn _package.json_ Ihnen mitteilt, dass Ihr Projekt "example-project" verwendet, dann wird _package.lock_ Ihnen genau mitteilen, welche Version von "example-project" zu verwenden ist und welche Versionen seiner Abhängigkeiten sind.

Die Lockdatei Ihres Projekts sollte im Quellkontrollsystem eingecheckt werden. Beim Erstellen Ihres Projekts sollten Sie die Lockdatei verwenden, um zu steuern, welche Versionen Ihrer Abhängigkeiten installiert werden: bei npm tun Sie dies, indem Sie [`npm ci`](https://docs.npmjs.com/cli/v10/commands/npm-ci) anstelle von `npm install` verwenden.

> [!NOTE]
> Das Festlegen der Versionen Ihrer Abhängigkeiten auf diese Weise wird manchmal als "Version Pinning" bezeichnet.

Dies bedeutet, dass Ihr Build-System eine Pull-Anfrage zur Aktualisierung der Lockdatei machen muss, um Abhängigkeiten zu aktualisieren, und dies gibt Ihnen die Gelegenheit, das Update zu überprüfen und sicherzustellen, dass Sie es akzeptieren möchten.

#### Aktualisierungen überprüfen

Wenn Sie ein Update für eine Abhängigkeit überprüfen, überlegen Sie, ob es ein Update ist, das Sie akzeptieren möchten:

- Lesen Sie das Änderungsprotokoll für die Veröffentlichung, um zu verstehen, was es anbietet (und ob Sie es überhaupt annehmen müssen).
- Sehen Sie, ob es zusätzliche Abhängigkeiten einführt.
- Wenn möglich, überprüfen Sie die Quellcode-Updates und sehen Sie, ob einige davon unerklärlich sind oder nicht mit dem Änderungsprotokoll übereinstimmen.
- Erwägen Sie, eine Weile zu warten, bevor Sie aktualisieren: Oftmals werden Lieferkettenangriffe schnell von Sicherheitsforschern entdeckt, und es ist besser für Sie, wenn ein Update als bösartig erkannt wird, bevor Sie es akzeptiert haben.

### Pflege einer Software-Bill of Materials

Um einen tieferen Einblick in Ihre Abhängigkeiten zu erhalten, können Sie ein detailliertes Inventar davon pflegen. Dies wird als _Software Bill of Materials_ (SBOM) bezeichnet.

Eine Lockdatei ist wirklich eine Art von SBOM: Der Begriff "SBOM" bezieht sich jedoch normalerweise auf ein separates Standardformat zur Darstellung von Abhängigkeiten. Diese Standards sind in der Regel sowohl breiter als auch tiefer als eine Lockdatei. Das heißt:

- Sie können Abhängigkeiten erfassen, wie Webdienste, die nicht in einer Lockdatei dargestellt werden.
- Sie können zusätzliche Informationen über jede Abhängigkeit erfassen, die nicht in einer Lockdatei dargestellt sind.

Die Verwendung eines Standardformats zur Darstellung einer SBOM bedeutet auch, dass Sie:

- Ihre SBOM mit Dritten teilen können
- Tools integrieren können, die Ihre SBOM für Zwecke wie regulatorische Compliance oder Überwachung von Schwachstellen verstehen können.

Die beiden häufigsten Standards zur Darstellung einer Software-Bill of Materials sind:

- [CycloneDX](https://cyclonedx.org/), ursprünglich entwickelt von [OWASP](https://owasp.org/).
- [SPDX](https://spdx.dev/), gepflegt von der [Linux Foundation](https://www.linuxfoundation.org/).

Beide Standards haben gute Unterstützung, und Sie können entweder verwenden, um die SBOM für Ihr Projekt darzustellen. SPDX war ursprünglich darauf fokussiert, Produkten zu helfen, sicherzustellen, dass sie mit Open-Source-Software-Lizenzen konform sind, hat aber Funktionen hinzugefügt, um Sicherheitsanwendungsfälle zu unterstützen. CycloneDX ist ein neuerer und leichterer Standard, der von Anfang an darauf ausgerichtet war, die Sicherheit der Lieferkette zu fördern.

#### Aufbau einer SBOM

> [!NOTE]
> In diesem Abschnitt verwenden wir CycloneDX als konkretes Beispiel für ein SBOM-Format.
>
> Dieser Abschnitt bietet nur eine kurze Einführung in einige der grundlegendsten Teile des CycloneDX-Objektmodells. [Authoritative Guide to SBOM](https://cyclonedx.org/guides/OWASP_CycloneDX-Authoritative-Guide-to-SBOM-en.pdf).

In CycloneDX sind alle Abhängigkeiten entweder _Komponenten_ oder _Dienste_.

- Komponenten umfassen, sind aber nicht beschränkt auf Software-Frameworks, Bibliotheken, Anwendungen und Konfigurationsdaten.
- Dienste stellen externe APIs dar, die Software aufrufen kann, beispielsweise über Endpunkt-URIs.

Jede direkt oder indirekt im Produkt verwendete Komponente und jeder Dienst wird durch ein Objekt in der SBOM dargestellt. Das Objekt enthält Informationen über das Item, einschließlich Name, Version, Autor, Lizenz, Beschreibung, {{Glossary("hash_function", "Hashes")}} (für Komponenten) und Endpunkt-URIs (für Dienste).

Die SBOM listet auch Schwachstellen auf, die in den Abhängigkeiten des Produkts identifiziert wurden. Jedes Element in der Liste enthält Informationen über diese Schwachstelle, einschließlich einer Beschreibung, einer Reihe von [CWE](https://cwe.mitre.org/index.html) Codes, Abschwächungen, Links zu Beratungsberichten und den Identifikatoren für die Komponenten oder Dienste, die die Schwachstelle betrifft.

#### Erstellung einer SBOM

Sie können eine SBOM für ein Produkt mit einem separaten Tool wie [cdxgen](https://cyclonedx.github.io/cdxgen/#/) oder einem Befehl wie [`npm sbom`](https://docs.npmjs.com/cli/v11/commands/npm-sbom) generieren. Eine SBOM wird in der Regel während des Build-Prozesses generiert, obwohl es auch möglich ist, sie in anderen Phasen des Software-Lebenszyklus zu generieren.

#### Verwendung einer SBOM

Eine SBOM ermöglicht es Ihnen, mehrere Verteidigungen gegen Lieferkettenangriffe zu implementieren, und wir listen hier drei wichtige auf:

- **Vulnerabilitätsmanagement**: Einer der Hauptverwendungszwecke für eine SBOM ist die Reaktion auf Schwachstellen, die in Ihren Abhängigkeiten identifiziert wurden. Sie können Drittanbieter-Tools wie OWASP's [Dependency-Track](https://dependencytrack.org/) nutzen, die dies automatisieren, indem sie Quellen für Schwachstellenberichte wie die [NIST National Vulnerability Database](https://nvd.nist.gov/) oder [GitHub Advisories](https://github.com/advisories) durchsuchen.
- **Integritätsprüfung**: Wenn die SBOM Hashes für Abhängigkeiten enthält, ist es möglich zu überprüfen, dass die Quelle der Komponente, von der Sie abhängen, nicht von ihrer ursprünglich veröffentlichten Form verändert wurde.
- **Lieferanten-Risikomanagement**: Durch das Erfassen von Informationen über den Lieferanten Ihrer Abhängigkeiten kann Ihnen eine SBOM helfen zu verstehen, wann Sie von Komponenten oder Diensten von Lieferanten abhängen, die nicht mehr als zuverlässig gelten.

### Verwendung von Subresource Integrity

Viele Websites beinhalten extern gehostete Skripte: am bekanntesten, aber nicht ausschließlich, Skripte, die von einem {{Glossary("CDN", "Content Delivery Network (CDN)")}} bereitgestellt werden:

```html
<script src="https://cdn.example.org/library.js"></script>
```

Dies stellt ein Risiko für Ihre Lieferkette dar: Wenn ein Angreifer die Kontrolle über die Domain `cdn.example.org` erlangen kann, kann er das Skript durch ein bösartiges ersetzen und somit Ihre Website kompromittieren.

Externe Skripte, wie andere Software-Abhängigkeiten, sollten Teil Ihrer SBOM sein, aber ein zusätzlicher Schutz ist die Einstellung des [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity) Attributs des Skripts:

```html
<script
  src="https://cdn.example.org/library.js"
  integrity="sha256-d5f450f7ce715d827de27ca569e183f819d33c1e7601875fd61eccbc98f56c5b"></script>
```

Der Wert dieses Attributs enthält einen {{Glossary("hash_function", "kryptografischen Hash")}} des Inhalts des Skripts. Wenn das Skript von einem Angreifer geändert wurde, wird der Browser sich weigern, es zu laden, und Sie werden geschützt.

Dies fügt eine zusätzliche Wartungsbelastung hinzu: Jedes Mal, wenn sich die Quelle ändert (zum Beispiel jedes Mal, wenn eine neue Version veröffentlicht wird), müssen Sie den Wert des Attributs in Ihrem Code aktualisieren.

Das {{htmlelement("link")}} Element unterstützt ebenfalls das `integrity` Attribut, sodass Sie es (und sollten) es sowohl für CSS-Stylesheets als auch Skripts verwenden.

Siehe [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity) für weitere Details.

## Verteidigungsübersicht Checkliste

- Erfordern Sie {{Glossary("multi-factor_authentication", "Multi-Faktor-Authentifizierung")}} für Teammitglieder und minimieren Sie die gewährten Berechtigungen.
- Bewerten Sie die Werkzeuge, die in Ihren Build-, Test- und Bereitstellungsprozessen involviert sind.
- Stellen Sie sicher, dass Pull-Requests überprüft werden und {{Glossary("continuous_integration", "Continuous Integration")}} Prüfungen bestehen.
- Minimieren Sie Ihre Abhängigkeiten und folgen Sie einem Prozess zur Bewertung neuer Abhängigkeiten.
- Verwenden Sie eine Lockdatei, um Updates Ihrer Abhängigkeiten zu steuern, und folgen Sie einem Prozess zur Annahme von Updates.
- Pflegen Sie eine SBOM und verwenden Sie sie, um nach Schwachstellen zu suchen.
- Verwenden Sie Subresource Integrity für extern referenzierte Skripte und Stylesheets.

## Siehe auch

- [Sicherheit der Software-Lieferkette](https://cheatsheetseries.owasp.org/cheatsheets/Software_Supply_Chain_Security_Cheat_Sheet.html) bei [owasp.org](https://owasp.org/)

JavaScript implementiert {{Glossary("inheritance", "Vererbung")}} mit _Prototypen_. Jedes Objekt hat einen Prototyp, der selbst ein Objekt ist, und der selbst einen Prototyp hat, und so weiter, bis wir zum grundlegenden Prototyp gelangen, der `Object.prototype` genannt wird, dessen eigener Prototyp `null` ist.

Wenn Sie versuchen, auf eine Eigenschaft oder eine Methode eines Objekts zuzugreifen und diese Eigenschaft oder Methode nicht auf diesem Objekt definiert ist, dann sucht die JavaScript-Laufzeit in dem Prototyp des Objekts nach der Eigenschaft oder Methode und dann im Prototyp des Prototyps des Objekts und so weiter, bis sie die Methode oder Eigenschaft findet oder ein Objekt erreicht, dessen Prototyp `null` ist.

Deshalb können Sie das tun:

```js
const myArray = new Array(1, 2, 3);
// prototype chain:
// myArray -> Array -> Object -> null

myArray.length;
// 3
// length is defined on the prototype of `myArray`, which is `Array.prototype`

myArray.toString();
// "1,2,3"
// toString() is defined on the prototype of `Array.prototype`, which is `Object`
```

Anders als viele andere Sprachen erlaubt es JavaScript, geerbte Eigenschaften und Methoden zur Laufzeit hinzuzufügen, indem Prototypen eines Objekts modifiziert werden:

```js
const myArray = new Array(1, 2, 3);

// modify the Object prototype at runtime
Object.prototype.extra = "new property!";

myArray.extra;
// "new property!"
```

Bei einem Prototype-Pollution-Angriff kann der Angreifer den Prototyp des Objekts ändern, um das Objekt auf unerwartete oder gefährliche Weise verhalten zu lassen.
