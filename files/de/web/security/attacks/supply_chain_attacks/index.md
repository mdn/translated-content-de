---
title: Lieferkettenangriffe
slug: Web/Security/Attacks/Supply_chain_attacks
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

Eine _Software-Lieferkette_ besteht aus allen Softwarekomponenten und Werkzeugen, die zur Erstellung und Wartung eines Softwareprodukts verwendet werden. Dazu gehört nicht nur die Software, die speziell für das Produkt entwickelt wurde, sondern auch alle Softwarekomponenten und Werkzeuge, die bei der Produktion verwendet werden.

Bei einem Lieferkettenangriff zielt der Angreifer auf einen Teil der Lieferkette des Produkts ab, um das Produkt selbst zu kompromittieren.

Das offensichtlichste Beispiel ist hier eine Drittanbieter-Bibliothek. Wenn Sie beispielsweise ein [npm](https://www.npmjs.com/)-Paket, das von einem Drittanbieter entwickelt wurde, verwenden, hat es die Möglichkeit, Ihre Seite zu kompromittieren. Es könnte dies absichtlich tun, wenn es bösartig ist, oder versehentlich, wenn es unbeabsichtigte Schwachstellen enthält. Im Wesentlichen müssen Sie Ihren Drittanbieter-Abhängigkeiten so viel vertrauen, wie Sie Ihrem eigenen Code vertrauen.

Weniger offensichtlich gilt das gleiche Prinzip für alle Werkzeuge, die Sie zur Erstellung Ihrer Software verwenden, einschließlich Code-Editoren, Editor-Plugins, Versionskontrollsystemen, Build-Werkzeugen und so weiter. Jedes dieser Werkzeuge könnte im Verlauf der Transformationen, die sie anwenden, bösartigen oder anfälligen Code in Ihr endgültiges Softwareprodukt einfügen.

In diesem Dokument werden wir Praktiken skizzieren, die befolgt werden sollten, um Ihre Software-Lieferkette zu sichern. Es ist in zwei Hauptabschnitte gegliedert:

- [Absichern Ihrer Entwicklungsumgebung](#absichern_ihrer_entwicklungsumgebung): Praktiken, um sicherzustellen, dass Ihr eigener Code nicht kompromittiert wird.
- [Verwalten von Drittanbieter-Abhängigkeiten](#verwalten_von_drittanbieter-abhängigkeiten): Praktiken, um sicherzustellen, dass Ihre Abhängigkeiten nicht kompromittiert sind.

## Absichern Ihrer Entwicklungsumgebung

Ein Weg für einen Lieferkettenangriff besteht darin, dass ein Angreifer Schwachstellen oder bösartigen Code direkt in Ihr eigenes Produkt einführt. In diesem Abschnitt werden wir einige Praktiken beschreiben, die dieser Bedrohung entgegenwirken können.

### Implementierung von Zugriffskontrollen

Implementieren Sie starke Zugriffskontrollen für alle, die an dem Projekt arbeiten, einschließlich aller, die Schreibzugriff auf Ihr Code-Repository oder die Erlaubnis zur Änderung der Build- oder Testkonfiguration haben. Gute Praktiken beinhalten:

- Die Anforderung von {{Glossary("multi-factor_authentication", "Multi-Faktor-Authentifizierung")}} für Teammitglieder.
- Das Befolgen des {{Glossary("principle_of_least_privilege", "Prinzips der geringsten Privilegien")}}: das heißt, nur Befugnisse an Teammitglieder zu vergeben, die sie tatsächlich brauchen, und die Anzahl der Teammitglieder, die sehr mächtige Berechtigungen erhalten, aktiv zu minimieren.

### Absicherung von Werkzeugen

Bewerten Sie das Sicherheitsrisiko aller Werkzeuge, die Sie bei der Produktion Ihrer Seite verwenden, einschließlich:

- Texteditoren und IDEs
- Editor-Plugins
- Versionskontrollsysteme
- Alle Werkzeuge, die an Ihren Build-, Test- und Deployment-Prozessen beteiligt sind

Für Open-Source-Software-Abhängigkeiten können Sie den [Praxis-Leitfaden zur Bewertung von Open-Source-Software](https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software), veröffentlicht von [OpenSSF](https://openssf.org/), als Leitfaden verwenden.

### Absicherung Ihrer Konfiguration

Verstehen Sie und wenden Sie sichere Einstellungen für Ihre Werkzeuge an, insbesondere für Ihr Versionskontrollsystem. Wichtige Schutzmaßnahmen sind:

- Sicherzustellen, dass Pull-Requests (PRs) vor dem Zusammenführen durch Überprüfung und ausdrückliche Genehmigung durch einen Code-Eigentümer gehen.
- Sicherzustellen, dass PRs {{Glossary("continuous_integration", "Continuous Integration")}}-Prüfungen bestehen, bevor sie zusammengeführt werden können.
- Erfordern, dass Commits signiert sind.

Siehe das OpenSSF [Source Code Management Platform Configuration Best Practices](https://best.openssf.org/SCM-BestPractices/), das spezifische Checklisten für GitHub und GitLab enthält.

## Verwalten von Drittanbieter-Abhängigkeiten

Drittanbieter-Abhängigkeiten umfassen nicht nur Bibliotheken und Frameworks, die Ihr Code verwendet, sondern auch alle Drittanbieter-Werkzeuge, die am Entwicklungsprozess beteiligt sind, einschließlich Editoren, IDEs, Versionskontrollsysteme, Paketmanager und Build-Werkzeuge.

Um Probleme mit Drittanbieter-Abhängigkeiten zu mindern, werden wir vier Praktiken besprechen:

1. Bewertung neuer Abhängigkeiten
2. Aktualisierung bestehender Abhängigkeiten
3. Pflege eines _Software Bill of Materials_ (SBOM)
4. Verwendung von Subresource Integrity für externe Skripte

### Bewertung neuer Abhängigkeiten

Bevor Sie eine neue Abhängigkeit hinzufügen, sollten Sie bewerten, wie viel Sicherheitsrisiko sie darstellt. Sie müssen sicher sein, dass die Abhängigkeit aktiv gepflegt wird, dass sie eine Bilanz für das Beheben von Problemen hat und dass es einen Prozess zum Melden und Reagieren auf Sicherheitslücken gibt.

Sie sollten in Betracht ziehen, ob das Risiko des Hinzufügens der Abhängigkeit die Kosten überwiegt, die Funktion selbst zu implementieren.

Der [Praxis-Leitfaden zur Bewertung von Open-Source-Software](https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software), veröffentlicht von [OpenSSF](https://openssf.org/), listet Fragen auf, die Sie stellen sollten, bevor Sie eine neue Abhängigkeit hinzufügen.

### Aktualisierung von Abhängigkeiten

Sobald Sie eine Abhängigkeit zu Ihrem Projekt hinzugefügt haben, wird der Anbieter der Abhängigkeit in der Regel neue Versionen mit neuen Funktionen, Bugfixes und Sicherheitsupdates veröffentlichen. Sie werden in der Regel von diesen Updates profitieren wollen, indem Sie einen Mechanismus implementieren, um die Abhängigkeit auf dem neuesten Stand zu halten. Tools wie GitHubs [dependabot](https://docs.github.com/en/code-security/getting-started/dependabot-quickstart-guide) können dabei helfen, indem sie neue Versionen von Abhängigkeiten erkennen und automatisch Pull-Requests öffnen, um Ihr Projekt zu aktualisieren.

Allerdings birgt das zu eifrige Aktualisieren von Abhängigkeiten eigene Risiken. Zum Beispiel, nehmen wir an, Sie fügen eine Abhängigkeit zu einem vertrauenswürdigen Drittanbieter-Paket hinzu. Ein Angreifer erlangt dann Kontrolle über das Konto des Paketentwicklers und veröffentlicht ein bösartiges Update. Wenn Sie das Update sofort akzeptieren, wird Ihr Projekt kompromittiert.

#### Verwendung eines Lockfiles

Der erste Schritt zur Sicherung von Abhängigkeits-Updates besteht darin, ein _Lockfile_ für Abhängigkeiten zu verwenden, es in die Versionskontrolle einzuchecken und es beim Build Ihres Projekts zu verwenden.

Paketmanager wie [npm](https://www.npmjs.com/) und [Yarn](https://yarnpkg.com/) ermöglichen es Ihnen, eine Datei wie [package.json](https://docs.npmjs.com/cli/configuring-npm/package-json/) bereitzustellen, die die Abhängigkeiten Ihres Projekts auflistet. Sie können dann einen Befehl ausführen, der die angegebenen Abhängigkeiten installiert, damit das Projekt sie verwenden kann.

Allerdings bestimmt die Abhängigkeitsliste nicht die genaue Version jedes Pakets: Wenn der Paketanbieter eine neue Version veröffentlicht, könnte sie automatisch in Ihr Projekt aufgenommen werden, wenn es gebaut wird. Wenn die neue Version der Abhängigkeit bösartig ist, könnte sie automatisch in Ihr Projekt aufgenommen werden, ohne dass Sie es überhaupt bemerken.

Zum Beispiel, nehmen wir an, Ihre package.json enthält eine Abhängigkeit namens "example-dependency":

```json
{
  "name": "example-project",
  "version": "1.0.0",
  "dependencies": {
    "example-dependency": "^1.0.2"
  }
}
```

Nehmen wir an, der Build-Prozess Ihres Projekts wird automatisch ausgeführt, wenn Ihre Anbieter neue Versionen veröffentlichen. Der Build-Prozess startet den Build durch Aufruf von `npm install`. Dies wird die neueste Version von "example-dependency" abrufen, entsprechend dem Versionsbereich `"^1.0.2"`.

In der Version `1.0.2`, dem Punkt, an dem Sie es dem Projekt hinzugefügt haben, ist "example-dependency" ein nützliches, harmloses Paket. Dann übernimmt ein Angreifer das Konto des Entwicklers von "example-dependency" und veröffentlicht eine bösartige Version `1.0.3`. Ihr Build-Prozess läuft, installiert das bösartige Paket, und Sie sind kompromittiert.

All dies ist passiert, ohne dass an den direkten Artefakten Ihres Projekts Änderungen vorgenommen wurden oder Sie die Gelegenheit hatten, das Update zu überprüfen und zu sehen, ob es verdächtig aussieht.

Die Lösung hierfür ist die Verwendung eines Lockfiles beim Build Ihres Projekts. Ein Lockfile wird automatisch generiert, wann immer die Abhängigkeiten eines Projekts installiert werden, und es listet die genauen Versionen der direkten und indirekten Abhängigkeiten auf, die in einem Projekt verwendet werden.

Das heißt, wenn _package.json_ Ihnen sagt, dass Ihr Projekt "example-dependency" verwendet, dann wird _package.lock_ Ihnen genau sagen, welche Version von "example-dependency" verwendet werden soll und welche Versionen der Abhängigkeiten es hat.

Das Lockfile Ihres Projekts sollte in die Versionskontrolle eingecheckt werden. Beim Build Ihres Projekts sollten Sie das Lockfile verwenden, um zu steuern, welche Versionen Ihrer Abhängigkeiten installiert werden: in npm tun Sie dies, indem Sie [`npm ci`](https://docs.npmjs.com/cli/commands/npm-ci/) anstelle von `npm install` verwenden.

> [!NOTE]
> Das Fixieren der Versionen Ihrer Abhängigkeiten auf diese Weise wird manchmal als "Version Pinning" bezeichnet.

Dies bedeutet, dass Ihr Build-System einen Pull-Request machen muss, um das Lockfile zu aktualisieren, und dies gibt Ihnen die Gelegenheit, das Update zu überprüfen und sicherzustellen, dass Sie es akzeptieren möchten.

#### Überprüfung von Updates

Beim Überprüfen eines Updates für eine Abhängigkeit, berücksichtigen Sie, ob es ein Update ist, das Sie akzeptieren möchten:

- Lesen Sie den Changelog der Veröffentlichung, um zu verstehen, was sie zu bieten behaupten (und ob Sie es überhaupt zu diesem Zeitpunkt akzeptieren müssen).
- Sehen Sie nach, ob es zusätzliche Abhängigkeiten einführt.
- Wenn möglich, überprüfen Sie die Quellcode-Updates und sehen Sie, ob einige von ihnen unerklärlich sind oder nicht mit dem Changelog übereinstimmen.
- Erwägen Sie, eine Weile zu warten, bevor Sie aktualisieren: oft werden Lieferkettenangriffe schnell von Sicherheitsexperten entdeckt, und es ist besser für Sie, wenn ein Update bösartig gefunden wird, bevor Sie es akzeptiert haben.

### Erstellung und Pflege eines Software Bill of Materials

Um einen tieferen Einblick in Ihre Abhängigkeiten zu erhalten, können Sie ein detailliertes Inventar von ihnen führen. Dies wird als _Software-Bill of Materials_ (SBOM) bezeichnet.

Ein Lockfile ist eigentlich eine Art SBOM: der Begriff "SBOM" bezieht sich jedoch normalerweise auf ein separates Standardformat für die Darstellung von Abhängigkeiten. Diese Standards sind in der Regel sowohl breiter als auch tiefer als ein Lockfile. Das heißt:

- Sie können Abhängigkeiten erfassen, wie z.B. Webdienste, die in einem Lockfile nicht dargestellt sind.
- Sie können zusätzliche Informationen zu jeder Abhängigkeit erfassen, die in einem Lockfile nicht erfasst sind.

Die Verwendung eines Standardformats für die Darstellung eines SBOM bedeutet auch, dass Sie:

- Ihr SBOM mit Dritten teilen können
- Tools integrieren können, die Ihr SBOM für Zwecke wie gesetzliche Compliance oder Schwachstellenüberwachung verstehen können

Die zwei gängigsten Standards zur Darstellung einer Software-Bill of Materials sind:

- [CycloneDX](https://cyclonedx.org/), ursprünglich entwickelt von [OWASP](https://owasp.org/).
- [SPDX](https://spdx.dev/), gepflegt von der [Linux Foundation](https://www.linuxfoundation.org/).

Beide Standards haben eine gute Unterstützung und Sie können entweder verwenden, um das SBOM für Ihr Projekt darzustellen. SPDX war initial darauf fokussiert, Produkten zu helfen, sicherzustellen, dass sie mit Open-Source-Softwarelizenzen konform sind, hat jedoch Funktionen hinzugefügt, um Sicherheitsanwendungen zu unterstützen. CycloneDX ist ein neuerer und leichterer Standard, der von Anfang an darauf fokussiert war, die Sicherheit der Lieferkette zu fördern.

#### Anatomie eines SBOM

> [!NOTE]
> In diesem Abschnitt werden wir CycloneDX als konkretes Beispiel für ein SBOM-Format verwenden.
>
> Dieser Abschnitt bietet nur eine kurze Einführung in einige der grundlegendsten Teile des CycloneDX-Objektmodells. Für die vollständigen Details siehe den CycloneDX [Authoritative Guide to SBOM](https://cyclonedx.org/guides/OWASP_CycloneDX-Authoritative-Guide-to-SBOM-en.pdf).

In CycloneDX sind alle Abhängigkeiten entweder _Komponenten_ oder _Dienste_.

- Komponenten umfassen, sind aber nicht beschränkt auf, Software-Frameworks, Bibliotheken, Anwendungen und Konfigurationsdaten.
- Dienste repräsentieren externe APIs, die Software aufrufen kann, zum Beispiel durch Endpoint-URIs.

Jede Komponente und jeder Dienst, der im Produkt verwendet wird, entweder direkt oder indirekt, wird durch ein Objekt im SBOM dargestellt. Das Objekt enthält Informationen über das Element, einschließlich seines Namens, seiner Version, seines Autors, seiner Lizenz, seiner Beschreibung, {{Glossary("hash_function", "Hashes")}} (für Komponenten) und Endpoint-URIs (für Dienste).

Das SBOM listet auch Schwachstellen auf, die in den Abhängigkeiten des Produkts identifiziert wurden. Jedes Element in der Liste enthält Informationen über diese Schwachstelle, einschließlich einer Beschreibung, einer Reihe von [CWE](https://cwe.mitre.org/index.html)-Codes, Abhilfemaßnahmen, Links zu Beratungen und den Identifikatoren für die Komponenten oder Dienste, die die Schwachstelle betrifft.

#### Erstellung eines SBOM

Sie können ein SBOM für ein Produkt mithilfe eines separaten Tools wie [cdxgen](https://cyclonedx.github.io/cdxgen/#/) oder eines Befehls wie [`npm sbom`](https://docs.npmjs.com/cli/commands/npm-sbom/) erzeugen. Ein SBOM wird in der Regel als Teil des Build-Prozesses erstellt, obwohl es möglich ist, eines in anderen Phasen des Software-Lebenszyklus zu generieren.

#### Verwendung eines SBOM

Ein SBOM ermöglicht es Ihnen, mehrere Verteidigungen gegen Lieferkettenangriffe zu implementieren, und wir werden hier drei wichtige auflisten:

- **Schwachstellenmanagement**: eine der Hauptverwendungen für ein SBOM besteht darin, auf Schwachstellen, die in Ihren Abhängigkeiten identifiziert wurden, zu reagieren. Sie können Drittanbieter-Tools wie OWASPs [Dependency-Track](https://dependencytrack.org/) verwenden, die dies automatisieren, indem sie Quellen von Schwachstellenberichten scannen, wie die [NIST National Vulnerability Database](https://nvd.nist.gov/) oder [GitHub Advisories](https://github.com/advisories).
- **Integritätsüberprüfung**: Wenn das SBOM Hashes für Abhängigkeiten enthält, ist es möglich zu überprüfen, dass die Quelle der Komponente, von der Sie abhängen, nicht von ihrer ursprünglich freigegebenen Form geändert wurde.
- **Lieferantenrisikomanagement**: Durch das Erfassen von Informationen über den Anbieter Ihrer Abhängigkeiten kann ein SBOM Ihnen helfen zu verstehen, wann Sie von Komponenten oder Diensten von Anbietern abhängen, die nicht mehr als zuverlässig angesehen werden.

### Verwendung von Subresource Integrity

Viele Websites schließen extern gehostete Skripte ein: am bekanntesten, aber nicht ausschließlich, Skripte, die von einem {{Glossary("CDN", "Content Delivery Network (CDN)")}} serviert werden:

```html
<script src="https://cdn.example.org/library.js"></script>
```

Dies stellt ein Risiko für Ihre Lieferkette dar: Wenn ein Angreifer die Kontrolle über die Domain `cdn.example.org` erlangt, kann er das Skript durch ein bösartiges Skript ersetzen und somit Ihre Seite kompromittieren.

Externe Skripte sollten, wie andere Software-Abhängigkeiten, Teil Ihres SBOM sein, aber eine zusätzliche Verteidigung besteht darin, das [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity)-Attribut des Skripts zu setzen:

```html
<script
  src="https://cdn.example.org/library.js"
  integrity="sha256-d5f450f7ce715d827de27ca569e183f819d33c1e7601875fd61eccbc98f56c5b"></script>
```

Der Wert dieses Attributs enthält einen {{Glossary("hash_function", "kryptografischen Hash")}} des Skriptinhalts. Wenn das Skript von einem Angreifer geändert wurde, wird der Browser sich weigern, es zu laden, und Sie werden geschützt.

Dies führt zu einem zusätzlichen Wartungsaufwand: Jedes Mal, wenn sich die Quelle ändert (beispielsweise jedes Mal, wenn eine neue Version veröffentlicht wird), müssen Sie den Attributwert in Ihrem Code aktualisieren.

Das {{htmlelement("link")}}-Element unterstützt ebenfalls das `integrity`-Attribut, sodass Sie es sowohl für CSS-Stylesheets als auch für Skripte verwenden sollten.

Siehe [Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity) für weitere Details.

## Verteidigungs-Checkliste

- Erfordern Sie {{Glossary("multi-factor_authentication", "Multi-Faktor-Authentifizierung")}} für Teammitglieder und minimieren Sie gewährte Berechtigungen.
- Bewerten Sie die Werkzeuge, die an Ihren Build-, Test- und Deployment-Prozessen beteiligt sind.
- Stellen Sie sicher, dass Pull-Requests einer Überprüfung unterzogen werden und {{Glossary("continuous_integration", "Continuous Integration")}}-Prüfungen bestehen.
- Minimieren Sie Ihre Abhängigkeiten und folgen Sie einem Prozess zur Bewertung neuer Abhängigkeiten.
- Verwenden Sie ein Lockfile, um Updates zu Ihren Abhängigkeiten zu steuern, und folgen Sie einem Prozess zum Akzeptieren von Updates.
- Pflegen Sie ein SBOM und verwenden Sie es zum Überprüfen von Schwachstellen.
- Verwenden Sie Subresource Integrity für extern referenzierte Skripte und Stylesheets.

## Siehe auch

- [Software Supply Chain Security](https://cheatsheetseries.owasp.org/cheatsheets/Software_Supply_Chain_Security_Cheat_Sheet.html) bei [owasp.org](https://owasp.org/)
