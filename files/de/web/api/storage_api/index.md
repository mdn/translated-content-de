---
title: Storage-API
slug: Web/API/Storage_API
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{securecontext_header}}{{DefaultAPISidebar("Storage")}} {{AvailableInWorkers}}

Der [Storage-Standard](https://storage.spec.whatwg.org/) definiert ein gemeinsames Speichersystem, das von allen APIs und Technologien genutzt werden kann, die Websites zur Speicherung von Daten im Browser eines Benutzers verwenden.

Die für eine Website gespeicherten Daten, die durch den Storage-Standard verwaltet werden, umfassen in der Regel [IndexedDB-Datenbanken](/de/docs/Web/API/IndexedDB_API) und [Cache-API-Daten](/de/docs/Web/API/Cache), können jedoch auch andere, für die Website zugängliche Daten umfassen, wie etwa [Web Storage API-Daten](/de/docs/Web/API/Web_Storage_API).

Die Storage-API ermöglicht es Websites herauszufinden, wie viel Speicherplatz sie nutzen können, wie viel sie bereits nutzen, und sogar zu kontrollieren, ob eine Benachrichtigung erforderlich ist, bevor der {{Glossary("user agent")}} Daten löscht, um Platz für andere Dinge zu schaffen.

Dieser Artikel bietet einen Überblick darüber, wie User Agents die Daten von Websites speichern und verwalten. Weitere Informationen zu Speicherbegrenzungen und Entfernungen finden Sie unter [Browser-Speicherquoten und Entfernungskriterien](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria).

Dieser Artikel bietet auch einen Überblick über die {{domxref("StorageManager")}}-Schnittstelle, die verwendet wird, um den verfügbaren Speicherplatz für eine Website abzuschätzen.

## Konzepte und Nutzung

### Speicher-Buckets

Das Speichersystem, das durch den Storage-Standard beschrieben wird und in dem die Daten der Website gespeichert werden, besteht in der Regel aus einem einzigen _Bucket_ für jedes {{Glossary("origin")}}.

Im Wesentlichen hat jede Website ihren eigenen Speicherplatz, in den ihre Daten abgelegt werden. In einigen Fällen können User Agents jedoch entscheiden, die Daten eines einzigen Ursprungs in mehreren verschiedenen Buckets zu speichern, beispielsweise wenn dieser Ursprung in verschiedenen Drittanbieteurssprüngen eingebettet ist.

Um mehr zu erfahren, siehe [Wie trennen Browser Daten von verschiedenen Websites?](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria#how_do_browsers_separate_data_from_different_websites)

### Bucket-Modi

Jeder Website-Speicher-Bucket hat einen _Modus_, der die Datenaufbewahrungsrichtlinie für diesen Bucket beschreibt. Es gibt zwei Modi:

- `"best-effort"`
  - : Der User Agent wird versuchen, die im Bucket enthaltenen Daten so lange wie möglich zu behalten, _wird jedoch die Nutzer nicht warnen_, wenn der Speicherplatz knapp wird und es notwendig wird, den Bucket zu leeren, um den Speicherplatzdruck zu verringern.
- `"persistent"`
  - : Der User Agent wird die Daten so lange wie möglich behalten und alle `"best-effort"`-Buckets leeren, bevor er in Erwägung zieht, einen als `"persistent"` markierten Bucket zu leeren. Sollte es notwendig werden, über das Löschen persistenter Buckets nachzudenken, wird der User Agent den Nutzer benachrichtigen und eine Möglichkeit bieten, einen oder mehrere persistente Buckets bei Bedarf zu löschen.

Sie können den Speicher-Bucket-Modus eines Ursprungs mit der Methode {{domxref("StorageManager.persist", "navigator.storage.persist()")}} ändern, die die Benutzerberechtigung `"persistent-storage"` [erfordert](/de/docs/Web/API/Permissions_API).

```js
if (navigator.storage && navigator.storage.persist) {
  navigator.storage.persist().then((persistent) => {
    if (persistent) {
      console.log("Storage will not be cleared except by explicit user action");
    } else {
      console.log("Storage may be cleared by the UA under storage pressure.");
    }
  });
}
```

Sie können auch die Methode {{domxref("StorageManager.persisted", "navigator.storage.persisted()")}} verwenden, um zu erfahren, ob der Speicher eines Ursprungs persistent ist oder nicht:

```js
if (navigator.storage && navigator.storage.persist) {
  navigator.storage.persisted().then((persistent) => {
    if (persistent) {
      console.log("Storage will not be cleared except by explicit user action");
    } else {
      console.log("Storage may be cleared by the UA under storage pressure.");
    }
  });
}
```

Um mehr zu erfahren, siehe [Bleiben browsergespeicherte Daten gespeichert?](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria#does_browser-stored_data_persist).

### Quoten und Nutzungsabschätzungen

Der User Agent legt mit einem von ihm gewählten Mechanismus fest, wie viel Speicherplatz eine bestimmte Website nutzen kann. Dieses Maximum ist die **Quota** des Ursprungs. Der Anteil dieses Speicherplatzes, der von der Website genutzt wird, wird als **Usage** bezeichnet. Beide Werte sind Schätzungen; es gibt mehrere Gründe, warum sie nicht exakt sind:

- User Agents werden ermutigt, die genaue Größe der von einem bestimmten Ursprung genutzten Daten zu verschleiern, um zu verhindern, dass diese Werte für [Fingerprinting](/de/docs/Glossary/Fingerprinting) Zwecke verwendet werden.
- Methoden zur Reduzierung der physischen Größe der gespeicherten Daten wie Deduplizierung und Komprimierung können verwendet werden.
- Quoten sind konservative Schätzungen des für die Nutzung durch den Ursprung verfügbaren Speicherplatzes und sollten geringer sein als der auf dem Gerät verfügbare Speicherplatz, um Überläufe zu vermeiden.

Um die geschätzten Quoten- und Nutzungswerte für einen bestimmten Ursprung zu ermitteln, verwenden Sie die Methode {{domxref("StorageManager.estimate", "navigator.storage.estimate()")}}, die ein Versprechen zurückgibt, das beim Auflösen ein Objekt mit diesen Zahlen erhält. Zum Beispiel:

```js
navigator.storage.estimate().then((estimate) => {
  // estimate.quota ist die geschätzte Quota
  // estimate.usage ist die geschätzte Anzahl der verwendeten Bytes
});
```

Weitere Informationen darüber, wie viele Daten ein Ursprung speichern kann, finden Sie unter [Wie viele Daten können gespeichert werden?](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria#how_much_data_can_be_stored).

### Datenlöschung

Die Datenlöschung ist der Prozess, bei dem ein User Agent die gespeicherten Daten eines Ursprungs löscht. Dies kann zum Beispiel passieren, wenn das zur Datenspeicherung genutzte Gerät wenig Speicherplatz hat.

Beim Löschen der von einem Ursprung gespeicherten Daten wird der Bucket des Ursprungs als eine einzelne Einheit behandelt. Alle von diesem Ursprung gespeicherten Daten werden gelöscht.

Wenn ein Bucket als `"persistent"` markiert ist, werden die Inhalte nicht vom User Agent gelöscht, ohne dass entweder der Ursprung der Daten selbst oder der Nutzer dies ausdrücklich tun. Dies schließt Szenarien wie das Auswählen einer Option „Caches leeren“ oder „Aktuellen Verlauf löschen“ ein. Der Nutzer wird speziell um Erlaubnis gebeten, um persistente Website-Speicher-Buckets zu entfernen.

Um mehr zu erfahren, siehe [Wann werden Daten gelöscht?](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria#when_is_data_evicted).

## Schnittstellen

- {{domxref("StorageManager")}}
  - : Bietet eine Schnittstelle zur Verwaltung von Persistenzberechtigungen und zur Schätzung des verfügbaren Speichers.

### Erweiterungen zu anderen Schnittstellen

- {{domxref("Navigator.storage")}} {{ReadOnlyInline}}
  - : Gibt das Singleton-Objekt {{domxref("StorageManager")}} zurück, das zur Verwaltung von Persistenzberechtigungen und zur Schätzung des verfügbaren Speichers auf Website-zu-Website-/App-zu-App-Basis verwendet wird.
- {{domxref("WorkerNavigator.storage")}} {{ReadOnlyInline}}
  - : Gibt eine {{domxref("StorageManager")}}-Schnittstelle zur Verwaltung von Persistenzberechtigungen und zur Schätzung des verfügbaren Speichers zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Permissions-API](/de/docs/Web/API/Permissions_API/Using_the_Permissions_API)
- [Storage for the web auf web.dev](https://web.dev/articles/storage-for-the-web)
- [Persistenter Speicher auf web.dev](https://web.dev/articles/persistent-storage)
- [Chrome Web Storage und Quoten-Konzepte](https://docs.google.com/document/d/19QemRTdIxYaJ4gkHYf2WWBNPbpuZQDNMpUVf8dQxj4U/edit)
