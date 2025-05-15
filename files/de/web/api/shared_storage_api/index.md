---
title: Shared Storage API
slug: Web/API/Shared_Storage_API
l10n:
  sourceCommit: a8c6558339dafb20c51bc34b2d75c8c1343634ac
---

{{SeeCompatTable}}{{DefaultAPISidebar("Shared Storage API")}}

> [!WARNING]
> Diese Funktion wird derzeit von einem Browser-Anbieter abgelehnt.
> Siehe den Abschnitt [Standards Positionen](#standards_positionen) unten für Details.

Die **Shared Storage API** ist ein clientseitiger Speichermechanismus, der unpartitionierten, seitenübergreifenden Datenzugriff ermöglicht, während die Privatsphäre gewahrt bleibt (d.h. ohne auf Tracking-Cookies angewiesen zu sein).

## Konzepte und Nutzung

Eine große Quelle von [Datenschutz](/de/docs/Web/Privacy)- und [Sicherheits](/de/docs/Web/Security)-problemen im Web ist die Verwendung von Cookies, die auf Drittanbieterinhalten gesetzt werden, die in Webseiten eingebettet sind (zum Beispiel über {{htmlelement("iframe")}}-Elemente). Diese Cookies können verwendet werden, um Nutzer zu verfolgen und zu profilieren und Informationen über verschiedene Seiten hinweg zu teilen.

Um das seitenübergreifende Tracking zu verhindern, arbeiten Browser daran, alle Speichertypen zu partitionieren, einschließlich [Cookies](/de/docs/Web/HTTP/Guides/Cookies), [Web Storage](/de/docs/Web/API/Web_Storage_API), [IndexedDB](/de/docs/Web/API/IndexedDB_API) und der [Cache API](/de/docs/Web/API/Cache). Ein großes Hindernis, um dies zu erreichen, ist jedoch die Notwendigkeit mehrerer legitimer Anwendungsfälle, die auf dem Austausch von Informationen über Seiten hinweg basieren. Beispiele für solche Anwendungsfälle sind Werbetreibende, die die Reichweite ihrer Anzeigen über mehrere Seiten hinweg messen und Berichte erstellen wollen, sowie Seitenbesitzer, die Benutzererfahrungen basierend auf der Gruppe, zu der ein Benutzer gehört, oder seinen vorherigen Interaktionen auf der Seite anpassen möchten.

Die Shared Storage API bietet eine flexible Lösung für solche Anwendungsfälle. Sie zielt darauf ab, die notwendigen Daten-Speicher-, Verarbeitungs- und Austauschmöglichkeiten bereitzustellen, ohne die Möglichkeit, Nutzer zu verfolgen und zu profilieren.

Wie andere Storage APIs können Sie jederzeit auf den gemeinsamen Speicher schreiben. Allerdings können Sie Daten aus dem gemeinsamen Speicher nur aus einem [Worklet](/de/docs/Web/API/SharedStorageWorklet) lesen. Worklets bieten eine sichere Umgebung, in der Sie Daten des gemeinsamen Speichers verarbeiten und nützliche Ergebnisse zurückgeben können, aber Sie können die Daten nicht direkt mit dem zugehörigen Browsing-Kontext teilen.

Um nützliche Ergebnisse aus einem Shared Storage Worklet zu extrahieren, müssen Sie ein **Ausgabegatter** verwenden. Diese Gatter erfüllen spezifische Zwecke wie die Auswahl einer URL aus einer bereitgestellten Liste, um sie dem Benutzer basierend auf gespeicherten Daten anzuzeigen. Ergebnisse, die für den Benutzer bestimmt sind, werden sicher in einem [fenced frame](/de/docs/Web/API/Fenced_frame_API) angezeigt, wo sie von der einbettenden Seite nicht abgerufen werden können.

## Ausgabegatter

Die derzeit verfügbaren Ausgabegatter für die Shared Storage API werden in den folgenden Abschnitten diskutiert. In jedem Abschnitt listen wir typische Anwendungsfälle für jedes Gatter auf und bieten Links zu Leitfäden mit weiteren Informationen und Codebeispielen.

> [!NOTE]
> Es werden wahrscheinlich in Zukunft weitere Ausgabegatter hinzugefügt, um zusätzliche Anwendungsfälle zu unterstützen.

### URL-Auswahl

Das **URL-Auswahl**-Ausgabegatter, das über die [`selectURL()`](/de/docs/Web/API/WindowSharedStorage/selectURL)-Methode zugänglich ist, wird verwendet, um eine URL aus einer bereitgestellten Liste auszuwählen, die dem Benutzer auf der Grundlage von gespeicherten Daten angezeigt werden soll. Dieses Gatter kann für folgende Zwecke verwendet werden:

- [**Kreativrotation**](https://privacysandbox.google.com/private-advertising/select-url/creative-rotation): Verwenden Sie gespeicherte Daten wie Kreativ-IDs, Ansichtsanzahlen und Benutzerinteraktionen, um zu bestimmen, welche kreativen Inhalte den Benutzern auf verschiedenen Seiten angezeigt werden. Dieser Ansatz hilft, Ansichten auszugleichen und eine übermäßige Exposition bestimmter Inhalte zu verhindern, was wiederum dazu beitragen kann, ein negatives Benutzererlebnis zu vermeiden.
- [**A/B-Testing**](https://privacysandbox.google.com/private-advertising/select-url/ab-testing): Weisen Sie einen Benutzer einer Versuchsgruppe zu und speichern Sie die Gruppendetails im gemeinsamen Speicher für einen seitenübergreifenden Zugriff.
- [**Benutzerdefinierte Erfahrungen**](https://privacysandbox.google.com/private-advertising/select-url/known-customer): Teilen Sie benutzerdefinierte Inhalte und Handlungsempfehlungen basierend auf dem Registrierungsstatus eines Benutzers oder anderen Benutzerstatus.

### Ausführen

Das **Run**-Ausgabegatter, das über die [`run()`](/de/docs/Web/API/WindowSharedStorage/run)-Methode zugänglich ist, soll auf generische Weise verwendet werden, um einige im gemeinsamen Speicher gespeicherten Daten zu verarbeiten.

Die [Private Aggregation API](https://privacysandbox.google.com/private-advertising/private-aggregation) kann das Run-Ausgabegatter verwenden, um Daten des gemeinsamen Speichers zu verarbeiten und aggregierte Berichte zu erstellen. Diese Berichte können für die folgenden Anwendungsfälle verwendet werden:

- [**Einzigartige Reichweitenberichterstattung**](https://privacysandbox.google.com/private-advertising/private-aggregation/unique-reach): Inhaltsproduzenten und Werbetreibende möchten oft die Anzahl der einzigartigen Zuschauer für ihre Inhalte wissen. Sie können den gemeinsamen Speicher verwenden, um das erste Mal zu melden, dass ein Benutzer Ihre Anzeige oder eingebettete Publikation sieht, und verhindern, dass der gleiche Benutzer auf einer anderen Seite doppelt gezählt wird, wodurch Sie einen aggregierten, verrauschten Bericht über die ungefähre einzigartige Reichweite erhalten.
- [**Berichterstattung über demografische Nutzerdaten**](https://privacysandbox.google.com/private-advertising/private-aggregation/user-demographics): Inhaltsproduzenten möchten oft die demografischen Daten ihres Publikums verstehen. Sie können den gemeinsamen Speicher verwenden, um demografische Nutzerdaten auf Ihrer Hauptseite zu erfassen und eine aggregierte Berichterstattung darüber auf anderen Seiten in eingebetteten Kontexten vorzunehmen.
- [**K+ Frequenzmessung**](https://privacysandbox.google.com/private-advertising/private-aggregation/k-freq-reach): Manchmal als "effektive Frequenz" beschrieben, bezieht sich K+ Frequenz auf die minimale Anzahl von Ansichten, die benötigt wird, bevor ein Benutzer bestimmte Inhalte erkennt oder sich daran erinnert (oft im Zusammenhang mit Anzeigenansichten verwendet). Sie können den gemeinsamen Speicher verwenden, um Berichte über einzigartige Benutzer zu erstellen, die ein Stück Inhalt mindestens K Mal gesehen haben.

## Verstehen, wie der gemeinsame Speicher funktioniert

Es gibt zwei Teile bei der Verwendung der Shared Storage API – das Schreiben von Daten in den Speicher und das Lesen/Verarbeiten dieser. Um Ihnen eine Vorstellung davon zu geben, wie diese Teile gehandhabt werden, führen wir Sie durch das grundlegende [A/B-Test-] (https://privacysandbox.google.com/private-advertising/select-url/ab-testing)-Beispiel von developer.chrome.com. In diesem Beispiel wird ein Benutzer einer Versuchsgruppe zugewiesen und die Gruppendetails werden im gemeinsamen Speicher gespeichert. Andere Seiten können diese Daten verwenden, wenn sie eine URL auswählen, die in einem [fenced frame](/de/docs/Web/API/Fenced_frame_API) angezeigt werden soll.

### Schreiben in den gemeinsamen Speicher

Das Schreiben von Daten in den gemeinsamen Speicher ist einfach – Sie verwenden Methoden, die auf der [`SharedStorage`](/de/docs/Web/API/SharedStorage)-Schnittstelle definiert sind, um Daten zu [setzen](/de/docs/Web/API/SharedStorage/set), [anzuhängen](/de/docs/Web/API/SharedStorage/append) oder zu [löschen](/de/docs/Web/API/SharedStorage/delete)/[löschen](/de/docs/Web/API/SharedStorage/clear).

Diese Funktionalität ist in zwei verschiedenen Kontexten verfügbar:

- Im Haupt-Browsing-Kontext, in dem Ihre Seite oder App läuft, auf [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage). Dies ist über `window.sharedStorage` verfügbar.
- Im Kontext Ihres Shared Storage Worklet, auf [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage). Dies ist über `this.sharedStorage` verfügbar.

In unserem A/B-Test-Beispiel definieren wir eine Funktion in unserem App-Kontext, die eine zufällige Zahl generiert – 0 oder 1 – um eine Versuchsgruppe darzustellen. Wir führen dann die [`window.sharedStorage.set()`](/de/docs/Web/API/SharedStorage/set)-Funktion aus, um den Benutzer einer Gruppe zuzuweisen und das Ergebnis im gemeinsamen Speicher zu speichern:

```js
// Randomly assigns a user to a group 0 or 1
function getExperimentGroup() {
  return Math.round(Math.random());
}

async function injectContent() {
  // Assign user to a random group (0 or 1) and store it in shared storage
  window.sharedStorage.set("ab-testing-group", getExperimentGroup(), {
    ignoreIfPresent: true,
  });
}
```

> [!NOTE]
> Die `ignoreIfPresent: true`-Option führt dazu, dass die `set()`-Funktion abbricht, wenn der gemeinsame Speicher bereits ein Datenobjekt mit dem angegebenen Schlüssel enthält.

### Lesen und Verarbeiten von Daten aus dem gemeinsamen Speicher

Wie oben erwähnt, müssen Sie ein **Ausgabegatter** verwenden, um nützliche Ergebnisse aus einem Shared Storage Worklet zu extrahieren. In diesem Beispiel verwenden wir das [URL-Auswahl-Ausgabegatter](#url-auswahl), um die Versuchsgruppe des Benutzers zu lesen und dann eine URL in einem fenced frame anzuzeigen, basierend auf ihrer Gruppe.

Um das Ausgabegatter zu verwenden, müssen Sie:

1. Eine Operation in einem Worklet-Modulskript definieren, um die Auswahl der URL zu verwalten, und sie registrieren.
2. Das Modul zu Ihrem Shared Storage Worklet hinzufügen.
3. Die URL mit der Worklet-Operation auswählen und in einem fenced frame laden.

Im Folgenden schauen wir uns diese Schritte ein für ein an.

#### Definieren einer Operation in einem Worklet-Modul

Die URL-Auswahl basiert auf der im gemeinsamen Speicher gespeicherten Versuchsgruppe. Um diesen Wert abzurufen und eine URL basierend darauf auszuwählen, müssen wir eine Operation in einem [`SharedStorageWorklet`](/de/docs/Web/API/SharedStorageWorklet)-Kontext definieren. Dies stellt sicher, dass die Rohdaten vor anderen Kontexten verborgen bleiben und somit die Privatsphäre gewahrt bleibt.

Die URL-Auswahl-Operation ist eine JavaScript-Klasse, die den folgenden Regeln entsprechen muss (diese Regeln variieren für jedes Ausgabegatter, abhängig von ihrem vorgesehenen Anwendungsfall):

- Die eigentliche Funktionalität muss in einer asynchronen `run()`-Methode enthalten sein, die ein Array von Objekten mit URLs als ersten Parameter und ein Datenobjekt als zweiten Parameter nimmt (wenn sie aufgerufen wird, ist das Datenargument optional).
- Die `run()`-Methode muss eine Zahl zurückgeben, die der Nummer der ausgewählten URL entspricht.

> [!NOTE]
> Jedes Ausgabegatter hat eine entsprechende Schnittstelle, die die erforderliche Struktur ihrer Klasse und der `run()`-Methode definiert. Für die URL-Auswahl siehe [`SharedStorageSelectURLOperation`](/de/docs/Web/API/SharedStorageSelectURLOperation).

Sobald die Operation definiert ist, muss sie mit [`SharedStorageWorkletGlobalScope.register()`](/de/docs/Web/API/SharedStorageWorkletGlobalScope/register) registriert werden.

```js
// ab-testing-worklet.js
class SelectURLOperation {
  async run(urls, data) {
    // Read the user's experiment group from shared storage
    const experimentGroup = await this.sharedStorage.get("ab-testing-group");

    // Return the group number
    return experimentGroup;
  }
}

register("ab-testing", SelectURLOperation);
```

Beachten Sie, wie der im Haupt-App-Kontext gesetzte Wert mit [`WorkletSharedStorage.get()`](/de/docs/Web/API/WorkletSharedStorage/get) abgerufen wird. Zur Wiederholung: Um die Privatsphäre zu wahren und Datenlecks zu vermeiden, können Sie Werte aus dem gemeinsamen Speicher nur innerhalb eines Worklets lesen.

> [!NOTE]
> Es ist möglich, mehrere Operationen im selben Shared Storage Worklet-Modulskript mit verschiedenen Namen zu definieren und zu registrieren; siehe [`SharedStorageOperation`](/de/docs/Web/API/SharedStorageOperation) für ein Beispiel.

#### Das Modul zum Shared Storage Worklet hinzufügen

Um die im Worklet-Modul definierte Operation zu verwenden, muss sie dem Shared Storage Worklet mit [`window.sharedStorage.worklet.addModule()`](/de/docs/Web/API/Worklet/addModule) hinzugefügt werden. In unserem Haupt-App-Kontext geschieht dies, bevor wir den Wert der Versuchsgruppe setzen, sodass er einsatzbereit ist, wenn er benötigt wird:

```js
async function injectContent() {
  // Add the module to the shared storage worklet
  await window.sharedStorage.worklet.addModule("ab-testing-worklet.js");

  // Assign user to a random group (0 or 1) and store it in shared storage
  window.sharedStorage.set("ab-testing-group", getExperimentGroup(), {
    ignoreIfPresent: true,
  });
}
```

#### Wählen Sie eine URL aus und laden Sie sie in einen fenced frame

Um die im Worklet definierte Operation auszuführen, rufen wir [`WindowSharedStorage.selectURL()`](/de/docs/Web/API/WindowSharedStorage/selectURL) auf. Diese Methode fungiert als Proxy zu unserer Worklet-Operation, greift sicher darauf zu und gibt das Ergebnis zurück, ohne Daten zu leaken. `selectURL()` ist die richtige Methode, um unsere benutzerdefinierte Worklet-Operation aufzurufen, weil sie mit der entsprechenden Klassenstruktur für eine URL-Auswahl-Operation definiert wurde, wie oben beschrieben.

`selectURL()` erwartet ein Array von Objekten, die URLs enthalten, aus denen gewählt werden soll, ein optionales Optionsobjekt, und dass die zugrunde liegende Operation einen Integer zurückgibt, den sie zur Auswahl einer URL verwenden kann.

```js
// Run the URL selection operation
const fencedFrameConfig = await window.sharedStorage.selectURL(
  "ab-testing",
  [
    { url: `https://your-server.example/content/default-content.html` },
    { url: `https://your-server.example/content/experiment-content-a.html` },
  ],
  {
    resolveToConfig: true,
  },
);
```

Da das Optionsobjekt `resolveToConfig: true` enthält, wird der zurückgegebene {{jsxref("Promise")}} mit einem [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekt aufgelöst. Dieses Objekt kann als Wert der [`HTMLFencedFrameElement.config`](/de/docs/Web/API/HTMLFencedFrameElement/config)-Eigenschaft gesetzt werden, sodass der Inhalt der ausgewählten URL im entsprechenden {{htmlelement("fencedframe")}}-Element angezeigt wird:

```js
document.getElementById("content-slot").config = fencedFrameConfig;
```

Das vollständige App-Skript sieht folgendermaßen aus:

```js
// Randomly assigns a user to a group 0 or 1
function getExperimentGroup() {
  return Math.round(Math.random());
}

async function injectContent() {
  // Add the module to the shared storage worklet
  await window.sharedStorage.worklet.addModule("ab-testing-worklet.js");

  // Assign user to a random group (0 or 1) and store it in shared storage
  window.sharedStorage.set("ab-testing-group", getExperimentGroup(), {
    ignoreIfPresent: true,
  });

  // Run the URL selection operation
  const fencedFrameConfig = await window.sharedStorage.selectURL(
    "ab-testing",
    [
      { url: `https://your-server.example/content/default-content.html` },
      { url: `https://your-server.example/content/experiment-content-a.html` },
    ],
    {
      resolveToConfig: true,
    },
  );

  // Render the chosen URL into a fenced frame
  document.getElementById("content-slot").config = fencedFrameConfig;
}

injectContent();
```

## Unterschiede zwischen shared storage und web storage

Der Hauptunterschied besteht darin, dass shared storage für die Verwendung mit datenbasiertem Cross-Origin-Zugriff bestimmt ist, nachdem der Speicher partitioniert wurde.

- Wenn Sie ein Publisher sind und First-Party-Daten speichern möchten, die nur für Sie zugänglich sind, verwenden Sie die [`localStorage`](/de/docs/Web/API/Window/localStorage)-Version von [web storage](/de/docs/Web/API/Web_Storage_API).
- Wenn Sie möchten, dass Daten nur während einer Browsersitzung bestehen bleiben, verwenden Sie [`sessionStorage`](/de/docs/Web/API/Window/sessionStorage).
- Wenn Sie als Drittanbieter auf einer anderen Seite tätig sind und Daten von dieser Seite speichern möchten, um später auf einer anderen Seite darauf zuzugreifen, verwenden Sie shared storage.

Ein weiterer wichtiger Unterschied zwischen shared storage und web storage ist, dass das Lesen von shared storage geschützt ist (das Schreiben in den Speicher verhält sich ähnlich). Bei `localStorage` und `sessionStorage` können Sie frei lesen. Bei shared storage kann das Lesen nur innerhalb eines Shared Storage Worklets erfolgen und der Ursprung, der im Worklet zum Lesen verwendet wird, ist derselbe wie derjenige des Browsing-Kontextes, der es erstellt hat.

Darüber hinaus können Sie Daten des shared storage außerhalb eines Shared Storage Worklets nicht extrahieren, als Schutzmechanismus vor Tracking. Sie müssen eines der Ausgabegatter verwenden, um mit Ihren gespeicherten Daten zu arbeiten.

Zuletzt, Daten in `localStorage` bestehen, bis sie manuell gelöscht werden. `sessionStorage` wird am Ende einer Browsersitzung gelöscht, während shared storage Daten 30 Tage nach dem letzten Schreibaufruf gelöscht werden.

## Schnittstellen

- [`SharedStorage`](/de/docs/Web/API/SharedStorage)
  - : Repräsentiert den gemeinsamen Speicher für einen bestimmten Ursprung. Es definiert Methoden zum Schreiben von Daten in den gemeinsamen Speicher.
- [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage)
  - : Repräsentiert den gemeinsamen Speicher für einen bestimmten Ursprung, der einem Standard-Browsing-Kontext zur Verfügung steht. Unter anderem definiert es Methoden zur Nutzung der verfügbaren Ausgabegatter, die als Proxy für die im Worklet definierten Operationen wirken.
- [`WorkletSharedStorage`](/de/docs/Web/API/WorkletSharedStorage)
  - : Repräsentiert den gemeinsamen Speicher für einen bestimmten Ursprung im Worklet-Kontext. Unter anderem definiert es Methoden zum Lesen der Daten im gemeinsamen Speicher.
- [`SharedStorageWorklet`](/de/docs/Web/API/SharedStorageWorklet)
  - : Repräsentiert das Worklet des gemeinsamen Speichers für den aktuellen Ursprung. Es enthält die Methode [`addModule()`](/de/docs/Web/API/Worklet/addModule) zum Hinzufügen von Modulen. Im Gegensatz zu einem regulären [`Worklet`](/de/docs/Web/API/Worklet) kann das `SharedStorageWorklet` aus Datenschutzgründen nur ein einzelnes Modul hinzugefügt werden.
- [`SharedStorageWorkletGlobalScope`](/de/docs/Web/API/SharedStorageWorkletGlobalScope)
  - : Repräsentiert den globalen Bereich eines [`SharedStorageWorklet`](/de/docs/Web/API/SharedStorageWorklet)-Moduls. Es enthält die Funktionalität, eine definierte Operation zu [registrieren](/de/docs/Web/API/SharedStorageWorkletGlobalScope/register) und [auf den gemeinsamen Speicher zuzugreifen](/de/docs/Web/API/SharedStorageWorkletGlobalScope/sharedStorage).

### Signaturdefinitionen der Ausgabegatter-Operationen

- [`SharedStorageOperation`](/de/docs/Web/API/SharedStorageOperation)
  - : Repräsentiert die Basisklasse für alle verschiedenen Typen von Ausgabegatter-Operationen.
- [`SharedStorageRunOperation`](/de/docs/Web/API/SharedStorageRunOperation)
  - : Repräsentiert eine Run-Ausgabegatter-Operation.
- [`SharedStorageSelectURLOperation`](/de/docs/Web/API/SharedStorageSelectURLOperation)
  - : Repräsentiert eine URL-Auswahl-Ausgabegatter-Operation.

### Erweiterungen zu anderen Schnittstellen

- [`Window.sharedStorage`](/de/docs/Web/API/Window/sharedStorage)
  - : Gibt das [`WindowSharedStorage`](/de/docs/Web/API/WindowSharedStorage)-Objekt für den aktuellen Ursprung zurück.

## Anmeldung und lokales Testen

Um die Shared Storage API auf Ihren Seiten zu verwenden, müssen Sie sie im [Privacy-Sandbox-Anmeldeprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) angeben. Andernfalls werden die Methoden der Shared Storage API nicht erfolgreich ausgeführt.

Sie können Ihren Shared Storage API-Code lokal testen, ohne eine Anmeldung. Zum lokalen Testen aktivieren Sie die folgende Chrome-Entwicklerflagge:

`chrome://flags/#privacy-sandbox-enrollment-overrides`

## Beispiele

Für umfangreiche Demos siehe die [Shared Storage API-Demoseite](https://shared-storage-demo.web.app/), die auch einige Private Aggregation API-Beispiele beinhaltet.

## Spezifikationen

{{Specifications}}

### Standards Positionen

Ein Browser-Anbieter {{Glossary("Web_standards#opposing_standards", "lehnt")}} diese Spezifikation ab.
Bekannte Standpunktpositionen sind wie folgt:

- Mozilla (Firefox): [Negativ](https://github.com/mozilla/standards-positions/issues/646)

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Shared Storage](https://privacysandbox.google.com/private-advertising/shared-storage) auf privacysandbox.google.com
- [The Privacy Sandbox](https://privacysandbox.google.com/) auf privacysandbox.google.com
