---
title: Serializable object
slug: Glossary/Serializable_object
l10n:
  sourceCommit: 8b6cec0ceff01e7a9d6865cf5306788e15cce4b8
---

{{GlossarySidebar}}

**Serielle Objekte** sind Objekte, die in jeder JavaScript-Umgebung ("realm") serialisiert und später deserialisiert werden können. Dies ermöglicht es ihnen beispielsweise, auf einer Festplatte gespeichert und später wiederhergestellt zu werden, mit [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) geklont zu werden oder mithilfe von [`DedicatedWorkerGlobalScope.postMessage()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/postMessage) zwischen Arbeitern geteilt zu werden.

Die Serialisierung muss nicht alle Eigenschaften und anderen Aspekte des ursprünglichen Objekts einschließen. Zum Beispiel muss eine Serialisierung einer [`DOMException`](/de/docs/Web/API/DOMException) die Eigenschaften `name` und `message` enthalten, aber ob sie andere Eigenschaften enthält, hängt von der Implementierung ab. Als Ergebnis könnte ein deserialisiertes Objekt nicht eine identische Kopie des ursprünglichen Objekts sein. Das neue deserialisierte Objekt wird jedoch eine [tiefen Kopie](/de/docs/Glossary/deep_copy) sein, sodass alle Eigenschaften, die vom ursprünglichen Objekt serialisiert und dann in das neue Objekt deserialisiert wurden, keine Referenzen mit dem ursprünglichen Objekt teilen.

In einigen Fällen, wenn ein Objekt serialisiert und deserialisiert wird, macht es Sinn, einige Ressourcen zu übertragen anstatt eine Kopie zu erstellen. Objekte, die übertragen werden können, werden als [Transferable objects](/de/docs/Web/API/Web_Workers_API/Transferable_objects) bezeichnet.

## Unterstützte Objekte

Alle primitiven Werte sind seriell. Nicht alle Objekte sind serielle Objekte. Die Objekte, die serialisiert werden können, sind aufgelistet in: [Der strukturierte Klonalgorithmus > Unterstützte Typen](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#supported_types)

> [!NOTE]
> Serielle Objekte sind in [Web IDL Dateien](https://github.com/w3c/webref/tree/main/ed/idl) mit dem Attribut `[Serializable]` markiert.
