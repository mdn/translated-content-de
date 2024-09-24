---
title: Serialisierbares Objekt
slug: Glossary/Serializable_object
l10n:
  sourceCommit: 9409e72722add6d1c4baeaf7b262c9b0985c0bcf
---

{{GlossarySidebar}}

**Serialisierbare Objekte** sind Objekte, die in jedem JavaScript-Umfeld ("realm") serialisiert und später deserialisiert werden können. Dies ermöglicht es ihnen zum Beispiel, auf Festplatte gespeichert und später wiederhergestellt zu werden, oder mit {{domxref("structuredClone()")}} geklont oder zwischen Arbeitern mit {{domxref("DedicatedWorkerGlobalScope.postMessage()")}} geteilt zu werden.

Die Serialisierung muss nicht alle Eigenschaften und andere Aspekte des ursprünglichen Objekts einschließen. Zum Beispiel muss eine Serialisierung eines {{domxref("DOMException")}} die `name`- und `message`-Eigenschaften enthalten, aber ob andere Eigenschaften enthalten sind, hängt von der Implementierung ab. Infolgedessen kann ein deserialisiertes Objekt kein identischer Klon/Kopie des ursprünglichen Objekts sein. Das neue deserialisierte Objekt wird jedoch eine {{glossary("deep copy")}} sein, sodass alle Eigenschaften, die vom ursprünglichen Objekt serialisiert und dann in das neue Objekt deserialisiert wurden, keine Referenzen mit dem ursprünglichen Objekt teilen werden.

In einigen Fällen kann es beim Serialisieren und Deserialisieren eines Objekts sinnvoll sein, einige Ressourcen zu übertragen, anstatt eine Kopie zu erstellen. Objekte, die übertragen werden können, werden [Transferierbare Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects) genannt.

## Unterstützte Objekte

Alle primitiven Werte sind serialisierbar. Nicht alle Objekte sind serialisierbare Objekte. Die Objekte, die serialisiert werden können, sind aufgelistet unter: [Der strukturierte Klon-Algorithmus > Unterstützte Typen](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#supported_types)

> [!NOTE]
> Serialisierbare Objekte sind in [Web IDL Dateien](https://github.com/w3c/webref/tree/main/ed/idl) mit dem Attribut `[Serializable]` gekennzeichnet.
